# ⭐ SvelteKit Custom Starter

<img src="./static//svelte.svg" alt="sveltekit" width="100">

## Prerequisites

- NodeJS >= 18
- pnpm >= 8

## Built-in Features

- SvelteKit
- Typescript
- Zod
- Tailwind CSS
- AuthJS
- Axios
- Tanstack Query
- Vitest + Playwright
- Eslint + Prettier

## How to Start

- Clone the Repo.
- Create `.env` file at root of the project (see file .env.example).
- `pnpm i` to install dependencies.
- `pnpm dev` to start server at `localhost:5173`
- Let's Go!

## For Authentication with GitHub

- To get GITHUB_ID & GITHUB_SECRET for Auth - [Create / Register New OAuth App Here](https://github.com/settings/applications/new)
- Callback URL Should be - `[origin]/auth/callback/[provider]`
- For Example - `http://localhost:5173/auth/callback/github`
