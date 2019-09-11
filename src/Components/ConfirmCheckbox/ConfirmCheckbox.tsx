import React from "react";
import styled from "../../styles/typed-components";

const Container = styled.div`
    position: relative;
    padding: 10px;
    margin: 0 auto;
    margin-top: 40px;
    width: fit-content;
    & svg {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
    }
`;

const Checkbox = styled.input`
    position: absolute;
    z-index: -99;
    opacity: 0;
    pointer-events: none;
    &:checked {
        & ~ Label {
            transition: .3s;
            color: #0401c4;
        }
        & ~ svg {
            transition: .3s;
            fill: #0401c4;       
        }
    }
`;
const Label = styled.label`
    font-size: 13px;
    padding-left: 25px;
    color: darkgray;
    cursor: pointer;
`;
interface IProps {
    isChecked: boolean;
    formCheckedConfirm: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const ConfirmCheckbox: React.FC<IProps> = ({
    isChecked,
    formCheckedConfirm
}) => (
    <Container>
        <Checkbox type={"checkbox"} id={"confirm_checkbox"} name={"checkedConfirm"} onChange={formCheckedConfirm} checked={isChecked}/>
        <Label htmlFor={"confirm_checkbox"}>그룹핑 생성 동의하기</Label>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z"/></svg>
    </Container>
);

export default ConfirmCheckbox;