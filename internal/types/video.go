package types

type Video struct {
	PrimaryKey  uint   `json:"primary_key" gorm:"primarykey;unique"`
	ISO639      string `json:"iso_639_1"`
	ISO3166     string `json:"iso_3166_1"`
	Name        string `json:"name"`
	Key         string `json:"key"`
	Site        string `json:"site"`
	Size        int    `json:"size"`
	Type        string `json:"type"`
	Official    bool   `json:"official"`
	PublishedAt string `json:"published_at"`
	ID          string `json:"id"`
}
