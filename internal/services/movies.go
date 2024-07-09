package services

import (
	"fmt"
	"log"
	"os"

	"github.com/aegislash525/lmdb/internal/types"
	"github.com/aegislash525/lmdb/pkg/responses"
	"github.com/aegislash525/lmdb/pkg/utils"
)

var Genres = make(map[int]string)

func Discover(page int) utils.Map {
	var movies struct {
		Page    int           `json:"page"`
		Results []types.Movie `json:"results"`
	}
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/discover/movie?api_key=%s&page=%d&include_adult=false&language=uk-UA",
		os.Getenv("API_KEY"), page)
	err := utils.Fetch(url, &movies)
	if err != nil {
		return responses.InternalErr
	}
	setGenres(&movies.Results)
	return responses.SuccessData(utils.Map{
		"page":    movies.Page,
		"results": movies.Results,
	})
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
