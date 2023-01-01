build:
	go build -o bin/backend cmd/main.go

# Path: backend/Makefile
run:
	go run cmd/main.go

# Path: backend/Makefile
test:
	go test -v ./...

# Path: backend/Makefile
clean:
	rm -rf bin

# Path: backend/Makefile
docker-build:
	docker build -t backend .

PHONY: build run test clean docker-build