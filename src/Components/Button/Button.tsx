import React from "react";
import styled from "../../styles/typed-components";

const Container = styled.input`
    padding: 12.5px 30px;
    background-color: #54c0b9;
    color: white;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    border: 1.5px solid #54c0b9;
    transition: .3s;
    &:hover {
        background-color: white;
        color: #54c0b9;
    }
`;

interface IProps {
    value: string;
    className: string;
}

const Input: React.FC<IProps> = ({
    value,
    className
}) => (
    <Container 
        type={"submit"}
        className={className}
        value={value}
    />
);

export default Input;