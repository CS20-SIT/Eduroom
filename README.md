# Eduroom Project

Tools: NextJS + Material UI, ExpressJS, PostgreSQL

## Docker Compose

```
### run this command in / directory (root)
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up
### if you want to remove log you can use 
docker-compose -f docker-compose.dev.yml up -d  
### for stop service
docker-compose -f docker-compose.dev.yml down
```