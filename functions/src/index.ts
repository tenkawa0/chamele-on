/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import admin from 'firebase-admin';
import forEach from 'lodash/forEach';
import { isDevelopment } from './utils/env';

admin.initializeApp();

const functionMap = {
  fetchConnpass: './fetch-events',
  registerEvents: './register-events',
};

const devFunctionMap = {};

const loadFunctions = (fnMap: typeof functionMap) => {
  forEach(fnMap, (path, functionName) => {
    if (
      !process.env.FUNCTION_TARGET ||
      process.env.FUNCTION_TARGET === functionName
    ) {
      module.exports[functionName] = require(path);
    }
  });
};

const fnMap = isDevelopment()
  ? { ...functionMap, ...devFunctionMap }
  : functionMap;

loadFunctions(fnMap);
