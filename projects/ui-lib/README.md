# UI Component Library

A comprehensive, reusable UI component library built with Angular 20 and showcased with Storybook. This library provides a collection of beautifully designed, accessible, and customizable components for modern web applications.

## 📦 Components

This library includes 8 fully-featured components:
- **Button** - Multiple variants, sizes, loading states
- **Input** - Form inputs with validation and labels
- **Card** - Flexible container with header/footer
- **Modal** - Dialog with animations and backdrop
- **Checkbox** - Custom styled checkbox with labels
- **Badge** - Status indicators and labels
- **Alert** - Message notifications with icons
- **Spinner** - Loading indicators

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build ui-lib
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:
   ```bash
   cd dist/ui-lib
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

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

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
