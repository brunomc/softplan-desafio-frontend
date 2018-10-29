import axios from "axios";
import Config from "../../config";
export const changeDialogForm = (open, operacao) => {
  console.log(open, operacao);
  return dispatch => {
    dispatch({
      type: "CHANGE_DIALOG_FORM",
      payload: open
    });
    dispatch({
      type: "CHANGE_DIALOG_OPERATION",
      payload: operacao
    });
  };
};

export const addInteressado = interessado => {
  return {
    type: "ADD_INTERESSADO",
    payload: interessado
  };
};
export const removeInteressado = interessado => {
  return {
    type: "REMOVE_INTERESSADO",
    payload: interessado
  };
};
export const changeAssunto = assunto => {
  return {
    type: "CHANGE_ASSUNTO",
    payload: assunto
  };
};
export const changeDescricao = descricao => {
  return {
    type: "CHANGE_DESCRICAO",
    payload: descricao
  };
};

export const saveProcess = processo => {
  return dispatch => {
    axios
      .post(Config.server + Config.urlsaveProcess, processo)
      .then(res => {
        saveResultSuccess(res, dispatch);
      })
      .catch(res => {
        saveResultError(res, dispatch);
      });
  };
};
const saveResultSuccess = (res, dispatch) => {
  dispatch({
    type: "SAVE_PROCESS",
    payload: "Processo salvo com sucesso!"
  });
};
const saveResultError = (res, dispatch) => {
  dispatch({
    type: "SAVE_PROCESS",
    payload: "Não foi possível salvar o processo"
  });
};
