import React from "react";
import styled from "../../styles/typed-components";

const Container = styled.div`
    position: relative;
    & > div {
        margin: 0 auto;
        box-shadow: 0 2px 4px rgba(0,0,0,.24), 0 4px 6px rgba(0,0,0,0.34);
        background-color: #009284;
    }
    &:not(:nth-of-type(1)) {
        margin-top: 40px;
        &::before {
            content:"";
            position: absolute;
            width: 3px;
            height: 40px;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #009284;
        }
    }
`;
interface IData {
    idx: number;
    content: string;
}
const Data = styled.div<IData>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    padding: 10px;
    
    border-radius: 50%;
    &::after {
        content: "${props => props.content}";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 100%;
        padding-left: 20px;
        width: fit-content;
        white-space: nowrap;
        height: 20px;
        color: #009688;
    }
    &::before {
        content: "Step ${props => props.idx}.";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right:100%;
        padding-right: 18px;
        width: fit-content;
        height: 20px;
        color: #009688;
        white-space: nowrap;
        font-style: italic;
    }
    svg {
        fill: white;
    }
`;

interface IProps {
    svgPath: string;
    content: string;
    idx: number;
}

const ProgressBar: React.FC<IProps> = ({
    svgPath,
    content,
    idx
}) => (
    <Container>
        <Data idx={idx} content={content}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d={svgPath}/></svg>
        </Data>
    </Container>
);

export default ProgressBar;