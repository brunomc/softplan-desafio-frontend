import axios from "axios";
import Config from "../../config";

export const changeQuery = query => {
  return {
    type: "MODIFY_QUERY",
    payload: query
  };
};

export const queryProcesses = query => {
  return dispatch => {
    axios
      .get(Config.server + Config.urlSearchProcess + query)
      .then(res => {
        queryResultSuccess(res, dispatch);
      })
      .catch(res => {
        queryResultError(res, dispatch);
      });
  };
};
const queryResultSuccess = (res, dispatch) => {
  dispatch({ type: "SEARCH_PROCESS_SUCCESS", payload: res.data });
  dispatch({ type: "SEARCH_PROCESS_LOADING", payload: false });
};
const queryResultError = (res, dispatch) => {
  let message = Config.errorSearchProcess;
  dispatch({ type: "SEARCH_PROCESS_ERROR", payload: message });
  dispatch({ type: "SEARCH_PROCESS_LOADING", payload: false });
};
