package types

type Image struct {
	AspRation float64 `json:"aspect_ratio"`
	Width     int     `json:"width"`
	Height    int     `json:"height"`
	FilePath  string  `json:"file_path"`
}
