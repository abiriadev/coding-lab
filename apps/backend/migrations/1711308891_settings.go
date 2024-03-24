package migrations

import (
	"errors"
	"os"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db)

		settings, err := dao.FindSettings()
		if err != nil {
			return err
		}

		if appName := os.Getenv("APP_NAME"); appName != "" {
			settings.Meta.AppName = appName
		}

		settings.DiscordAuth.Enabled = true

		if clientId := os.Getenv("DISCORD_OAUTH_CLIENT_ID"); clientId != "" {
			settings.DiscordAuth.ClientId = clientId
		} else {
			return errors.New("environment variable DISCORD_OAUTH_CLIENT_ID is required")
		}

		if clientSecret := os.Getenv("DISCORD_OAUTH_CLIENT_SECRET"); clientSecret != "" {
			settings.DiscordAuth.ClientSecret = clientSecret
		} else {
			return errors.New("environment variable DISCORD_OAUTH_CLIENT_SECRET is required")
		}

		if err := dao.SaveSettings(settings); err != nil {
			return err
		}

		return nil
	}, func(db dbx.Builder) error {
		// add down queries...

		return nil
	})
}
