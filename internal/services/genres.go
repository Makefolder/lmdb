package services

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/aegislash525/lmdb/internal/types"
)

var genres = make(map[int]string)

func GetGenres() {
	var body struct {
		Genres []struct {
			ID   int    `json:"id"`
			Name string `json:"name"`
		} `json:"genres"`
	}
	url := fmt.Sprintf(
		"https://api.themoviedb.org/3/genre/movie/list?language=uk&api_key=%s",
		os.Getenv("API_KEY"),
	)
	key := "genres"
	res, err := cache(url, key, body)
	if err != nil {
		panic("failed to fetch genres")
	}
	err = json.Unmarshal(res, &body)
	for i := 0; i < len(body.Genres); i++ {
		genres[body.Genres[i].ID] = body.Genres[i].Name
	}
	log.Println("genres have been loaded!")
}

func setGenres(data *[]types.Movie) {
	for i := 0; i < len(*data); i++ {
		for j := 0; j < len((*data)[i].GenreID); j++ {
			(*data)[i].GenreStr = append(
				(*data)[i].GenreStr,
				genres[(*data)[i].GenreID[j]],
			)
		}
	}
}
