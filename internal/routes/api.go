package routes

import (
	"net/http"

	"github.com/aegislash525/lmdb/internal/handlers"
	"github.com/aegislash525/lmdb/pkg/middleware"
)

func Setup(mux *http.ServeMux) {
	mux.HandleFunc("GET /api/v1/", middleware.Logger(handlers.Index))
	mux.HandleFunc("POST /api/v1/", middleware.Logger(handlers.Index))
	mux.HandleFunc("PUT /api/v1/", middleware.Logger(handlers.Index))
	mux.HandleFunc("DELETE /api/v1/", middleware.Logger(handlers.Index))

	movies(mux)
	watchlist(mux)
}
