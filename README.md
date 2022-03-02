<p align="center"></p>
<div align="center">
  <a href="https://www.forcir.com/#gh-light-mode-only" target="_blank">
    <img src="https://cdn.forcir.com/logos/slate.svg" alt="Forcir Logo" height="30">
  </a>
  <a href="https://www.forcir.com/#gh-dark-mode-only" target="_blank">
    <img src="https://cdn.forcir.com/logos/common.svg" alt="Forcir Logo" height="30">
  </a>
</div>
<p align="center"><strong>Shared ESLint Configs</strong></p>

## Install

> Forcir's internal coding standards require version clamping so we've included an `--exact` flag. For your convenience we've placed that flag at the end so you can optionally omit copying it.

#### Peer Dependencies

```zsh
yarn add typescript prettier eslint jest @types/jest ts-jest ts-node lint-staged husky --dev --exact
```

#### Forcir ESLint Configs

```zsh
yarn add eslint-config-forcir --dev --exact
```

## `.eslintrc` file in project root

```jsonc
{
  "extends": "forcir"
}
```

> If there are any files you want to exclude from ESLint add `.eslintignore` to project root

### Configurations

This package includes 4 guaranteed files of shared rules.

This package also may contain up to 4 additional files that use rules or overrides considered experimental. These do not adhere to semantic versioning (SEMVER). They may be removed at any point without warning.

#### General Base Configuration

- `forcir`
- `forcir/experimental` (may or may not be available)

#### Next.JS Full-Stack Websites / Applications

- `forcir/next`
- `forcir/next-experimental` (may or may not be available)

> You **need** to also run `yarn add eslint-config-next --dev --exact`

#### React Frontend-only Applications

- `forcir/frontend`
- `forcir/frontend-experimental` (may or may not be available)

> You **need** to also run `yarn add eslint-plugin-react eslint-plugin-react-hooks --dev --exact`

#### Node Backend-only APIs / Serverless

- `forcir/backend`
- `forcir/backend-experimental` (may or may not be available)

## `.prettierrc` file in project root

```json
{
  "printWidth": 120,
  "singleQuote": true
}
```

> If there are any files you want to exclude from Prettier add `.prettierignore` to project root

## `.editorconfig` file in project root

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 120
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0

[*.{yml,yaml}]
indent_size = 2

[docker-compose.yml]
indent_size = 4
```

## Add the `engines` field to `package.json`

```json
"engines": {
  "node": ">=14.19",
  "npm": ">=6.14",
  "yarn": ">=1.22"
}
```

### `.nvmrc` file in project root

```
14.19
```

## Add linting and formatting scripts

```jsonc
"scripts": {
  "format": "prettier --write \"**/*.{ts,tsx,js,json,graphql,md}\"",
  "format:check": "prettier --debug-check \"**/*.{ts,tsx,js,json,graphql,md}\"",
  "lint": "eslint . --fix",
  "lint:check": "eslint .",
  "lint:staged": "lint-staged",
  "prepare": "husky install",
  "test": "jest --passWithNoTests"
}
```

## Add pre-commit husky hook

For automatically linting and formatting any files staged for commit

```zsh
npx husky add .husky/pre-commit "yarn run lint:staged"
```

## `.lintstagedrc` file in project root

```json
{
  "*.{ts,tsx,js}": ["yarn lint --quiet"],
  "*.{ts,tsx,js,json,graphql,md}": ["yarn format --write"]
}
```

## `jest.config.ts` file in project root

```ts
import type { Config } from '@jest/types';

// Add any custom config to be passed to Jest
const config: Config.InitialOptions = {
  collectCoverage: true,
  coverageThreshold: {
    global: { statements: 100, branches: 100, functions: 100, lines: 100 },
  },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  roots: ['<rootDir>/tests/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
};

module.exports = config;
```

**Remember to:**

- Adjust `config.coverageThreshold.global` accordingly. 100% threshold is of course the desirable amount, but that is not always possible.
- Remove the `--passWithNoTests` flag in the project's `package.json` test script when the first test is written.
