# Calvin Lee

Welcome to my playground for frontend things. To see my personal site go to [calvinlee.dev](https://calvinlee.dev/)

## Setup

Run `make` to install the node version manager (NVM) and `pnpm`

Then run `nvm use 22` to make sure you're on the node version from the `Makefile`

## Notes

The application is created using the svelte [CLI](https://svelte.dev/docs/cli/sv-create) command:

```
pnpx sv create . \
  --template minimal \
  --types ts \
  --install pnpm
```

Used Addons:
- eslint
- prettier
- tailwind
  - typography

Needed to add a component for Github Pages

```
pnpx sv add sveltekit-adapter
```

Options:
- static
- pnpm

See link for svelte on GH Pages:
https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages#set-the-base-path