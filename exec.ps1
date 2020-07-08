docker build --rm -t auth0-vue-03-api .
docker run -p 8080:3000 --pid=host auth0-vue-03-api
