package routes

import (
	"net/http"

	"github.com/aegislash525/lmdb/internal/handlers"
	"github.com/aegislash525/lmdb/pkg/middleware"
)

func movies(mux *http.ServeMux) {
	mux.HandleFunc("GET /api/v1/movie/discover/{page}", middleware.Logger(handlers.Discover))
	mux.HandleFunc("GET /api/v1/movie/i/{id}", middleware.Logger(handlers.Details))
	mux.HandleFunc("GET /api/v1/movie/i/{id}/images", middleware.Logger(handlers.Images))
	mux.HandleFunc("GET /api/v1/movie/i/{id}/videos", middleware.Logger(handlers.Videos))
	mux.HandleFunc("GET /api/v1/movie/i/{id}/similar", middleware.Logger(handlers.Similar))
	mux.HandleFunc("GET /api/v1/movie/s/{title}/{page}", middleware.Logger(handlers.Search))
}
