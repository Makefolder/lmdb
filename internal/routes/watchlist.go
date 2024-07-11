package routes

import (
	"net/http"

	"github.com/aegislash525/lmdb/internal/handlers"
	"github.com/aegislash525/lmdb/pkg/middleware"
)

func watchlist(mux *http.ServeMux) {
	mux.HandleFunc("GET /api/v1/g/watchlist", middleware.Logger(handlers.GetWatchlist))
	mux.HandleFunc("POST /api/v1/s/watchlist/{id}", middleware.Logger(handlers.AddMovie))
	mux.HandleFunc("DELETE /api/v1/r/watchlist/{id}", middleware.Logger(handlers.RemoveMovie))
}
