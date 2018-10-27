import styled from "styled-components";
import { colorize } from "./colors";
import "typeface-montserrat";

export const AppWrapperCenter = styled.div`
  text-align: center;
  font-family: "Montserrat";
  color: ${colorize.black54};
`;
export const AppWrapper = styled.div`
  font-family: "Montserrat";
  color: ${colorize.black54};
`;
export const SearchInput = styled.div`
  position: relative;
  width: 350px;
  input {
    width: 100%;
    height: 35px;
    border: 1px solid ${colorize.black37};
    border-radius: 5px;
    box-shadow: 0 8px 6px -6px ${colorize.black37};
  }
  margin: auto;
`;
export const Magnifier = styled.button`
  position: absolute;
  margin-top: 6px;
  top: 0;
  right: 0;
  z-index: 10;
  border: none;
  background: transparent;
  outline: none;
  color: ${colorize.black54};
`;
export const SpaceLine150 = styled.div`
  height: 150px;
`;
export const SpaceLine30 = styled.div`
  height: 30px;
`;
export const SpaceLine20 = styled.div`
  height: 20px;
`;
export const SpaceLine10 = styled.div`
  height: 10px;
`;
