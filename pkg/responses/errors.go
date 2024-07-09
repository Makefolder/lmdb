package responses

import (
	"net/http"

	"github.com/aegislash525/lmdb/pkg/utils"
)

var InternalErr = utils.Map{
	"status":  http.StatusInternalServerError,
	"message": "something went wrong",
}
