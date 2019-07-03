import styled from "styled-components";
import { Button } from "../Button";

export const SearchWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-items: center;
    justify-self: center;
    margin-bottom: 30px;
    position: relative;
`;

export const SearchInput = styled.input`
    width: 250px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    padding: 10px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb;
    color: #999999;
    text-indent: 20px;
`;

export const SearchButton = styled(Button)`
    padding: 12px;
`;