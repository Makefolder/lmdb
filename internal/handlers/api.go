package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aegislash525/lmdb/pkg/utils"
)

func Index(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(utils.Map{
		"status":  http.StatusOK,
		"message": "success",
		"path":    r.URL.Path,
		"method":  r.Method,
	})
}
