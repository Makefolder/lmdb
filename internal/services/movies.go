package services

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/url"
	"os"

	"github.com/aegislash525/lmdb/database"
	"github.com/aegislash525/lmdb/internal/types"
	"github.com/aegislash525/lmdb/pkg/responses"
	"github.com/aegislash525/lmdb/pkg/utils"
)

type tmdbResponse struct {
	Page    int           `json:"page"`
	Results []types.Movie `json:"results"`
}

func Search(title string, page int) utils.Map {
	var body tmdbResponse
	encoded := url.QueryEscape(title)
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/search/movie?query=%s&include_adult=false&language=uk-UA&page=%d&api_key=%s",
		encoded, page, os.Getenv("API_KEY"))
	err := utils.Fetch(url, &body)
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	setGenres(&body.Results)
	return responses.SuccessData(body)
}

func Similar(id int) utils.Map {
	key := fmt.Sprintf("similar_mov_%d", id)
	url := fmt.Sprintf("https://api.themoviedb.org/3/movie/%d/similar?api_key=%s&language=uk-UA",
		id, os.Getenv("API_KEY"))
	return discoverLogic(key, url)
}

func Discover(page int) utils.Map {
	key := fmt.Sprintf("discover_%d", page)
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/discover/movie?api_key=%s&page=%d&include_adult=false&%s",
		os.Getenv("API_KEY"), page, "language=uk-UA")
	return discoverLogic(key, url)
}

func discoverLogic(key string, url string) utils.Map {
	var body tmdbResponse
	res, err := cacheMovies(url, key, body)
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	return responses.SuccessData(utils.Map{
		"page":    res.Page,
		"results": res.Results,
	})
}

func Details(id int, lang string) utils.Map {
	var body types.MovieDetails
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/movie/%d?api_key=%s&language=%s",
		id, os.Getenv("API_KEY"), lang)

	key := fmt.Sprintf("movie_details_%d", id)
	res, err := cache(url, key, body)
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	err = json.Unmarshal(res, &body)
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	if len(body.Overview) == 0 && lang != "en-US" {
		log.Println("changing language...")
		database.Client.Del(context.Background(), key)
		return Details(id, "en-US")
	}
	return responses.SuccessData(body)
}

func Images(id int) utils.Map {
	var body struct {
		ID        int           `json:"id"`
		Backdrops []types.Image `json:"backdrops"`
	}
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/movie/%d/images?api_key=%s",
		id, os.Getenv("API_KEY"))

	key := fmt.Sprintf("movie_images_%d", id)
	res, err := cache(url, key, body)
	if err != nil {
		return responses.InternalErr
	}
	err = json.Unmarshal(res, &body)
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	return responses.SuccessData(body)
}

func Videos(id int) utils.Map {
	var body struct {
		ID      int           `json:"id"`
		Results []types.Video `json:"results"`
	}
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/movie/%d/videos?api_key=%s",
		id, os.Getenv("API_KEY"))

	key := fmt.Sprintf("movie_video_%d", id)
	res, err := cache(url, key, body)
	if err != nil {
		return responses.InternalErr
	}
	err = json.Unmarshal(res, &body)
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	return responses.SuccessData(body)
}
