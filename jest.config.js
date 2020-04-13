module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['/__tests__/'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.ts'],
};
