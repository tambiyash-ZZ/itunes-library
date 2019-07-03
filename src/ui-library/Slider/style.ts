import styled from "styled-components";

export const SliderInput = styled.input`
    width: 100%;
    height: 15px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;

    :hover {
        opacity: 1;
    }

    ::-webkit-slider-thumb {
        appearance: none;
        width: 15px;
        height: 15px;
        background: #6bb29c;
        cursor: pointer;
    }
`;