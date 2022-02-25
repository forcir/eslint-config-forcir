# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
