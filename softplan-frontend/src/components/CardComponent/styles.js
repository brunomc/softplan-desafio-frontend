import styled from "styled-components";
import "typeface-montserrat";
import Card from "@material-ui/core/Card";
import { colorize } from "../../styles/colors";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: "row";
  color: ${colorize.primary};
`;
export const CardX = styled(Card)`
  && {
    margin-top:5px;
    text-align:'center';
    display: flex;
    flex-direction: "row";
    height: 100%;
    border: 1px solid ${colorize.black37}
    box-shadow: 0 8px 6px -6px ${colorize.black37};
    margin: auto;
  }
`;
export const ImgCard = styled.img`
  border: 1px solid ${colorize.black37};
  margin: 10px;
  color: ${colorize.black37};
`;

export const Subtitle = styled.p`
  font-weight: bold;
`;
export const Container = styled.div`
  text-align: "center";
  margin-top: 10px;
`;
