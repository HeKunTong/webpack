const FETCH_USER_LIST = 'FETCH_USER_LIST'

const fetch = (list) => (dispatch) => {
  return dispatch({
    type: FETCH_USER_LIST,
    payload: {
      list
    }
  });
};

export default {
  fetch
};

export const handlers = {
  [FETCH_USER_LIST]: (state, { payload }) => {
    return payload.list
  }
};