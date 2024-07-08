package initializers

import (
	"log"

	"github.com/joho/godotenv"
)

func LoadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("failed loading .env\n")
	}
	log.Println(".env file has been loaded")
}
