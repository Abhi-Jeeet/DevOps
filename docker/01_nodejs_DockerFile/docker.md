# Docker notes — Node.js app

This document contains concise commands and a cleaned Dockerfile example for the Node.js sample app.

## Build the image

Build the image locally (replace `yourname` with your Docker Hub username if desired):

```bash
docker build -t hello-world-app:latest .
```

## Tag and push to Docker Hub

Tag the image for Docker Hub and push (replace `yourname`):

```bash
docker tag hello-world-app yourname/hello-world-app:latest
docker push yourname/hello-world-app:latest
```

Or build and tag in one step:

```bash
docker build -t yourname/hello-world-app:latest .
docker push yourname/hello-world-app:latest
```

## Run the container

Run the container and map port 3000 on the host to port 3000 in the container:

```bash
docker run -p 3000:3000 hello-world-app
```

Explanation: `3000:3000` maps `hostPort:containerPort`.

## Inspect a running container

Get a shell inside a running container (use the actual container ID or name):

```bash
docker ps                       # find the container id or name
docker exec -it <container-id> sh
```

Use `sh` for lightweight images (Alpine). If your image includes bash, use `bash` instead.

## Dockerfile (example)

Below is a minimal, production-lean Dockerfile for this Node.js app.

```Dockerfile
FROM node:22-alpine

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./
RUN npm install --production

# Copy application sources
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
```

Notes:

- Copying `package*.json` and running `npm install` before copying the rest of the source keeps the install layer cached.
- Use `--production` for smaller images if devDependencies are not needed inside the image.

## Quick tips

- Replace `yourname` with your Docker Hub username before pushing.
- Use descriptive tags (for example, a version number) instead of `latest` for production images.
- To rebuild and replace a running container, stop/remove the old container and run the new image.

---


