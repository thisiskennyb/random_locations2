docker build -t locations_db ./db
docker run --name locations_db --rm -e POSTGRES_PASSWORD=password -d locations_db
