# Watto Payement Services
## _Onboarding Test_

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

This project is an introduction to the current tech stack used in Watto V1.

- Start by Forking this rep
- Clone your project localy
- ✨Do your magic✨
- Push you're work
- Notify US

## Instructions

- You need to deliver in 3 days (max)
- You are allowed to use any thrid party ressources (Git, stack overflow, etc...)
- Make sure that you're commits are organized
- Use only the libraries mentioned bellow

The purpose of this project is not to mesure your tech skills, but to make sure that you know how to google things, adpat to the situation and get things done ASAP.

### FRONT END LIBRARIES (NEXT)
> Styled Components
> Styled Icons
> Tailwind CSS
> Next Auth
> React Query
> Axios


### FRONT END LIBRARIES (NEST)
> Passport (+ derivatives)
> TypeORM
> pg
> bcryptjs


## Installation

Start by setting up the next project.

```sh
yarn create next-app --typescript
```

Then go ahead and setup your nest project in another septerate folder

```sh
nest new backend
```

## APP

In this project we will be building a simple app that contains two modules
1. A user management module (based on roles {Admin or User})
2. A company management module (Each user can manage his cars)

_NB: AA stands for "as a"_

| ADMIN | US |
| ------ | ------ |
| ADMIN | AA ADMIN i want to add a new user |
| ADMIN | AA ADMIN i want to delete a  user |
| ADMIN | AA ADMIN i want to retrieve all users |

| USER | US |
| ------ | ------ |
| USER | AA USER i want to retrieve one of my cars |
| USER | AA USER i want to update one of my cars |
| USER | AA USER i want to delete one of my  cars |
| USER | AA USER i want to create a new car |
| USER | AA USER i want to retrieve all my cars |

## DON'T FORGET TO

- Encapsulate the postgres DB in a docker file
- Deliver in time
- keep googling things until you figure it out
- To use free tailwind UI [Tailwind UI](https://tailwindui.com/#product-application-ui) components
- Do every thing on you're own and don't ask for help


**Good Luck!**
