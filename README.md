# Angular UI Component Library

A complete, production-ready UI component library built with **Angular 20** and documented with **Storybook**.

## 🎯 Overview

This project contains a comprehensive set of reusable UI components designed for modern web applications. All components are fully typed, accessible, and customizable with SCSS variables.

## 🚀 Quick Start

### View Components in Storybook

```bash
npm run storybook
```

Visit `http://localhost:6006` to explore all components interactively.

### Build the Library

```bash
npm run build
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## 📖 Documentation & Deployment

### Storybook Documentation

The component documentation is automatically built and deployed to GitHub Pages on every push to the main branch.

- **Live Documentation**: Visit the [Storybook documentation site](https://kennyheaton.github.io/musical-system/) to explore all components
- **Local Development**: Run `npm run storybook` to view components locally at `http://localhost:6006`

### Building Storybook

To build the static Storybook site:

```bash
npm run build-storybook
```

The static files will be generated in `dist/storybook/ui-components/`.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
