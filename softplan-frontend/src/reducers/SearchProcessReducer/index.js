const INITIAL_STATE = {
  processQueryResult: [],
  query: "",
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MODIFY_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SEARCH_PROCESS_SUCCESS": {
      return { ...state, processQueryResult: action.payload };
    }
    case "SEARCH_PROCESS_ERROR": {
      return { ...state, error: action.payload };
    }
    case "SEARCH_PROCESS_LOADING": {
      return { ...state, loading: action.payload };
    }
    default: {
      return state;
    }
  }
  return state;
};
