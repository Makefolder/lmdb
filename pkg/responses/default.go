package responses

import (
	"net/http"

	"github.com/aegislash525/lmdb/pkg/utils"
)

var Success = utils.Map{
	"message": "success",
	"status":  http.StatusOK,
}

var SuccessData = func(data any) utils.Map {
	return utils.Map{
		"message": "success",
		"status":  http.StatusOK,
		"data":    data,
	}
}
