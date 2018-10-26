import styled from "styled-components";
import { colorize } from "./colors";
import "typeface-montserrat";

export const AppWrapper = styled.div`
  text-align: center;
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
export const SpaceLine = styled.div`
  height: 150px;
  background-color: red;
`;
