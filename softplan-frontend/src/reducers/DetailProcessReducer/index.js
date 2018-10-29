const INITIAL_STATE = {
  processInfo: {},
  messageProcessInfoError: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PROCESS_SUCCESS": {
      return { ...state, processInfo: action.payload };
    }
    case "PROCESS_ERROR": {
      return { ...state, messageProcessInfoError: action.payload };
    }
    case "PROCESS_LOADING": {
      return { ...state, loading: action.payload };
    }
  }
  return state;
};
