# React Template

This is a React template project, for chroot && scoot Hackathon Team.

## Features

- React 18
- TypeScript
- Vite for fast development and builds
- shadcn/ui for pre-built react components
- Tailwind CSS for utility-first CSS
- ESLint for code linting
- Prettier for code formatting
- Playwright for end-to-end & component testing
- Husky for Git hooks
- Commitlint for commit message linting
- CI/CD using GitHub Actions

## Getting Started

First, install the dependencies:

```sh
pnpm install
```

Then, setup Git Hooks with Husky:

```sh
pnpm prepare
```

To start the development server:

```sh
pnpm dev
```

To build the project for production:

```sh
pnpm build
```

To run the tests:

```sh
pnpm test:ct      # Run component tests
pnpm test:e2e     # Run end-to-end tests
pnpm test:e2e-ui  # Run end-to-end tests with UI
```
