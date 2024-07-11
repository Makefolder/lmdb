package services

import (
	"context"
	"encoding/json"
	"log"
	"time"

	"github.com/aegislash525/lmdb/database"
	"github.com/aegislash525/lmdb/pkg/utils"
)

func cache(url string, key string, body any) ([]byte, error) {
	val, err := database.Client.Get(context.Background(), key).Result()
	if err == nil {
		return []byte(val), nil
	}
	internal := body

	// if not cached
	err = utils.Fetch(url, &internal)
	if err != nil {
		return nil, err
	}

	res, err := json.Marshal(internal)
	if err != nil {
		return nil, err
	}

	err = database.Client.Set(
		context.Background(), key, res, (time.Hour*24)*4).Err()
	if err != nil {
		return nil, err
	}
	return res, nil
}

func cacheMovies(url string, key string, body tmdbResponse) (tmdbResponse, error) {
	val, err := database.Client.Get(context.Background(), key).Result()
	internal := body
	if err == nil {
		err = json.Unmarshal([]byte(val), &internal)
		if err != nil {
			log.Println(err)
			return tmdbResponse{}, err
		}
		return internal, nil
	}

	// if not cached
	err = utils.Fetch(url, &internal)
	if err != nil {
		return tmdbResponse{}, err
	}

	setGenres(&internal.Results)
	res, err := json.Marshal(internal)
	if err != nil {
		return tmdbResponse{}, err
	}

	err = database.Client.Set(
		context.Background(), key, res, (time.Hour*24)*4).Err()
	if err != nil {
		return tmdbResponse{}, err
	}
	return internal, nil
}
