import styled, { css } from "styled-components";

export interface TagProps {
    primary?: boolean;
    round?: boolean;
    value?: string;
}

export const Tag = styled.span<TagProps>`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    border-radius: ${props => props.round ? '30px' : '3px'};
    background-color: ${props => props.primary ? '#137cbd' : '#5c7080'};
    min-width: 20px;
    min-height: 20px;
    max-width: 100%;
    padding: ${props => props.round ? '2px 8px' : '2px 6px'};
    color: #f5f8fa;
    line-height: 16px;
    font-size: 12px;
    margin: 2px;
`;

export const TagText = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    padding-right: 5px;
`;

export const RemoveButton = styled.button`
    display: flex;
    opacity: .5;
    margin-top: -2px;
    margin-right: -6px !important;
    margin-bottom: -2px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 2px 2px 2px 0;
    color: inherit;
`;

export const ButtonIcon = styled.span`
    color: #f5f8fa;
    display: inline-block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    vertical-align: text-bottom;
`;