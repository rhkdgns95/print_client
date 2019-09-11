import React from "react";
import styled from "../../styles/typed-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 auto;
    
    margin-left: -70px;
`;
const Step = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 170px;
    height: 100px;
    &:not(:first-child) {
        &::before { 
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 100%;
            height: 3px;
            background-color: #c7d8da;
            transition: .3s;
        }
    }
`;
interface INumber {
    label: string;
}
const Number = styled.span<INumber>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    padding: 7px 14px
    color: #737373;
    background-color: #c7d8da;
    border: 5px solid #c7d8da;
    border-radius: 50%;
    transition: .3s;
    
    &::after {
        content: "${props => props.label}";
        display: inline-block;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, 10px);
        color: gray;
        white-space: nowrap;
        font-size: 11px;
    }
    &.active {
        color: white;
        background-color: #14c0b0;
    }
    &.end {
        background-color: white;
    }
    &.end,
    &.active {
        &::after {
            color: #14c0b0;
        }
    }
    
`;

interface IProps {
    className: string;    
    step: number;
}
const StepProgressBar: React.FC<IProps> = ({
    className,
    step
}) => (
    <Container className={className}>
        <Step> 
            <Number className={step === 0 ? "active" : "end"} label={"JOB"}>1</Number>
        </Step>
        <Step>
            <Number className={step === 1 ? "active" : step > 1 ? "end" : ""} label={"OPTIONS"}>2</Number>
        </Step>
        <Step>
            <Number className={step === 2 ? "active" : ""} label={"CONFIRM"}>3</Number>
        </Step>
    </Container>
);

export default StepProgressBar;