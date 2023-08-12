docker build -t locations_api ./api
docker run --rm -p 8000:8000  -d locations_api