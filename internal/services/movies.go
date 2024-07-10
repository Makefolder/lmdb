package services

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/aegislash525/lmdb/database"
	"github.com/aegislash525/lmdb/internal/types"
	"github.com/aegislash525/lmdb/pkg/responses"
	"github.com/aegislash525/lmdb/pkg/utils"
)

var Genres = make(map[int]string)

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
	if len(body.Overview) == 0 && language != "en-US" {
		log.Println("changing language...")
		database.Client.Del(context.Background(), key)
		return Details(id, "en-US")
	}
	return responses.SuccessData(body)
}

func Discover(page int) utils.Map {
	var body struct {
		Page    int           `json:"page"`
		Results []types.Movie `json:"results"`
	}
	key := fmt.Sprintf("discover_%d", page)
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/discover/movie?api_key=%s&page=%d&include_adult=false&%s",
		os.Getenv("API_KEY"), page, "language=uk-UA")

	res, err := cache(url, key, body)
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	err = json.Unmarshal(res, &body)
	if err != nil {
		return responses.InternalErr
	}
	return responses.SuccessData(utils.Map{
		"page":    body.Page,
		"results": body.Results,
	})
}

func cache(url string, key string, body any) ([]byte, error) {
	internal := body
	val, err := database.Client.Get(context.Background(), key).Result()
	if err == nil {
		return []byte(val), nil
	}

	// if not cached
	err = utils.Fetch(url, &internal)
	if err != nil {
		return nil, err
	}

	res, err := json.Marshal(internal)
	if err != nil {
		return nil, err
	}

	err = database.Client.Set(context.Background(), key, res, (time.Hour*24)*4).Err()
	if err != nil {
		return nil, err
	}
	return res, nil
}

func GetGenres() {
	var body struct {
		Genres []struct {
			ID   int    `json:"id"`
			Name string `json:"name"`
		} `json:"genres"`
	}
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/genre/movie/list?language=uk-UA&api_key=%s",
		os.Getenv("API_KEY"))
	err := utils.Fetch(url, &body)
	if err != nil {
		panic("failed to fetch genres")
	}
	for i := 0; i < len(body.Genres); i++ {
		Genres[body.Genres[i].ID] = body.Genres[i].Name
	}
	log.Println("genres have been loaded!")
}

func setGenres(data *[]types.Movie) {
	for i := 0; i < len(*data); i++ {
		for j := 0; j < len((*data)[i].GenreID); j++ {
			(*data)[i].GenreStr = append((*data)[i].GenreStr, Genres[(*data)[i].GenreID[j]])
		}
	}
}
