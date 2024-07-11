package types

type Genre struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type MovieDetails struct {
	PrimaryKey uint    `json:"primary_key" gorm:"primarykey;unique"`
	Adult      bool    `json:"adult"`
	Backdrop   string  `json:"backdrop_path"`
	Budget     float64 `json:"budget"`
	Collection struct {
		ID       int    `json:"id"`
		Name     string `json:"name"`
		Poster   string `json:"poster_path"`
		Backdrop string `json:"backdrop_path"`
	} `json:"belongs_to_collection"`
	Genres        []Genre  `json:"genres"`
	Homepage      string   `json:"homepage"`
	ID            int      `json:"id"`
	IMDBID        string   `json:"imdb_id"`
	OriginCountry []string `json:"origin_country"`
	OrigLanguage  string   `json:"original_language"`
	OrigTitle     string   `json:"original_title"`
	Overview      string   `json:"overview"`
	Popularity    float64  `json:"popularity"`
	PosterPath    string   `json:"poster_path"`
	ProdCompanies []struct {
		ID            int    `json:"id"`
		LogoPath      string `json:"logo_path"`
		Name          string `json:"name"`
		OriginCountry string `json:"origin_country"`
	} `json:"production_companies"`
	ProdCountries []struct {
		ISO  string `json:"iso_3166_1"`
		Name string `json:"name"`
	} `json:"production_countries"`
	ReleaseDate string `json:"release_date"`
	Revenue     int    `json:"revenue"`
	Runtime     int    `json:"runtime"`
	SpokenLang  []struct {
		EnglishName string `json:"english_name"`
		ISO         string `json:"iso_639_1"`
		Name        string `json:"name"`
	} `json:"spoken_languages"`
	Status    string  `json:"status"`
	Tagline   string  `json:"tagline"`
	Title     string  `json:"title"`
	Video     bool    `json:"video"`
	VoteAVG   float64 `json:"vote_average"`
	VoteCount int     `json:"vote_count"`
}
