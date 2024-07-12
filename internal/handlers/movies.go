package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/aegislash525/lmdb/internal/services"
	"github.com/aegislash525/lmdb/pkg/responses"
)

func returnErr(w *http.ResponseWriter) {
	(*w).WriteHeader(http.StatusInternalServerError)
	json.NewEncoder(*w).Encode(responses.InternalErr)
}

func Search(w http.ResponseWriter, r *http.Request) {
	page, err := strconv.Atoi(r.PathValue("page"))
	if err != nil {
		returnErr(&w)
		return
	}
	result := services.Search(r.PathValue("title"), page)
	setHeader(&w, result)
	json.NewEncoder(w).Encode(result)
}

func Similar(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		returnErr(&w)
		return
	}
	result := services.Similar(id)
	setHeader(&w, result)
	json.NewEncoder(w).Encode(result)
}

func Videos(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		returnErr(&w)
		return
	}
	result := services.Videos(id)
	setHeader(&w, result)
	json.NewEncoder(w).Encode(result)
}

func Discover(w http.ResponseWriter, r *http.Request) {
	page, err := strconv.Atoi(r.PathValue("page"))
	if err != nil {
		returnErr(&w)
		return
	}
	result := services.Discover(page)
	setHeader(&w, result)
	json.NewEncoder(w).Encode(result)
}

func Details(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		returnErr(&w)
		return
	}
	result := services.Details(id, "uk-UA")
	setHeader(&w, result)
	json.NewEncoder(w).Encode(result)
}

func setHeader(w *http.ResponseWriter, result map[string]any) {
	status, ok := result["status"]
	if ok {
		(*w).WriteHeader(status.(int))
		return
	}
	(*w).WriteHeader(http.StatusInternalServerError)
}
