import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Container,
  ContainerCard,
  CardX,
  ImgCard,
  Subtitle,
  TableCellCustom,
  TableCellCustomDesc
} from "./styles";

export default class CardComponent extends Component {
  render() {
    return (
      <Container>
        <ContainerCard>
          <CardX>
            <ImgCard
              src={require("../../assets/images/cat.png")}
              alt="No Image"
              height="90"
              width="80"
            />

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
                  <TableCellCustomDesc>
                    <Subtitle>Descrição</Subtitle>
                  </TableCellCustomDesc>
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
                  <TableCellCustomDesc>
                    <p>{this.props.data.descricao}</p>
                  </TableCellCustomDesc>
                </TableRow>
              </TableBody>
            </Table>
          </CardX>
        </ContainerCard>
      </Container>
    );
  }
}
