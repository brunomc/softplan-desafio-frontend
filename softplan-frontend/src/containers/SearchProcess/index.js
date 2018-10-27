import React, { Component } from "react";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { Title } from "./styles";
import {
  AppWrapperCenter,
  SearchInput,
  Magnifier,
  SpaceLine150,
  SpaceLine30
} from "../../styles/global";
import { queryProcesses, changeQuery } from "../../actions/SearchProcessAction";
import { Redirect } from "react-router";
class SearchProcess extends Component {
  _searchProcess(process) {
    if (process) {
      Redirect.call("/listaProcessos");
    }
  }
  _keyPress(e, process) {
    if (e.keyCode === 13) {
      if (process) {
        this._searchProcess(process);
      }
    }
  }
  render() {
    return (
      <AppWrapperCenter>
        <SpaceLine150 />
        <Title>Busca de processos</Title>
        <SearchInput>
          <input
            name="query"
            onChange={console.log(this.props)}
            onKeyDown={this._keyPress}
            type="text"
          />
          <Magnifier
            onClick={() => {
              this._searchProcess(this.props.query);
            }}
          >
            <SearchIcon />
          </Magnifier>
        </SearchInput>
        <SpaceLine30 />
        <p>
          Você pode criar um novo processo <a href="#">clicando aqui</a>
        </p>
      </AppWrapperCenter>
    );
  }
}
const mapStateToProps = state => ({
  processes: state.SearchProcessReducer.processQueryResult,
  query: state.SearchProcessReducer.query
});
const mapDispatchToProps = {
  queryProcesses,
  changeQuery
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProcess);
