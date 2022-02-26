# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2021-02-25

### Changed

- Moved `eslint-plugin-react` and `eslint-plugin-react-hooks` to optional peer dependencies.

## [2.0.1] - 2021-02-25

### Fixed

- `forcir/next` was missing an override to the `pages/**` folder to ignore the need for return types.

## [2.0.0] - 2021-02-25

### Changed

- The package manifest has been modified to a much more widely supported LTS version of node. **16.14** to **14.19**

## [1.2.3] - 2021-02-25

### Fixed

- `forcir/next` relies on `eslint-plugin-react`, the installed version was `7.28.0` which had a bug. Upgraded to version [7.29.1](https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.29.1).

## [1.2.2] - 2021-02-24

### Fixed

- `forcir/next` incorrectly declared it wanted to use `eslint-plugin-next` when the intended package was `eslint-config-next`.

## [1.2.1] - 2021-02-24

### Changed

- Simplified the way `forcir/next` worked for the time being by extending `forcir` base shared configurations and then extending `eslint-config-next`.

## [1.2.0] - 2021-02-24

### Added

- `forcir/experimental` extending `forcir` base shared configurations.

## [1.1.0] - 2021-02-24

### Changed

- Moved select `devDependencies` needed upstream to `dependencies`

## [1.0.0] - 2021-02-24

### Added

- `forcir` base shared configurations for ESLint
- `forcir/backend` extending `forcir` base shared configurations. Designed for APIs and Serverless with no UI
- `forcir/frontend` extending `forcir` base shared configurations. Designed for React on the frontend
- `forcir/next` extending `forcir/frontend`. Designed for use with Next.JS web applications
