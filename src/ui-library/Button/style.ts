import styled from "styled-components";

interface IButtonProps {
    iconButton?: boolean;
}

export const Button = styled.button<IButtonProps>`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: #6bb29c 0.5px solid;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px 10px;
    vertical-align: middle;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    min-width: 30px;
    min-height: 30px;
    background-color: #86d6bd;
    margin-right: 20px;
    margin-bottom: ${props => props.iconButton ? '0px' : '20px'};
    color: #ffff;
    :hover {
        background-color: #6bb29c;
    }
`;