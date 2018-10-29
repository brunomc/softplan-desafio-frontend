const INITIAL_STATE = {
  open: false,
  interessados: [],
  assunto: "",
  descricao: "",
  message: "",
  operation: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_DIALOG_OPERATION": {
      return { ...state, operation: action.payload };
    }
    case "SAVE_PROCESS": {
      return { ...state, message: action.payload };
    }
    case "CHANGE_ASSUNTO": {
      return { ...state, assunto: action.payload };
    }
    case "CHANGE_DESCRICAO": {
      return { ...state, descricao: action.payload };
    }
    case "CHANGE_DIALOG_FORM": {
      return { ...state, open: action.payload };
    }
    case "ADD_INTERESSADO": {
      return { ...state, interessados: action.payload };
    }
    case "REMOVE_INTERESSADO": {
      return { ...state, interessados: action.payload };
    }
  }
  return state;
};
