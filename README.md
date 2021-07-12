# Doggo Memory Game :dog:
Classic Memory Game - Using MonoRepo

Isn't a monorepo and custom web components overkill for such a small project? 
Yes, but the point of this project is about the "how" and not the "what".

## Link to deployed version :bone:
[DoggoMemoryGame](https://doggo-memory-game-application.herokuapp.com/)

## Speical thanks :bone:
Thanks to Dog CEO - Dog API - where I fetch my doggos from;
[DogAPI](https://dog.ceo/dog-api/)

## Tech Stack :bone:
- Node
- Express
- Stencil
- SASS
- Storybook
- React
- Redux
- Heroku

## Some notes on the project strucure :bone:
**Monorepo**  
This is a monorepo, meaning that all the various projects are in one repository. You can find each project under the packages folder. All packages make use of a centralized node_modules folder in the route directory. This is great for managing potential package conflicts, but also for development, where you can find everything in one place. It can make deployment a little more tricky than "click click play" but I have covered that under the deployment section. 


## Getting started :bone:
### 1. Node  
If you dont have node installed you will need it, I can highly recommend istalling NVM-WINDOWS first (if you are on a windows machine).
This will allow you to switch between different versions of node from your Command Line.  Once done install the latest stable version of Node.    
[nvm-windows](https://github.com/coreybutler/nvm-windows)  


### 2. Yarn
Ive used yarn for managing the monorepo packages, yarn uses "Workspaces" to do this, so you will need to install yarn before restoring the node modules for the project.  
[Yarn](https://yarnpkg.com/en/docs/install#windows-stable)  

### 3. Environment variables
So, obviously I did not commit the environment files. So you will need to add them. 

#### Application environment
Navigate to the application **packages\application**  
Add a file called .env  
Update it with the following;  
REACT_APP_API_URL=http://localhost:5000  

#### API environment
The project integrates with the Giphy API. So you will need to get an API key first;  
go here, https://developers.giphy.com/dashboard/ sign up, and generate an API key.  
Next navigate to the api **packages\api**  
Add a file called .env  
Update it with the following;  
GIPHY_API_KEY=<your_key>  

### 4. Restoring packages
Because we are using workspaces you can run **yarn install**  
from any of the directories and it will restore all packages.  
Open your CLI -> navigate to **\packages\web-components** and run;  
```bash
yarn install
```

### 5. Build the Stencil web components
You will need to build all web components before they are made available to the other packages.  
Open your CLI -> navigate to **\packages\web-components** and run;  
```bash
yarn build
```  

### 6. Running Storybook
Storybook is the component library interface, which allows you to see each of the componets available to the project  
Open your CLI -> navigate to **\packages\component-library** and run;  
```bash
yarn storybook
```  

### 7. Running the application
#### Run the API first
In order for the react app to work, you need to run the API first  
Open your CLI -> navigate to **\packages\api** and run;  
```bash
yarn develop
```  

#### Run React Application
In order to run the react application  
Open your CLI -> navigate to **\packages\application** and run;  
```bash
yarn start
```  


## Deployments :bone:
This is purely informative and is not neccessary for running the project locally.

### NPM
The application has a dependancy on the web-components and styles packages.  
This is fine during local development, however, when it comes to deploying to production, 
the CI pipeline needs to be able to find the build versions of these packages.
Both the styles and web-components packages have been hosted on NPM, 
and use the following github actions in order to update them on NPM when pushing; 

**.github\workflows\npm-publish-styles.yml**  
**.github\workflows\npm-publish-web-components.yml**

The NPM secret is stored in github secrets, 
which is the injected when pushed in order to run the build and deploy the package to Github.  

Publishing an update to NPM for web-components or styles packages, will require a version bump.

### Heroku
Ordinarily Heroku would be set up to deploy a single application at a time, 
so we need to **add two separate applications on heroku**, load the appropriate build packs, 
add the necessary variables and reference specific Github actions in our workflows. 

Adding the apps, buildpacks and variables can be done from the CLI, but I found it waaaaay easier to do in the Heroku GUI. 

#### Heroku API

**Build packs**  
https://github.com/lstoll/heroku-buildpack-monorepo  
heroku/nodejs  

**Variables**    
APP_BASE: packages/api  
GIPHY_API_KEY: <giphy_api_key>

#### Heroku Application

**Build packs**
https://github.com/lstoll/heroku-buildpack-monorepo  
https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz  

**Variables**    
APP_BASE: packages/application
REACT_APP_API_URL: <the_api_app_url>

#### Github Workflow Deploy Action
The deploy action, located here: **.github\workflows\deploy** injects the appropriate variables on build time.  
The Heroku API key is also injected from Github Secrets.  
Also take note of the **akhileshns/heroku-deploy@v3.0.4** Github action in the deploy file  
