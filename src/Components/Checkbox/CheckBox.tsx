import React from "react";
import styled from "../../styles/typed-components";

const Container = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    margin: 20px;
    margin-bottom: 40px;

`;

const InputCheckbox = styled.input`
    opacity: 0;
    pointer-events: none;
    width: 0;
    height: 0;
    border: none;
    &:focus {
        outline: none;
    }
    &:checked ~ label {
        border: 2px solid ${props => props.theme.greenColor};
        & > svg {
            fill: ${props => props.theme.greenColor};
        }
        & ~ .checked-icon {
            opacity: 1;
        }
        
    }
`;

const Label = styled.label`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #dfdfdf;
    cursor: pointer;
    transition: .3s;
    & > svg {
        fill: #dfdfdf;
        transition: .3s;
    }
    &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.34);
    }
`;
const Name = styled.div`
    position: absolute;
    top: 105%;
    color: #797979;
    left: 50%;
    white-space: nowrap;
    transform: translateX(-50%);
`;
const CheckedIcon = styled.div`
    opacity: 0;
    position: absolute;
    top: 10px;
    right: 0;
    padding: 10px 12px;
    background-color: ${props => props.theme.greenColor};
    border-radius: 50%;
    & > svg {
        fill: white;
    }
`;
interface IProps {
    id: number;
    name: string;
    checked: boolean;
    svgPath: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = ({
    id,
    name,
    onChange,
    checked,
    svgPath
}) => (
    <Container>
        <InputCheckbox type={"checkbox"} id={"Checkbox-data-" + id} checked={checked} onChange={onChange}/>
        <Label htmlFor={"Checkbox-data-" + id}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d={svgPath}/></svg>
        </Label>
        <Name>{name}</Name>
        <CheckedIcon className={"checked-icon"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"/></svg>
        </CheckedIcon>
    </Container>
);


export default Checkbox;