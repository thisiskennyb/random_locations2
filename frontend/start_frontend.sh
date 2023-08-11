docker build -t locations_frontend ./frontend
docker run --rm -p 80:80 -d locations_frontend