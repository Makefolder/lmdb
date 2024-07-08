package routes

import (
	"net/http"

	"github.com/aegislash525/lmdb/internal/handlers"
	"github.com/aegislash525/lmdb/pkg/middleware"
)

func Api(mux *http.ServeMux) {
	mux.HandleFunc("GET /", middleware.Logger(handlers.Index))
	mux.HandleFunc("POST /", middleware.Logger(handlers.Index))
	mux.HandleFunc("PUT /", middleware.Logger(handlers.Index))
	mux.HandleFunc("DELETE /", middleware.Logger(handlers.Index))
}
