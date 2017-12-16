import { LOAD_WORKER } from '../actions';

const defaultState = {
  index: -1,
};

export default (state = defaultState, action) => {
  const { payload = {} } = action;

  switch (action.type) {
    case LOAD_WORKER:
      return {
        index: payload.index,
        actions: {},
        workers: [
          new Audio(payload.url), //eslint-disable-line
        ],
      };

    default:
      return state;
  }
};
