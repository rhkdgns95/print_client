import React from "react";
import styled from "../../styles/typed-components";

const Container = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    margin-right: 15px;
    padding: 40px;
`;

const LeftWrapper = styled.div`
    position: absolute;
    top: -2px;
    left: -2px;
    width: 50%;
    height: 70%;
    transform: skew(2deg, 3deg);
    background-color: #f19494;
`
const RightWrapper = styled.div`
    position: absolute;
    bottom: -3px;
    right: -3px;
    width: 50%;
    height: 70%;
    transform: skew(2deg, 3deg);
    background-color: #0ed7d7;
`;

const InputCheck = styled.input`
    height: 0;
    &:focus {
        outline: none;
    }
    
    &:checked,
    &:hover {
        & ~ label {
            color: #001152;
            border: 1px solid ${props => props.theme.blueColor};
            /*box-shadow: 0 4px 6px rgba(0,0,50,0.24), 0 6px 12px rgba(0,0,50,.45);*/
            box-shadow: 5px 5px 5px rgba(40,40,100,.54);
        }
        & ~ .left-wrapper {
            background-color: red;
        }
        & ~ .right-wrapper {
            background-color: #03fe1f;
        }
    }
`; 

const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    justify-content: center;
    font-size: 20px;
    align-items: center;
    background-color: white;
    border: 1px solid #b7a0a0;
    transition: .3s;
    color: #aaaaaa;
`;

interface IProps {
    id: string;
    value: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

const Checkbox: React.FC<IProps> = ({
    id,
    value,
    onInputChange
}) => (
    <Container>
        <InputCheck id={id} type={"checkbox"} onChange={onInputChange}/>
        <LeftWrapper className={"left-wrapper"} />
        <RightWrapper className={"right-wrapper"}/>
        <Label htmlFor={id}>{ value }</Label>
    </Container>
);

export default Checkbox;