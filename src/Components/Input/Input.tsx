import React from "react";
import styled from "../../styles/typed-components";

const Container = styled.div`
    position: relative;
    margin-top: 20px;
    width: fit-content;
    margin:0 auto;
    margin-bottom: 20px;
`;

const FormInput = styled.input`
    padding: 15px 50px;
    box-sizing: border-box;
    border: 1px solid dimgray
    &:focus {
        outline: none;
    }
    
    &:focus-within {
        border: 1px solid ${props => props.theme.greenColor};
        & ~ .set-group-icon {
            transition: .3s;
            transform: translateY(-50%) rotateY(-360deg);
            & > svg {
                fill: ${props => props.theme.greenColor};
            }
        }
    }
`;

const Icon = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    top: 5px;
    transform: translateY(-50%) rotateY(0deg);
    margin-top: 20px;
    left: 10px;
    svg {
        transition: .3s;
        fill: darkgray;
    }
`;
interface IProps {
    id: string;
    value?: string;
    type?: string;
    placeholder: string;
    svgPath: string;
    name: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<IProps> = ({
    id,
    value = "",
    type = "text",
    placeholder,
    svgPath,
    onInputChange,
    name
}) => (
    <Container>
        <FormInput 
        type={type}
        value={value}
        id={id}
        onChange={onInputChange}
        name={name}
        placeholder={placeholder}
        autoComplete={"off"}
        />
        <Icon className={"set-group-icon"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d={svgPath}/></svg>
        </Icon>
    </Container>
);

export default Input;