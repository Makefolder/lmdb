package types

type Movie struct {
	MovID  uint   `json:"movie_id" gorm:"primary_key;unique"`
	ID     int    `json:"id"`
	Poster string `json:"poster_path"`

	Title    string   `json:"title"`
	Overview string   `json:"overview"`
	GenreID  []int    `json:"genre_ids"`
	GenreStr []string `json:"genre_strings"`
	Release  string   `json:"release_date"`

	OriginalTitle string  `json:"original_title"`
	OriginalLang  string  `json:"original_language"`
	Popularity    float64 `json:"popularity"`
	VoteAVG       float64 `json:"vote_average"`
	VoteCount     int     `json:"vote_count"`
}
