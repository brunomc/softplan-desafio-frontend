import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Close from "@material-ui/icons/Close";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import {
  Container,
  ContainerCard,
  CardX,
  ImgCard,
  Subtitle,
  TableCellCustom,
  TableCellCustomClose,
  TableCellCustomFull,
  HeaderCustom,
  TextJustified,
  SectionCustom
} from "./styles";
import { ButtonCustom } from "../../styles/global";
import Button from "@material-ui/core/Button";
import { setActivePage } from "../../actions/RouterAction";
import {
  changeDialogForm,
  addInteressado,
  changeAssunto,
  changeDescricao
} from "../../actions/DialogFormAction";
import { queryProcess, deleteProcess } from "../../actions/DetailProcessAction";
import { queryProcesses } from "../../actions/SearchProcessAction";
class DetailProcessView extends Component {
  _navigateDetail() {
    if (this.props.page == "list") {
      this.props.setActivePage("detail");
    } else {
      this.props.setActivePage("list");
    }
  }
  _edit() {
    this.props.changeAssunto(this.props.processInfo.assunto);
    this.props.changeDescricao(this.props.processInfo.descricao);
    this.props.addInteressado(this.props.processInfo.interessados);
    this.props.changeDialogForm(true, "edicao");
  }
  async _remove() {
    var retVal = global.confirm(
      "Confirmar exclusão do processo " + this.props.processInfo.numero + "?"
    );
    if (retVal) {
      await this.props.deleteProcess(this.props.processInfo.id);
      await this.props.queryProcess("SOFT");
      this.props.setActivePage("search");
    } else {
      return false;
    }
  }
  render() {
    return (
      <Container>
        <CardX>
          <HeaderCustom>
            <ImgCard
              src={require("../../assets/images/cat.png")}
              alt="No Image"
              height="90"
              width="80"
            />
            <Table cellSpacing={0} cellPadding={0}>
              <TableHead>
                <TableRow>
                  <TableCellCustom>
                    <Subtitle>Processo</Subtitle>
                  </TableCellCustom>
                  <TableCellCustom>
                    <Subtitle>Data</Subtitle>
                  </TableCellCustom>
                  <TableCellCustomClose>
                    <ButtonCustom
                      href="#"
                      onClick={() => {
                        this.props.setActivePage("list");
                      }}
                    >
                      <Close />
                    </ButtonCustom>
                  </TableCellCustomClose>
                </TableRow>
                <TableRow>
                  <TableCellCustom>
                    {this.props.processInfo.numero}
                  </TableCellCustom>
                  <TableCellCustom>
                    {this.props.processInfo.entrada}
                  </TableCellCustom>
                </TableRow>
                <TableRow>
                  <TableCellCustom colSpan={3}>
                    <Subtitle>Assunto</Subtitle>
                  </TableCellCustom>
                </TableRow>
                <TableRow>
                  <TableCellCustom colSpan={3}>
                    {this.props.processInfo.assunto}
                  </TableCellCustom>
                </TableRow>
              </TableHead>
            </Table>
          </HeaderCustom>
          <section>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCellCustom>
                    <Subtitle>Interessados</Subtitle>
                  </TableCellCustom>
                </TableRow>
                <TableRow>
                  <TableCellCustom>
                    {this.props.processInfo.interessados
                      ? this.props.processInfo.interessados.map(interessado => (
                          <p>{interessado}</p>
                        ))
                      : []}
                  </TableCellCustom>
                </TableRow>
              </TableHead>
            </Table>
          </section>
          <section>
            <Subtitle>Descrição</Subtitle>
            <TextJustified>{this.props.processInfo.descricao}</TextJustified>
          </section>
          <footer>
            <Button
              style={{ margin: 10 }}
              onClick={() => {
                this._remove();
              }}
              variant="outlined"
              color="default"
            >
              Remover
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                this._edit();
              }}
            >
              Editar
            </Button>
          </footer>
        </CardX>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  page: state.RouterReducer.page,
  processInfo: state.DetailProcessReducer.processInfo
});
const mapDispatchToProps = {
  setActivePage,
  queryProcess,
  queryProcesses,
  changeDialogForm,
  changeAssunto,
  changeDescricao,
  addInteressado,
  changeDialogForm,
  deleteProcess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailProcessView);
