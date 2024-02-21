## ENV vars
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=daoud
DB_PASSWORD=1234
DB_NAME=shipment
DB_PORT=3306


MONGO_HOST=localhost
MONGO_USER=root
MONGO_PASS=1234
MONGO_PORT=27017
MONGO_DB=shipment_tracking

JWT_SECRET=mysecretkey
JWT_EXPIRATION_TIME=3600

SMTP_USER=
SMTP_PASS=
SMTP_HOST=
SMTP_PORT=587

JWT_EXPIRATION_TIME=10000000
```

## How to test
1- Create `.env` file and copy-paste the contents onf `.env` section
2- `npm i`
3- `docker-compose up -d`
4- `npm run migration:deploy`
5- `npm run start:dev`