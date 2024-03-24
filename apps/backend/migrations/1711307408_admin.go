package migrations

import (
	"errors"
	"os"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db)

		admin := &models.Admin{}

		if email := os.Getenv("INIT_ADMIN_EMAIL"); email != "" {
			return errors.New("environment variable INIT_ADMIN_EMAIL is required")
		} else {
			admin.Email = email
		}
		if password := os.Getenv("INIT_ADMIN_PASSWORD"); password != "" {
			return errors.New("environment variable INIT_ADMIN_PASSWORD is required")
		} else {
			admin.SetPassword(password)
		}

		return dao.SaveAdmin(admin)
	}, nil)
}
