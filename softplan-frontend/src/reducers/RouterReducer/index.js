const INITIAL_STATE = {
  page: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MODIFY_PAGE": {
      return { ...state, page: action.payload };
    }
  }
  return state;
};
