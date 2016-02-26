# docker-node-app

Simple Docker Image run with nodejs and automated build on docker hub at  [phonbopit/docker-node-app](https://hub.docker.com/r/phonbopit/docker-node-app/)

## Run

```bash
docker run -p 8080:7777 -d phonbopit/docker-node-app
```

> docker mapped port 7777 inside container to port `8080` on your machine.

Access with localhost:8080 or your-machine:8080

That's it.
