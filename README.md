# Coding Lab

## Build

1. Clone the repository

```sh
$ git clone https://github.com/abiriadev/coding-lab
```

2. Install the dependencies

```sh
$ corepack enable
$ pnpm install
```

3. Build each application

```sh
$ pnpm turbo build
```

4. Build the docker image for `backend`.

```sh
$ docker build -t coding-lab -f ./apps/backend/Dockerfile ./apps/backend/
```

## Deploy

### Backend

Provide the following environment variables:

| Variable                      | Required | Description                                        |
| ----------------------------- | -------- | -------------------------------------------------- |
| `INIT_ADMIN_EMAIL`            | `true`   | The email address of the initial admin user        |
| `INIT_ADMIN_PASSWORD`         | `true`   | The password of the initial admin user             |
| `APP_NAME`                    | `false`  | The name of the application                        |
| `DISCORD_OAUTH_CLIENT_ID`     | `true`   | The client ID of the Discord OAuth application     |
| `DISCORD_OAUTH_CLIENT_SECRET` | `true`   | The client secret of the Discord OAuth application |
