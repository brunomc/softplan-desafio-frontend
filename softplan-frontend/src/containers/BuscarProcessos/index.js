import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Title } from "./styles";
import {
  AppWrapper,
  SearchInput,
  Magnifier,
  SpaceLine
} from "../../styles/global";

export default class BuscarProcessos extends Component {
  render() {
    return (
      <AppWrapper>
        <SpaceLine />
        <Title>Busca de processos</Title>
        <SearchInput>
          <input name="searchProcess" type="text" />
          <Magnifier
            onClick={() => {
              alert("ok");
            }}
          >
            <SearchIcon />
          </Magnifier>
        </SearchInput>
      </AppWrapper>
    );
  }
}
