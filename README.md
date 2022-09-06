# Hesse Catalog

This repo is a frontend part of the project, you can find backend repo [here](https://github.com/galaxxyz/hesse-catalog-backend).

### To run the project on your computer:

#### Backend

0. Open terminal
1. Clone backend `git clone https://github.com/galaxxyz/hesse-catalog-backend.git `
2. Move to backend directory `cd hesse-catalog-backend` and execute command `npm install` to install all dependencies
3. Execute command `npm start` to start the server

#### Frontend

4. Open another terminal in the same directory where you opened the first one.
5. Clone frontend `git clone https://github.com/galaxxyz/hesse-catalog-frontend.git `
6. Move to frontend directory `cd hesse-catalog-frontend` and execute command `npm install` to install all dependencies
7. Execute command `npm start` to start the server

### Notes

#### SVG icons

In the description of the task, it was indicated that the subscription icons should be stored on the backend side. In my opinion, it doesn't make sense for a website to constantly load the same icons from the backend and it would be more efficient to store them on the frontend side.

However, since **Hesse is a mobile application** it makes sense such a decision may be necessary. Since the **update of the mobile application depends on the desire of the user**, it is necessary to provide a mechanism for obtaining all those data from the backend that **cannot wait for a local update of the mobile application**. Subscriptions are such data, and in case of a change in their cost, this should be displayed immediately in the application.

Unfortunately, while working on this task, I did not find a suitable method for dynamically loading svg icons, so that later it would be easy to manipulate their color, which is necessary when changing the state of subscription buttons. But I'm sure there is a solution, we just need to do more research.

#### State management

As an improvement to this project, I would definitely start using a state management library (like Redux) in the future to separate the state logic from the components.

### List of tools used for the project:

- [Strapi](https://strapi.io/)
- [Create React App](https://create-react-app.dev/)
- [Styled Components](https://www.styled-components.com)
