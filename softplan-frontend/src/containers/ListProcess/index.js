import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";

import { SearchInput, Title2, ContainerSearch, ButtonNovo } from "./styles";
import {
  AppWrapper,
  AppWrapperCenter,
  Magnifier,
  SpaceLine20
} from "../../styles/global";
import CardComponent from "../../components/CardComponent";

export default class ListProcess extends Component {
  render() {
    return (
      <AppWrapper>
        <SpaceLine20 />
        <ContainerSearch>
          <Title2>Busca de processos</Title2>
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
          <ButtonNovo variant="outlined">Novo</ButtonNovo>
        </ContainerSearch>
        <AppWrapperCenter>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </AppWrapperCenter>
      </AppWrapper>
    );
  }
}
