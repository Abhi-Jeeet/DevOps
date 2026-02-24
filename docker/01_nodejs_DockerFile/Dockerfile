#To see the files inside the docker container 
# docker exec -it 43d403cb5361 sh -> sh since i am using the images

#docker exec -it containerid sh

#To build the docker image
# docker build -t hello-world .

#To run the docker images
# docker run -p 3000:3000 hello-world
#3000:3000 = machine port  -> docker container port(Expose Port)

# Base image, the image already present and at the top of this we add stuff according to our requirement
FROM node:22-alpine 

#creating a dir in the docker
WORKDIR /app

# copying everything from this main machine to the docker machine
COPY . .

#image creation or build the code
RUN npm install 

EXPOSE 3000

#Final command that runs when running the container
#When the container starts, what we do we want to run
CMD [ "node", "index.js" ]

