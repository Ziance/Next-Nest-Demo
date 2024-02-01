
## NestJS with MySQL and TypeORM

## Description

This repository provides a basic setup for building a NestJS application with MySQL as the database and TypeORM as the Object-Relational Mapping (ORM) library. It also uses pnpm as the package manager.
https://github.com/Ziance/Next-Nest-Demo/tree/develop, framework TypeScript starter repository. please find the postman collection to use endpoint apis.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js
pnpm
MySQL

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## Project Structure

```
├── src/                                # project root
|   ├── category/                       # category dto,entities,controller,service,provides,modules.
|   ├── locations/                      # location dto,entities,controller,service,provides,modules.
|   ├── products/                       # product dto,entities,controller,service,provides,modules.
|   ├── database/                       # database configration here.
|   ├── app.module.ts                   # imported all modules here.
|   ├── main.ts                         # application entry point and server configurations.
└── package.json
```
