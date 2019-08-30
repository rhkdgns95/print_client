import React from "react";
import styled from "../../styles/typed-components";

const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 30px;
    padding: 40px;
    box-sizing: border-box;
`;


const InputCheck = styled.input`
    height: 0;
    &:focus {
        outline: none;
    }
    
    &:checked,
    &:hover {
        & ~ label {
            color: #06ad88;
            & svg {
                fill: #06ad88;
            }
        }
    }
`; 

const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: fit-content;
    height: 100%;
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    font-size: 20px;
    align-items: center;
    background-color: white;
    transition: .3s;
    white-space: nowrap;
    color: #b1b1b1;
    svg {
        transition: .3s;
        fill: #b1b1b1;
        margin-right: 20px;
    }
`;

interface IProps {
    id: string;
    value: string;
    name: string;
    svgPath: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconCheckbox: React.FC<IProps> = ({
    id,
    value,
    name,
    svgPath,
    onInputChange
}) => (
    <Container>
        <InputCheck id={id} name={name} type={"checkbox"} onChange={onInputChange}/>
            <Label htmlFor={id}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d={svgPath}/></svg>
                { value }
            </Label>
    </Container>
);

export default IconCheckbox;