package utils

import (
	"encoding/json"
	"io"
	"net/http"
)

// Data is supposed to be pointer to object to fetch into.
func Fetch(url string, data any) error {
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return err
	}
	req.Header.Add("accept", "application/json")
	res, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer res.Body.Close()
	body, err := io.ReadAll(res.Body)
	if err != nil {
		return err
	}
	json.Unmarshal(body, data)
	return nil
}
