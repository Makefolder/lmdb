package repositories

import (
	"github.com/aegislash525/lmdb/database"
	"github.com/aegislash525/lmdb/internal/types"
	"gorm.io/gorm/clause"
)

func Get() ([]types.MovieID, error) {
	var record []types.MovieID
	err := database.DB.Preload(clause.Associations).Find(&record).Error
	return record, err
}

func Save(id int) (types.MovieID, error) {
	body := types.MovieID{
		MovID: id,
	}
	err := database.DB.Save(&body).Error
	return body, err
}

func Delete(id int) error {
	var record types.MovieID
	err := database.DB.Where("movie_id = ?", id).First(&record).Error
	if err != nil {
		return err
	}
	return database.DB.Unscoped().Delete(&record).Error
}

func IsSaved(id int) bool {
	var record types.MovieID
	err := database.DB.Where("movie_id = ?", id).First(&record).Error
	if err != nil {
		return false
	}
	return true
}
