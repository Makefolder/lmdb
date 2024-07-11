package services

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/aegislash525/lmdb/database"
	"github.com/aegislash525/lmdb/internal/repositories"
	"github.com/aegislash525/lmdb/internal/types"
	"github.com/aegislash525/lmdb/pkg/responses"
	"github.com/aegislash525/lmdb/pkg/utils"
)

type CardInfo struct {
	ID       int      `json:"id"`
	Adult    bool     `json:"adult"`
	Poster   string   `json:"poster_path"`
	Rating   float64  `json:"vote_average"`
	Release  string   `json:"release_date"`
	Title    string   `json:"title"`
	GenreIDs []int    `json:"genre_ids"`
	GenreStr []string `json:"genre_strings"`
}

func GetWatchlist() utils.Map {
	var details []CardInfo
	movies, err := repositories.Get()
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	for i := 0; i < len(movies); i++ {
		details = append(details, getDetails(movies[i].MovID, "uk-UA"))
	}
	return responses.SuccessData(details)
}

func AddMovie(id int) utils.Map {
	result, err := repositories.Save(id)
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	return responses.SuccessData(result)
}

func RemoveMovie(id int) utils.Map {
	err := repositories.Delete(id)
	if err != nil {
		log.Println(err)
		return responses.InternalErr
	}
	return responses.Success
}

func getDetails(id int, lang string) CardInfo {
	var cardInfo CardInfo
	var body types.MovieDetails
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/movie/%d?api_key=%s&language=%s",
		id, os.Getenv("API_KEY"), lang)

	key := fmt.Sprintf("movie_details_%d", id)
	res, err := cache(url, key, body)
	if err != nil {
		panic(err)
	}
	err = json.Unmarshal(res, &body)
	if err != nil {
		panic(err)
	}
	if len(body.Overview) == 0 && lang != "en-US" {
		log.Println("changing language...")
		database.Client.Del(context.Background(), key)
		return getDetails(id, "en-US")
	}
	remap(body, &cardInfo)
	return cardInfo
}

func remap(md types.MovieDetails, ci *CardInfo) {
	(*ci).ID = md.ID
	(*ci).Adult = md.Adult
	(*ci).Poster = md.PosterPath
	(*ci).Rating = md.VoteAVG
	(*ci).Release = md.ReleaseDate
	(*ci).Title = md.Title
	splitGenres(md.Genres, &(*ci).GenreIDs, &(*ci).GenreStr)
}

func splitGenres(genres []types.Genre, ids *[]int, strs *[]string) {
	for i := 0; i < len(genres); i++ {
		*ids = append(*ids, genres[i].ID)
		*strs = append(*strs, genres[i].Name)
	}
}
