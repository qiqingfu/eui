module.exports = {
  rootDir: ".",
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  reporters: ["default"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
    },
  },
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg)$": "jest-static-stubs/jpg",
    "^.+\\.gif$": "jest-static-stubs/gif",
    "^.+\\.(eot|otf|svg|ttf|woff|woff2|mp3|m4a|aac|oga)$": "identity-obj-proxy",
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
  testMatch: ["<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)"],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
};
