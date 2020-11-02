# Eduroom Project

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/CS20-SIT/Eduroom/blob/master/LICENSE)

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
or you can use
```
npm start
```
### if you want to remove log you can use 
```
docker-compose -f docker-compose.dev.yml up -d  
```
### for stop service
```
docker-compose -f docker-compose.dev.yml down
```
or
```
npm run clear
```
## Commit Template for this Project

```
[Group Number] : [Type] message && [Type] message ...
```
### Example

```
[G00] : [ADD] User Page && [FIX] Bug in Course Bundle 
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

### Initialize Database
```
docker-compose -f docker-compose.dev.yml run eduroom_backend sh 
node src/database/seeder.js -i
node src/database/seeder_patch.js -i
exit
```

### Run Benchmark

```
cd eduroom_benchmark && npm start && cd ..
```

or

```
npm run benchmark
```