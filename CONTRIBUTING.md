## Publishing

1. Update the version in package.json
2. Create a CHANGELOG entry
3. Commit your changes
4. npm pack --dry-run to see what will be published
5. yarn version ([See appropriate CLI options](https://classic.yarnpkg.com/en/docs/cli/version#toc-commands))
6. Create a release on GitHub. Use the version as the tag and release name.
   - For example for version 1.0.0 the tag and release name would be v1.0.0.
   - Add the CHANGELOG details to the release.
