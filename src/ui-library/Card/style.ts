import styled, { css } from "styled-components";

const overflowStyles = css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
`;

export interface CardImageProps {
    bgImageUrl?: string;
}

export interface IBigCardProps {
    contentVerticalAlign?: boolean;
    width?: number;
}

export const BigCard = styled.div<IBigCardProps>`
    display: flex;
    flex-flow: ${props => props.contentVerticalAlign ? 'column wrap' : 'row wrap'};
    width: ${props => `${props.width}%` || '100%'};
    height: auto;
    padding: 30px;
    border: 1px solid #ced4da;
`;

export const Card = styled.div<CardImageProps>`
    background: url(${props => props.bgImageUrl}) center/cover no-repeat;
    display: block;
    min-height: 400px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    :hover {
        box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 2px 4px rgba(16,22,26,.2), 0 8px 24px rgba(16,22,26,.2);
      }
`;


export const PriceTag = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #77d7b9;
    color: white;
    padding: 0.8em;
    text-align: center;
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.18);

    div:first-child {
        font-weight: 700;
        font-size: 24px;
    }
    div:last-child {
        font-size: 12px;
    }
`;

export const CardSectionWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    -webkit-transform: translateY(calc(100px + 1em));
    transform: translateY(calc(100px + 1em));
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;

    ${Card}:hover & {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
`;

export const CardSection = styled.div`
    padding: 0.7em;
    position: relative;
    z-index: 1;
    height: 150px;
    max-height: 250px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SectionHeading = styled.h3`
    text-align: center;
    color: gray;
    ${overflowStyles};
    margin-bottom: 10px;

    :after {
        content: '';
        display: block;
        margin: auto;
        height: 3px;
        width: 0px;
        background: transparent;
        transition: width .5s ease, background-color .5s ease;
    }

    ${Card}:hover & {
        :after {
        width: 80%;
	    background: #0dba84;
        }
    }
`;

export const SectionDetails = styled.div`
    color: black;
    margin: 0;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding-right: 10px;
    align-items: center;
`;

export const SectionHiddenDetails = styled.span`
    display: none;
    ${Card}:hover & {
        display: inline-block;
      }
`;

export const SectionText = styled.div`
    color: black;
    margin: 0;
    height: auto;
    display: flex;
    flex-flow: column wrap;
    font-size: 14px;
    font-weight: 800;

    div {
        padding-bottom: 5px;
    }
`;