package tests

import (
	"fmt"
	"log"
	"os"
	"testing"

	"github.com/aegislash525/lmdb/pkg/utils"
	"github.com/joho/godotenv"
)

type response struct {
	Success bool   `json:"success"`
	Status  int    `json:"status_code"`
	Message string `json:"status_message"`
}

var expected = response{
	Success: true,
	Status:  1,
	Message: "Success.",
}

func init() {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("failed loading .env\n")
	}
	log.Println(".env file has been loaded")
}

func TestKey(t *testing.T) {
	var body response
	url := fmt.Sprintf("https://api.themoviedb.org/3/authentication?api_key=%s", os.Getenv("API_KEY"))
	err := utils.Fetch(url, &body)
	if err != nil {
		t.Error(err)
		return
	}
	check(t, expected, body)
}

func check(t *testing.T, expect response, result response) {
	if expect.Status != result.Status {
		t.Error("error in status (int)")
	} else if expect.Message != result.Message {
		t.Error("error in message (string)")
	} else if expect.Success != result.Success {
		t.Error("error in success (bool)")
	}
}
