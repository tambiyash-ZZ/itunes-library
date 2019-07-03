import styled from "styled-components";

export interface IGridContainerProps {
    columns: string;
    rows: string;
    rowGap?: number;
    columnGap?: number;
    rowMinHeight?: number;
    justifyItems?: string;
    alignItems?: string;
}

export interface IGridItemProps {
    padding?: number;
    columnStart?: number;
    columnSpan?: number;
    rowStart?: number;
    rowSpan?: number;
}

export const GridContainer = styled.div<IGridContainerProps>`
    display: grid;
    grid-template-columns: ${props => props.columns};
    grid-template-rows: ${props => props.rows};
    grid-row-gap: ${props => props.rowGap && `${props.rowGap}px`};
    grid-column-gap: ${props => props.columnGap && `${props.columnGap}px`};
    grid-auto-rows: ${props => props.rowMinHeight && `minmax(${props.rowMinHeight}px, auto)`};
    justify-items: ${props => props.justifyItems};
    align-items: ${props => props.alignItems};
`;

export const GridItem = styled.div<IGridItemProps>`
    padding: ${props => props.padding && `${props.padding}px`};
    grid-column-start: ${props => props.columnStart};
    grid-column-end: ${props => props.columnSpan && `span ${props.columnSpan}`};
    grid-row-start: ${props => props.rowStart};
    grid-row-end: ${props => props.rowSpan && `span ${props.rowSpan}`};
`;
