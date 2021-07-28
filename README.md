# Introcept Assessment
Assessment task for full-stack web developer job in Introcept Nepal.

### Task Description
The task is to create simple application which has CREATE and READ of the small CRUD application.
The application should have a form for collecting clients data. The clients data should be saved on a server in csv form. Then the saved clients data are to be fetchced and displayed in webpage.

This part of application performs two tasks:
1. Receive client data, check if its valid or not, if valid save in csv form
2. On get requests read all saved client details and send them.

This is the backend part of the application. [See Frontend](https://github.com/theArkein/introcept-assessment-frontend)

### Solution
The application is built in typescript/nestjs. The steps taken to built this app are mentioned in follwoing points:

1. Create nest application [See Guide](https://docs.nestjs.com/first-steps)
2. Create client resource using nest cli
```
nest generate resource src/modules/client
```
3. Create necessary enum constants for client data like Gender, Nationality, Contact Mode and Education Level.
4. Create a helper module to save and read client data from a file.
  This module exports two functions **save** and **read**.
  - Save function: This function takes a *filepath* and *object* data. The object data is converted into csv value and saved in gived filepath
  - Read function: This function takes a filepath from where data is to be read. This function uses **[csvjson](https://www.npmjs.com/package/csvjson)** dependency to convert csv values into json.

5. Integrate the exported helper module functions (save, read) in *ClientService* class.
6. Validate incoming client data for create client request in *create-client.dto.ts* inside *src/modules/client/dto*. **[class-validator](https://www.npmjs.com/package/class-validator)** dependency is used to validate incoming data.
7. Deploy the app in [Heroku Server](https://dashboard.heroku.com/). [See guide](https://dev.to/rosyshrestha/deploy-nestjs-typescript-app-to-heroku-27e)

### Packgaes used
1. **[csvjson](https://www.npmjs.com/package/csvjson)**: In this application this dependency is used to convert csv values into json format.
2. **[class-validator](https://www.npmjs.com/package/class-validator)**: In this application this dependency is used to validate incoming data for create client request.



