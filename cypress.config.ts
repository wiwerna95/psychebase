import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200'
  },
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
        options: {
        projectConfig: {
          root: '',
          sourceRoot: 'apps/my-app',
          buildOptions: {

            index: 'apps/bazapsyche/src/index.html',
            main: 'apps/bazapsyche/src/main.ts',
            polyfills: 'apps/bazapsyche/src/polyfills.ts',
            tsConfig: 'apps/bazapsyche/tsconfig.app.json',
            inlineStyleLanguage: 'scss',
            assets: ['apps/bazapsyche/src/favicon.ico', 'apps/bazapsyche/src/assets'],
            styles: ['apps/bazapsyche/src/styles.scss'],
            scripts: [],
            buildOptimizer: false,
            optimization: false,
            vendorChunk: true,
            extractLicenses: false,
            sourceMap: true,
            namedChunks: true,
          },
        },
      },
    },
    specPattern: "**/*.cy.ts"
  }
});
