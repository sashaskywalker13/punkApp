import { createStore, applyMiddleware } from "redux";

import reducers from './reducers';
import logger from './middleware/logger';
import request from './middleware/request';

export default createStore(reducers, applyMiddleware(logger, request));