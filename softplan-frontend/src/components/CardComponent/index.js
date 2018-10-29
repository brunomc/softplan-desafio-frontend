import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import {
  Container,
  ContainerCard,
  CardX,
  ImgCard,
  Subtitle,
  TableCellCustom,
  TableCellCustomDesc
} from "./styles";
import { ButtonCustom } from "../../styles/global";
import Button from "@material-ui/core/Button";
import { setActivePage } from "../../actions/RouterAction";
import { queryProcess } from "../../actions/DetailProcessAction";

class CardComponent extends Component {
  _navigateDetail() {
    if (this.props.page == "list") {
      this.props.setActivePage("detail");
      this.props.queryProcess(this.props.data.id);
    } else {
      this.props.setActivePage("list");
    }
  }
  render() {
    return (
      <Container>
        <ButtonCustom
          href="#"
          onClick={() => {
            this._navigateDetail();
          }}
        >
          <ContainerCard>
            <CardX>
              {this.props.page == "list" ? (
                <ImgCard
                  src={require("../../assets/images/cat.png")}
                  alt="No Image"
                  height="90"
                  width="80"
                />
              ) : (
                ""
              )}

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCellCustom>
                      <Subtitle>Número</Subtitle>
                    </TableCellCustom>
                    <TableCellCustom>
                      <Subtitle>Assunto</Subtitle>
                    </TableCellCustom>
                    <TableCellCustom>
                      <Subtitle>Interessado</Subtitle>
                    </TableCellCustom>
                    {this.props.page == "list" ? (
                      <TableCellCustomDesc>
                        <Subtitle>Descrição</Subtitle>
                      </TableCellCustomDesc>
                    ) : (
                      ""
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCellCustom>
                      <p>{this.props.data.numero}</p>
                    </TableCellCustom>
                    <TableCellCustom>
                      <p>{this.props.data.assunto}</p>
                    </TableCellCustom>
                    <TableCellCustom>
                      <p>
                        {this.props.data.interessados.map(interessado => (
                          <span key={interessado}>{interessado}</span>
                        ))}
                      </p>
                    </TableCellCustom>
                    {this.props.page == "list" ? (
                      <TableCellCustomDesc>
                        <p>{this.props.data.descricao}</p>
                      </TableCellCustomDesc>
                    ) : (
                      ""
                    )}
                  </TableRow>
                </TableBody>
              </Table>
            </CardX>
          </ContainerCard>
        </ButtonCustom>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  page: state.RouterReducer.page
});
const mapDispatchToProps = { setActivePage, queryProcess };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardComponent);
