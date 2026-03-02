# Docker networking — connect containers (nodemongo example)

**Why use a user-defined network**
- Containers on the same user-defined network get built-in DNS (container names resolve to containers).
- You can use container names in connection strings (no localhost when connecting between containers).

**Create the network**
```sh
docker network create nodemongo_network
```

**Start MongoDB on that network**
- Use a stable container name (for example `mongodb`) and a data volume:
```sh
docker run -d \
	-v volume_database:/data/db \
	--name mongodb \
	--network nodemongo_network \
	-p 27017:27017 \
	mongo
```

**Start your backend on the same network**
- Give it a name (for example `backend`) and attach the same network so it can reach MongoDB by name:
```sh
docker run -d \
	-p 3000:3000 \
	--name backend \
	--network nodemongo_network \
	image_tag
```

**Use the container name in connection strings**
- From the backend container, connect using the MongoDB container name (not `localhost`):
```js
// 'mongodb://localhost:27017/myDatabase'  <-- change this
const MONGO_URI = 'mongodb://mongodb:27017/myDatabase'
```

**Verify network and containers**
```sh
# list networks
docker network ls

# inspect network members
docker network inspect nodemongo_network

# check running containers
docker ps

# view logs if needed
docker logs backend
docker logs mongodb
```

**Remove / clean up**
```sh
# stop and remove containers
docker rm -f backend mongodb

# remove the network
docker network rm nodemongo_network
```

Notes:
- You only need to publish ports (`-p`) if you want to access a container from the host. Containers on the same network can use internal ports without any `-p` mapping.
- Use clear container names (like `mongodb`) so connection strings remain readable and portable.



