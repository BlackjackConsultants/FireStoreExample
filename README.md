# FireStoreExample

This is an Angular 5 example with FireStore.  This example is a fork of [Brad Traversy](https://github.com/bradtraversy/angularfs).  This however is modified to use Visual Studio and Angular 5.

## To use in your local environment simple do the following.
1. clone this project by opening command prompt.
2. cd to the folder where you want to place the project. for example :
```
cd c:\temp
```
3. clone the example from git
```
git clone https://github.com/jorgeperez99/jasmineExample.git
```
4. Navigate to the directory that was created
```
cd <directory name>
```
5. install dependencies.
```
ng init
```
6. ignored environment settings in .git that way private info is not shown
```
#environment settings
/src/environments/environment.ts
/src/environments/environment.prod.ts
```
7. make sure to add your applications firebase settings in both the `environment.ts` and `environment.prod.ts`
```
export const environment = {
  production: false,
  firebase: {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
  }
};
```
## Deployment
1. build `ng build --prod`
2. change environment to prod
```
Import { environment } from ‘../environments.prod’
```
