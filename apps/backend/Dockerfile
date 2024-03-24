FROM golang:1.22.1-alpine3.19 AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN ["go", "mod", "download"]

COPY main.go ./
COPY migrations/ migrations/

RUN CGO_ENABLED=0 go build

FROM alpine:3.19.1 AS runner

WORKDIR /app

COPY --from=builder /app/backend ./

ENTRYPOINT ["/app/backend", "serve", "--http", "0.0.0.0:8090"]
