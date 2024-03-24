package main

import (
	"log"
	"os"
	"strings"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/forms"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"

	_ "github.com/abiriadev/coding-lab/apps/backend/migrations"
)

func main() {
	app := pocketbase.New()

	isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())

	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		Automigrate: isGoRun,
	})

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), false))
		return nil
	})

	app.OnRecordAfterAuthWithOAuth2Request("users").
		Add(func(e *core.RecordAuthWithOAuth2Event) error {
			if e.ProviderName != "discord" || !e.IsNewRecord {
				return nil
			}

			form := forms.NewRecordUpsert(app, e.Record)

			form.LoadData(map[string]any{
				"avatar": e.OAuth2User.AvatarUrl,
			})

			if err := form.Submit(); err != nil {
				return err
			}

			return nil
		})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
