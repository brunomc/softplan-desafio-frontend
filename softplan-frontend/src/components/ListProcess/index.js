import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { SearchInput, Title2, ButtonNovo } from "./styles";
import { queryProcesses, changeQuery } from "../../actions/SearchProcessAction";
import { setActivePage } from "../../actions/RouterAction";
import { changeDialogForm } from "../../actions/DialogFormAction";
import {
  AppWrapper,
  AppWrapperCenter,
  Magnifier,
  SpaceLine20,
  ContainerSearch
} from "../../styles/global";
import CardComponent from "../../components/CardComponent";

class ListProcess extends Component {
  async _searchProcess() {
    if (this.props.query) {
      await this.props.queryProcesses(this.props.query);
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
  componentWillMount() {
    this._searchProcess();
    this.render();
  }
  render() {
    return (
      <AppWrapper>
        <SpaceLine20 />
        <ContainerSearch>
          <Title2>Busca de processos</Title2>
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
          <ButtonNovo
            variant="outlined"
            onClick={() => {
              this.props.changeDialogForm(true);
            }}
          >
            Novo
          </ButtonNovo>
        </ContainerSearch>
        <AppWrapperCenter>
          {this.props.processes
            ? this.props.processes.map(process => (
                <CardComponent key={process.id} data={process} />
              ))
            : []}
        </AppWrapperCenter>
      </AppWrapper>
    );
  }
}
const mapStateToProps = state => ({
  processes: state.SearchProcessReducer.processQueryResult,
  query: state.SearchProcessReducer.query
});
const mapDispatchToProps = {
  queryProcesses,
  changeQuery,
  setActivePage,
  changeDialogForm
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProcess);
