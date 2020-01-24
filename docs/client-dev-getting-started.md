# Developing on IS2 Project in Angular 8 guidelines

## Creating some stuff

Let's create entities to work on, for example a Client, having some properties like:

- name
- surname
- email
- phone_no

Let's stop the server (executed with `ng serve`) and use the angular CLI to generate the class: `ng g class models/user` : this will create a folder _models_ inside _is2/src/app_ folder, containing a typescript file (`user.ts`) and a spec file for unit testing purposes.

Let's add user properties:
```
export class User {

    name: string;
    surnname: string;
    phone_no: string;
    email: string;

}
```

Now we need a way to _create_, _update_ and _delete_ our users, in other words, we'll create a _Component_ to handle User _CRUD_ operations, let's use angular cli: `ng g c components/user` : this will create a folder _components_ inside _is2/src/app_ folder, containing another folder _user_ containing typescript file (`user.component.ts`) and a template file (`user.component.html`) with its css (`user.component.css`).

## Create a service 

A service is part of our application logic handling operations on a specific entity, ie our User. 
So, to make something with a User class, we first need a service for this, let's say a UserService.

We can create a service with angular cli (obviously)  
`ng g service services/user` : this will create a folder _services_ inside _is2/src/app_ folder, containing a typescript file (`user.service.ts`) and a spec file for unit testing purposes.

## Create a form for User class

In order to view/create/update a User, we want to use our brand new user component: let's start adding some dependencies inside typescript file `user.component.ts` #FIXME# 

*TBD*

# Run the mock server
To launch the server exposing users api, cd to mocks directory and run `json-server user.json`

## Adding some style (with Material Design plugin)

Inside the angular project folder, let's wirte `ng add @angular/material` , now we need to add some dependencies inside files: first, add the following to `app.module.ts` :

```
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
```
Now we have to set modules we want to import in `app.module.ts`, too:

```
imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  AppRoutingModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
],
...
```


# Running tools and services

## Preamble
In order to correctly compile node modules for test guard, we'll work inside a Linux container started in
VSCode, exposing 3000 and 4200 ports.
So, once downloaded this repo, open in VSCode and reopen it in container (the Dockerfile is located in .devcontainer folder of this repo).
Once VSCode reopens the project and download all dependecies for Docker, you can open a terminal and go further.

## Compile modules
Before starting services, you need to build node_modules:

1. Go into project folder `is2` and execute `npm i`
2. Go into test guard folder `is2/test-guard` and execute `npm i`

## Run project and tools

In order to mock a server for available entities, cd into `is2/src/mocks` and run: `json.server --watch user.json  --host 0.0.0.0`

Then you can start angular project cd-ing into `is2` folder, then executing: `npm start`

To inject hooks, cd into `is2/test-guard` folder and execute:  `node main.js inject-hooks ../src/app/components/user/**/**.html --grammar angularjs`

