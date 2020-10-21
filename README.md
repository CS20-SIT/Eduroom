# Eduroom Project

Tools: NextJS + Material UI, ExpressJS, PostgreSQL, Docker, Nginx

## Prerequisites
```
Install Docker
Download Docker Desktop from
https://www.docker.com/get-started
Create account and Login
Run the below command (Docker Compose)
Use localhost:3000 for seeing result
For api you can use localhost:3000/api 
Have fun on coding
```

## Docker Compose


### run this command in / directory (root)
```
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up
```
### if you want to remove log you can use 
```
docker-compose -f docker-compose.dev.yml up -d  
```
### for stop service
```
docker-compose -f docker-compose.dev.yml down
```

## Git Command

### Add upstream
```
git remote add upstream https://github.com/CS20-SIT/Eduroom.git
```

### Pulling from master
```
git fetch upstream
git pull upstream master
```

### Push pulling to your repo
```
git push -u origin master
```
