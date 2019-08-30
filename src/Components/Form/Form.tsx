import React, { FormEvent } from "react";
import styled from "../../styles/typed-components";

const Container = styled.form`

`;

interface IProps {
    submitFn: (React: FormEvent<HTMLFormElement>) => any;
    className?: string;
}

const Form: React.FC<IProps> = ({
    children,
    submitFn,
    className
}) => (
    <Container onSubmit={submitFn} className={className}>
        {
            children            
        }
    </Container>
);

export default Form;