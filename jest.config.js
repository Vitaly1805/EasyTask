const config = {
  "testEnvironmentOptions": {
    "customExportConditions": [
      "node",
      "node-addons"
    ]
  },
  "testEnvironment": "jsdom",
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue3-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "modulePathIgnorePatterns": [
    "<rootDir>/node_modules",
    "<rootDir>/dist"
  ]
}

module.exports = config;
