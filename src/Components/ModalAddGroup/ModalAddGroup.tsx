import React from "react";
import styled from "../../styles/typed-components";
import Checkbox from "../Checkbox";
import Input from "../Input";
import StepProgressBar from "../StepProgressBar";
import Table from "../Table";
import ConfirmCheckbox from "../ConfirmCheckbox";
import { MutationFunction } from "react-apollo";

const Container = styled.div`
    position: absolute;
    top: 0;
    border-radius: 6px;
    background-color: black;
    transition: width .3s, height .3s;
    width: 0;
    height: 0;

    & > div {
        opacity: 0;
    }
    &.active {
        transition: width .3s;
        width: 100%;
        height: 100%;
        & > div {
            transition: .3s;
            opacity: 1;
        }
    }
`;
const CheckboxList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
`;
interface IForm {
    step: number;
}
const Form = styled.form<IForm>`
    position: relative;
    display: flex;
    width: 300%;
    height: 100%;
    flex: 3;
    transition: .3s;
    transform: translateX(-${props => {
        return props.step * 33.3333;
    }}%);
`;
const Title = styled.h5`
    text-align: center;
    font-size: 17px;
    color: ${props => props.theme.greenColor};
    
`;
const StepContainer = styled.div`
    flex:1;
    padding-top: 120px;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button`
    border: 1px solid #dfdffd;
    padding: 12.5px 25px;
    border-radius: 6px;
    color: white;
    transition: .3s;
    margin: 15px;
    cursor: pointer;
    outline: none;
    &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.24), 0 4px 6px rgba(0,0,0,.42);
    }
    display: none;
    &.active {
        display: block;
    }
`;
const ButtonContainer = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BtnAgoStep = styled(Button)`
    background-color: #ff4a4a;
    &:hover {
        background-color: #ff0404;
    }
`;

const BtnNextStep = styled(Button)`
    background-color: #3f51b5;
    &:hover {
        background-color: #062cff;
    }
`;
const ModalCloseBtn = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    cursor: pointer;
    svg {
        fill: darkgray;
        transition: .2s;
    }
    &:hover {
        svg {
            fill: ${props => props.theme.greenColor};
        }
    }
`;
const ExtendedProgressBar = styled(StepProgressBar)`
    position: absolute;
    width: 100%;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
`;
const LineHeader = styled.h5`
    display: flex;
    text-align: center;
    border-bottom: 1.5px solid darkgray;
    width: 400px;
    padding-bottom: 9px;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 10px;
    svg {
        fill: darkgray;
    }
`;

const ExtendedTable = styled(Table)`
    width: 400px;
    margin: 0 auto;
`;
const ConfirmList = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
    margin: 0 auto;
    margin-top: 30px;
`;
interface IConfirmItem {
    label: string;
}
const ConfirmItem = styled.div<IConfirmItem>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid #dfdfdf;
    margin: 0 20px;
    margin-bottom: 20px;
    & svg {
        fill: darkgray;   
    }
    &.active {
        border: 2px solid #a3ae1d;
        & svg {
            fill: #a3ae1d;
        }
    }
    &::after {
        content "${props => props.label}";
        position: absolute;
        display: span;
        left: 50%;
        top: 100px;
        transform: translateX(-50%);
        color: gray;
        font-size: .8em;
        white-space: nowrap;
    }   
    &.active {
        &::after {
            color: black;
        }
    }
`;
const Flexbox = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 900px;
    margin: 0 auto;
`;
const FlexItem = styled.div`
`;
const BtnCreateGroup = styled(Button)`
    background-color: #3bb3a2;
    &:hover {
        background-color: #40cebb;
    }
`;

interface IFormGroup {
    checkedPDF: boolean;
    checkedSendEmail: boolean;
    checkedRESTFul: boolean;
    checkedConfirm: boolean;
    email?: string;
    password?: string;
    groupName?: string;
}
interface IProps {
    isGroupAdd: boolean;
    currentStep: number;
    onToggleModal: (event: React.MouseEvent<HTMLDivElement>) => void;
    handleModalReverseStep: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleModalNextStep: (event: React.MouseEvent<HTMLButtonElement>) => void;
    formCheckedPDF: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formCheckedSendEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formCheckedRESTFul: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formCheckedConfirm: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formGroup: IFormGroup;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addGroup: MutationFunction<any, any>;
}
const ModalAddGroup: React.FC<IProps> = ({
    isGroupAdd,
    currentStep,
    onToggleModal,
    handleModalReverseStep,
    handleModalNextStep,
    formCheckedPDF,
    formCheckedSendEmail,
    formCheckedRESTFul,
    formCheckedConfirm,
    formGroup,
    onInputChange,
    addGroup
}) => 
    {
        const svgPathPDF: string = "M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z";
        const svgPathSendEmail: string = "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z";
        const svgPathRESTFul: string = "M24 21v-6h-18v6h18zm-3-4c.553 0 1 .448 1 1s-.447 1-1 1c-.552 0-1-.448-1-1s.448-1 1-1zm-7.806 0h1.275l-.864 2h-1.274l.863-2zm-2.141 0h1.275l-.863 2h-1.275l.863-2zm-2.19 0h1.275l-.863 2h-1.275l.863-2zm-4.863.941c-2.253-.29-4-2.194-4-4.524 0-2.252 1.626-4.121 3.767-4.506.177-3.294 2.895-5.911 6.233-5.911s6.056 2.617 6.233 5.911c2.005.361 3.541 2.029 3.729 4.089h-1.991c-.279-2.105-2.674-2.333-3.65-2.401.117-1.958-.555-5.599-4.321-5.599-4.438 0-4.359 4.75-4.321 5.599-.945-.037-3.679.341-3.679 2.818 0 1.223.856 2.245 2 2.511v2.013z";
        const svgPathGroupName: string = "M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm0-19l8.032 4.685-8.032 4.685-8.029-4.685 8.029-4.685zm0-2.315l-11.998 7 11.998 7 12.002-7-12.002-7z";
    return (
    <Container className={isGroupAdd ? "active" : ""}>
        <Wrapper>
        <Form step={currentStep}>
            <StepContainer>
                <Title>SELECT GROUP TYPE</Title>
                <CheckboxList>
                    <Checkbox id={1} name={"PDF"} checked={formGroup.checkedPDF} onChange={formCheckedPDF} svgPath={svgPathPDF}/>
                    <Checkbox id={2} name={"Send Email"} checked={formGroup.checkedSendEmail} onChange={formCheckedSendEmail} svgPath={svgPathSendEmail}/>
                    <Checkbox id={3} name={"RESTFul"} checked={formGroup.checkedRESTFul} onChange={formCheckedRESTFul} svgPath={svgPathRESTFul}/>
                </CheckboxList>
            </StepContainer>
            <StepContainer>
                <Title>GROUP SETTINGS</Title>
                <Input id={"groupName_id"} value={formGroup.groupName} placeholder={"Group Name"} name={"groupName"} svgPath={svgPathGroupName} onInputChange={onInputChange} />
                {
                    formGroup.checkedSendEmail && (
                        <React.Fragment>
                            <Input id={"email_id"} value={formGroup.email} placeholder={"Email"} name={"email"} svgPath={svgPathGroupName} onInputChange={onInputChange} />
                            <Input id={"password_id"} value={formGroup.password} placeholder={"Password"} name={"password"} svgPath={svgPathGroupName} onInputChange={onInputChange} type="password"/>
                        </React.Fragment>
                    )
                }
            </StepContainer>
            <StepContainer>
                <Title>CONFIRM</Title>
                <Flexbox>
                    <FlexItem>
                        <LineHeader>GROUP SETS</LineHeader>
                        <ExtendedTable className={"Table"} checkedEmail={formGroup.checkedSendEmail} email={formGroup.email} groupName={formGroup.groupName}/>
                    </FlexItem>
                    <FlexItem>
                        <LineHeader>GROUP OPTIONS</LineHeader>
                        <ConfirmList>
                            <ConfirmItem className={formGroup.checkedPDF ? "active" : ""} label={"PDF"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d={svgPathPDF}/></svg>
                            </ConfirmItem>
                            <ConfirmItem className={formGroup.checkedSendEmail ? "active" : ""} label={"Send Email"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d={svgPathSendEmail}/></svg>
                            </ConfirmItem>
                            <ConfirmItem className={formGroup.checkedRESTFul ? "active" : ""} label={"RESTFul"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d={svgPathRESTFul}/></svg>
                            </ConfirmItem>
                        </ConfirmList>
                    </FlexItem>
                </Flexbox>
                <ConfirmCheckbox isChecked={formGroup.checkedConfirm} formCheckedConfirm={formCheckedConfirm}/>
            </StepContainer>
        </Form>
        <ButtonContainer>
            <BtnAgoStep className={currentStep !== 0 ? "active" : ""} onClick={handleModalReverseStep}>이전단계</BtnAgoStep>
            <BtnNextStep className={currentStep !== 2 ? "active" : ""} onClick={handleModalNextStep}>다음단계</BtnNextStep>
            <BtnCreateGroup 
            className={currentStep === 2 && formGroup.checkedConfirm ? "active" : ""} 
            onClick={e => { 
                const { 
                    checkedPDF, 
                    checkedRESTFul, 
                    checkedSendEmail,
                    groupName,
                    email,
                    password
                } = formGroup;
                e.preventDefault();
                console.log("new Data: ", formGroup);
                addGroup({ variables: 
                    {
                        groupName,
                        email,
                        password,
                        checkedPDF,
                        checkedSendEmail,
                        checkedRESTFul
                    } 
                });
                }}>그룹생성</BtnCreateGroup>
        </ButtonContainer>
        <ExtendedProgressBar className={"progressbar"} step={currentStep}/>
        <ModalCloseBtn onClick={onToggleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>   
        </ModalCloseBtn>
        </Wrapper>
    </Container>
    )
}
export default ModalAddGroup;