package middleware

import (
	"fmt"
	"log"
	"net/http"
)

func Logger(f http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var colour string
		switch r.Method {
		case "GET":
			colour = "\033[32m"
		case "POST":
			colour = "\033[33m"
		case "PUT":
			colour = "\033[34m"
		case "DELETE":
			colour = "\033[31m"
		}
		reset := "\033[0m"
		message := fmt.Sprintf("%s%s%s %s", colour, r.Method, reset, r.URL.Path)
		log.Println(message)
		f(w, r)
	}
}
