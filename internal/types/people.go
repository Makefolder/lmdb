package types

type Actor struct {
	ID         int     `json:"id"`
	Adult      bool    `json:"adult"`
	KnownFor   string  `json:"known_for_department"`
	Name       string  `json:"name"`
	OrigName   string  `json:"original_name"`
	Popularity float64 `json:"popularity"`
	ProfPath   string  `json:"profile_path"`
	CastID     int     `json:"cast_id"`
	Character  string  `json:"character"`
	CreditID   string  `json:"credit_id"`
	Order      int     `json:"order"`
}

type Crew struct {
	ID         int     `json:"id"`
	Adult      bool    `json:"adult"`
	KnownFor   string  `json:"known_for_department"`
	Name       string  `json:"name"`
	OrigName   string  `json:"original_name"`
	Popularity float64 `json:"popularity"`
	ProfPath   string  `json:"profile_path"`
	CreditID   string  `json:"credit_id"`
	Department string  `json:"department"`
	Job        string  `json:"job"`
}
