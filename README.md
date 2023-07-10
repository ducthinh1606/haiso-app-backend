**SETUP**
---------------
1. Install package
```
npm install
```
2. Copy environment file
```
cp .env.example .env
```
3. Config database
```
Edit database information in .env file
```
4. Create model
```
sequelize model:generate --name {model name} --attributes {model attributes}
eg: model:generate --name User --attributes firstName:string,lastName:string,email:string
```
5. Migration
```
sequelize migration:generate (eg: sequelize migration:generate --name create_users_table)
sequelize db:migrate
sequelize db:migrate:undo
sequelize db:migrate:undo:all
sequelize db:seed
```

**PROJECT STRUCTURE**
---------------
- src
    - app
        - controllers
        - mails
        - middlewares
        - models
            - entities
            - repositories
        - schedules
        - services
        - subscribers
        - utils
        - validators
    - config
    - database
        - migrations
        - seeders
    - routes
    - views
    - app.js
---------------
**app**: Contains the main components of the application, including controllers, mails, middlewares, models, schedules, services, subscribers, utils, and validators. You can divide these components into subdirectories according to your project's needs.

**controllers**: Contains the controller files of the application.

**mails**: Contains files related to sending and processing emails.

**middlewares**: Contains middleware files to handle requests before routing them to controllers.

**models**: Contains files related to defining and handling data models, including entities and repositories.

**schedules**: Contains files related to scheduling and performing regular tasks.

**services**: Contains files related to the logic of application services.

**subscribers**: Contains files related to handling system events and event subscribers.

**utils**: Contains utility files, helper functions for the application.

**validators**: Contains files related to validation and data input checks.

Other directories such as config, database, routes, and views are common directories for configuration, managing the database, routing, and user interface files.

START PROJECT
---------------
- Run: ```npm start```
- Url: ```localhost:3000```