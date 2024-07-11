package database

import (
	"log"

	"github.com/aegislash525/lmdb/internal/types"
)

func Migrate() {
	err := DB.AutoMigrate(
		&types.MovieID{},
	)
	if err != nil {
		panic("failed to migrate.")
	}
	log.Println("migrated successfully.")
}
