import axios from "axios";
import Config from "../../config";

export const queryProcess = idProcess => {
  return dispatch => {
    axios
      .get(Config.server + Config.urlgetProcess + idProcess)
      .then(res => {
        queryResultSuccess(res, dispatch);
      })
      .catch(res => {
        queryResultError(res, dispatch);
      });
  };
};
const queryResultSuccess = (res, dispatch) => {
  dispatch({ type: "PROCESS_SUCCESS", payload: res.data });
  dispatch({ type: "PROCESS_LOADING", payload: false });
};
const queryResultError = (res, dispatch) => {
  let message = Config.errorSearchProcess;
  dispatch({ type: "PROCESS_ERROR", payload: message });
  dispatch({ type: "PROCESS_LOADING", payload: false });
};
export const deleteProcess = idProcess => {
  return dispatch => {
    axios
      .delete(Config.server + Config.urldeleteProcess + idProcess)
      .then(res => {
        console.log("deu");
        deleteResultSuccess(res, dispatch);
      })
      .catch(res => {
        console.log("nao deu");
        deleteResultError(res, dispatch);
      });
  };
};
const deleteResultSuccess = (res, dispatch) => {
  dispatch({
    type: "DELETE_PROCESS_SUCCESS",
    payload: "Processo deletado com successo."
  });
};
const deleteResultError = (res, dispatch) => {
  let message = Config.errorSearchProcess;
  dispatch({
    type: "DELETE_PROCESS_ERROR",
    payload: "Não foi possível deletar o processo."
  });
};
