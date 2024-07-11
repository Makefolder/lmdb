package types

type Movie struct {
	ID     int    `json:"id"`
	Adult  bool   `json:"adult"`
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

type MovieID struct {
	ID    uint `json:"primary_key" gorm:"primarykey;unique"`
	MovID int  `json:"id" gorm:"column:movie_id;unique"`
}
