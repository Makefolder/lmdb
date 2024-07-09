package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/aegislash525/lmdb/internal/services"
	"github.com/aegislash525/lmdb/pkg/responses"
)

func Discover(w http.ResponseWriter, r *http.Request) {
	page, err := strconv.Atoi(r.PathValue("page"))
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(responses.InternalErr)
		return
	}
	result := services.Discover(page)
	status, ok := result["status"]
	if ok {
		w.WriteHeader(status.(int))
	} else {
		w.WriteHeader(http.StatusInternalServerError)
	}
	json.NewEncoder(w).Encode(result)
}
