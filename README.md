# React-App
Personal Project Management Tool

# Deployed version of the App on render.com
Fully working app(Backend enabled) can be found here: https://react-app-tlyb.onrender.com/

# Run app locally
>Run at the root:

npm i 

>Create .env file to connect to your PostgreSql database and run migrations. (Check .env.example both in Backend and Frontend)

cd backend

npm run typeorm migration:run -- -d ./src/utils/database-config/connection-config.ts

>You can start both the frontend and backend projects from the root of your project using the defined scripts.

npm run start:frontend


npm run start:backend

# Creating a new migration cd backend
$ npm run typeorm migration:create ./src/migrations/name-of-the-migration-file



# Reverting migrations
$ npm run typeorm migration:revert -- -d ./src/utils/database-config/connection-config.ts
