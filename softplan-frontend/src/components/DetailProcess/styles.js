import styled from "styled-components";
import "typeface-montserrat";
import Button from "@material-ui/core/Button";
import { colorize } from "../../styles/colors";

export const Title2 = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: normal;
  margin-top: 0;
  margin-right: 10;
  width: 80px;
  color: ${colorize.primary};
`;
export const SearchInput = styled.div`
  position: relative;
  width: 350px;
  margin-left: 2%;
  input {
    width: 100%;
    height: 35px;
    border: 1px solid ${colorize.black37};
    border-radius: 5px;
    box-shadow: 0 8px 6px -6px ${colorize.black37};
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: "row";
  margin-left: 2%;
  color: ${colorize.primary};
`;
export const Container50 = styled.div`
  display: flex;
  flex-direction: "row";
`;
export const DivList = styled.div`
  width: 40%;
`;
export const Detail = styled.div`
  width: 50%;
`;
export const ButtonNovo = styled(Button)`
  && {
    font-family: "Montserrat";
    margin-left: 1%;
    height: 38px;
    box-shadow: 0 8px 6px -6px ${colorize.black37};
    font-weight: bold;
    font-size: 14px;
  }
`;
