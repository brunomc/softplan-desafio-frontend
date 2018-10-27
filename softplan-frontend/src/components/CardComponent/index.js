import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Container, ContainerCard, CardX, ImgCard, Subtitle } from "./styles";

export default class CardComponent extends Component {
  render() {
    return (
      <Container>
        <ContainerCard>
          <CardX>
            <ImgCard
              src={require("../../assets/images/cat.png")}
              alt="No Image"
              height="80"
              width="80"
            />

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Subtitle>Número</Subtitle>
                  </TableCell>
                  <TableCell>
                    <Subtitle>Assunto</Subtitle>
                  </TableCell>
                  <TableCell>
                    <Subtitle>Interessado</Subtitle>
                  </TableCell>
                  <TableCell>
                    <Subtitle>Descrição</Subtitle>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <p>SOFT 001/2018</p>
                  </TableCell>
                  <TableCell>
                    <p>In vestibulum dis iarok</p>
                  </TableCell>
                  <TableCell>
                    <p>Danilo Barbosa Correia</p>
                  </TableCell>
                  <TableCell>
                    <p>Etiam aliquan socio</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardX>
        </ContainerCard>
      </Container>
    );
  }
}
