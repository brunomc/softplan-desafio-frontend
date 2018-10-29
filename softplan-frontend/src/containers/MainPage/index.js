import React, { Component } from "react";
import { connect } from "react-redux";
import { setActivePage } from "../../actions/RouterAction";
import { AppWrapper } from "../../styles/global";
import DetailProcess from "../../components/DetailProcess";
import ListProcess from "../../components/ListProcess";
import SearchProcess from "../../components/SearchProcess";
import DialogForm from "../../components/DialogForm";

class MainPage extends Component {
  async componentWillMount() {
    await this.props.setActivePage("search");
  }
  render() {
    return (
      <AppWrapper>
        <DialogForm />
        {this.props.page == "search" ? (
          <SearchProcess />
        ) : this.props.page == "list" ? (
          <ListProcess />
        ) : (
          <DetailProcess />
        )}
      </AppWrapper>
    );
  }
}
const mapStateToProps = state => ({
  processes: state.SearchProcessReducer.processQueryResult,
  query: state.SearchProcessReducer.query,
  page: state.RouterReducer.page
});
const mapDispatchToProps = { setActivePage };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
