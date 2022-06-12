module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js'],
  testMatch: ['**/src/**/*.test.+(js)'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'cobertura'],
  coverageDirectory: '<rootDir>/jest',
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '^@src(.*)$': '<rootDir>/src$1',
  },
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
