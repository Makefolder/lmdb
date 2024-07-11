package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/aegislash525/lmdb/internal/services"
	"github.com/aegislash525/lmdb/pkg/responses"
)

func GetWatchlist(w http.ResponseWriter, r *http.Request) {
	result := services.GetWatchlist()
	setHeader(&w, result)
	json.NewEncoder(w).Encode(result)
}

func AddMovie(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(responses.InternalErr)
		return
	}
	result := services.AddMovie(id)
	setHeader(&w, result)
	json.NewEncoder(w).Encode(result)
}

func RemoveMovie(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(responses.InternalErr)
		return
	}
	result := services.RemoveMovie(id)
	setHeader(&w, result)
	json.NewEncoder(w).Encode(result)
}
