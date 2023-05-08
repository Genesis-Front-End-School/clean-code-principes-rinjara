// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   verbose: true,
//   transform: {
//     '^.+\\.jsx?$': 'babel-jest',
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };

import { defaults as tsjPreset } from 'ts-jest/presets';
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  ...tsjPreset,
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  preset: 'ts-jest',
  // preset: 'react',
  bail: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'svg'],
  moduleDirectories: ['node_modules', 'src'],
  roots: ['src'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest/svgTransform.js',
  },
  verbose: true,
};

export default jestConfig;
