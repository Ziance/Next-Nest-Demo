## NextJS with pnpm

## Description

This repository provides a basic setup for building a Next.js application using Nx (Narwhal Extensions for Scalable Angular Development) with pnpm as the package manager.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js
pnpm

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── pages/                              # project root
|   ├── category/                       # created dynamic page for category.
|   ├── locations/                      # created dynamic page for locations.
|   ├── products/                       # created dynamic page for products.
|   ├── _app.js                         # setup dynamic layout for app.
|   ├── index.js                        # create default route for redirection.
└── components/                         # created common components.
└── public/                             # it includes favicon and svgs.
└── redux/                              # this is used for global state management it includes actions,middleware,services,axios etc.
└── styles/                             # it includes styles.
└── package.json
└── tailwind.config.js
```
