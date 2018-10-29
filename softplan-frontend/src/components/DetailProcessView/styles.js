import styled from "styled-components";
import "typeface-montserrat";
import Card from "@material-ui/core/Card";
import { colorize } from "../../styles/colors";
import TableCell from "@material-ui/core/TableCell";
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: "row";
  color: ${colorize.primary};
`;
export const CardX = styled(Card)`
  && {
   
    margin-top:5px;
    text-align:'center';
    height: 100%;
    width:80%;
    border: 1px solid ${colorize.black37}
    box-shadow: 0 8px 6px -6px ${colorize.black37};
    margin: auto;
  }
`;
export const TableCellCustom = styled(TableCell)`
  && {
    width: 20%;
    border: 0;
  }
`;
export const TableCellCustomFull = styled(TableCell)`
  && {
    width: 100%;
  }
`;
export const TableCellCustomClose = styled(TableCell)`
  && {
    width: 5%;
    border: 0;
  }
`;

export const ImgCard = styled.img`
  border: 1px solid ${colorize.black37};
  margin: 5px;
  color: ${colorize.black37};
`;

export const Subtitle = styled.p`
  font-weight: bold;
`;
export const HeaderCustom = styled.header`
  display: flex;
  flex-direction: "row";
`;
export const TextJustified = styled.div`
  text-align: justify;
  padding: 35px;
`;
export const Container = styled.div`
  text-align: "center";
  margin-top: 10px;
`;
