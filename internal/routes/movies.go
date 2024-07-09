package routes

import (
	"net/http"

	"github.com/aegislash525/lmdb/internal/handlers"
	"github.com/aegislash525/lmdb/pkg/middleware"
)

func movies(mux *http.ServeMux) {
	mux.HandleFunc("GET /api/v1/movie/{page}", middleware.Logger(handlers.Discover))
}
