import { combineReducers } from "redux";
import SearchProcessReducer from "../reducers/SearchProcessReducer";
import DetailProcessReducer from "../reducers/DetailProcessReducer";
import RouterReducer from "../reducers/RouterReducer";
import DialogFormReducer from "../reducers/DialogFormReducer";

export default combineReducers({
  SearchProcessReducer: SearchProcessReducer,
  RouterReducer: RouterReducer,
  DetailProcessReducer: DetailProcessReducer,
  DialogFormReducer: DialogFormReducer
});
