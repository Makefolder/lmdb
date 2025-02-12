package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/aegislash525/lmdb/database"
	"github.com/aegislash525/lmdb/internal/initializers"
	"github.com/aegislash525/lmdb/internal/routes"
	"github.com/aegislash525/lmdb/internal/services"
	"github.com/aegislash525/lmdb/pkg/middleware"
)

func init() {
	initializers.LoadEnv()
	database.ConnectRedis()
	database.ConnectSqlite()
	services.GetGenres()
}

func main() {
	migrate := flag.Bool("m", false, "migrate the models to sqlite3 database")
	flag.Parse()
	if *migrate {
		database.Migrate()
	}

	addr := os.Getenv("ADDR")
	port := os.Getenv("PORT")

	mux := http.NewServeMux()
	routes.Setup(mux)
	log.Printf("serving on %s:%s.\n", addr, port)
	log.Fatal(http.ListenAndServe(
		fmt.Sprintf("%s:%s", addr, port),
		middleware.SetupCors(mux)),
	)
}
