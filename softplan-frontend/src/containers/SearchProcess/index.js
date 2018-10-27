import React, { Component } from "react";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router";
import { Title } from "./styles";
import {
  AppWrapperCenter,
  SearchInput,
  Magnifier,
  SpaceLine150,
  SpaceLine30
} from "../../styles/global";
import { queryProcesses, changeQuery } from "../../actions/SearchProcessAction";
class SearchProcess extends Component {
  async _searchProcess() {
    if (this.props.query) {
      await this.props.queryProcesses(this.props.query);
      this.props.history.push("/listProcess");
      console.log(this.props);
    }
  }
  _changQuery(query) {
    this.props.changeQuery(query.target.value);
  }
  _keyPress(e) {
    if (e.keyCode === 13) {
      if (this.props.query) {
        this._searchProcess();
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
            onChange={query => {
              this._changQuery(query);
            }}
            value={this.props.query}
            onKeyDown={e => {
              this._keyPress(e);
            }}
            type="text"
          />
          <Magnifier
            onClick={() => {
              this._searchProcess();
            }}
          >
            <SearchIcon />
          </Magnifier>
        </SearchInput>
        <SpaceLine30 />
        <p>
          Você pode criar um novo processo{" "}
          <a href="http://www.google.com">clicando aqui</a>
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
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchProcess)
);
