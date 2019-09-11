import React, { useContext } from "react";
import styled from "../../styles/typed-components";
import Grouping from "../../Components/Grouping";
import Spinner from "../../Components/Spinner";
import ModalAddGroup from "../../Components/ModalAddGroup";
import Checkbox from "../../Components/Checkbox";
import { MutationFunction } from "react-apollo";

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(34,40,195,1) 0%, rgba(56,191,219,1) 0%, rgba(45,98,253,1) 66%, rgba(45,98,253,1) 84%);
    width: 100%;
    height: 100vh;
`;

const Wrapper = styled.div`
    position: relative;
    opacity: 0;
    margin-top: 40px;
    &.active {
        margin-top: 0;
        opacity: 1;
    }
    transition: margin .3s, opacity .4s;
    background-color: #f3f3f9;
    padding: 40px;
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    box-shadow:  0 2px 4px rgba(0,0,0,.34), 0 4px 6px rgba(0,0,0,.42);
`;
const Box = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    border: 1px solid red;
    box-sizing: border-box;
    transition: .8s;
    transition-timing-function: cubic-bezier(1,-0.96,0,1.91);
    & > div:nth-of-type(1) {
        opacity: 1;
        transition: .5s;
    }
    & > div:nth-of-type(2) {
        opacity: 0;
        transition: .5s;
    }
    &.active {
        top: -100%;
        & > div:nth-of-type(1) {
            opacity: 0;
        }
        & > div:nth-of-type(2) {
            opacity: 1;
        }
    }
`;
const BoxWrapper = styled.div`
    padding: 40px;
    width: 100%;
    height: 50%;
    box-sizing: border-box;
`;
const Header = styled.h3`
    text-align: center;
    color: #0c27fb;
    font-size: 15px;
    margin-bottom: 2px;
`;
const MiddleHeader = styled.h3`
    color: #4d4b4b;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    
    margin: 7px 0;
`;
const BottomHeader = styled.h3`
    margin-top: 3px;
    text-align: center;
    color: #cfcfcf;
    font-size: 15px;
    font-weight: 400;
`;
const Title = styled.h3`
    font-weight: 600;
    font-size: 20px;
    margin: 0 auto;
    width: fit-content;
    padding: 20px;
    margin-top: 20px;
    border-bottom: 1px solid #dfdfdf;
`;
const GroupingList = styled.div`
    display: flex;
    padding-top: 10px;
    opacity: 0;
    padding-left: 100px;
    margin-top: 60px;
    transition: .4s;
    transition-delay: .5s;

    &.active {
        padding-left: 0;
        opacity: 1;
    }
    
`;
const AddGroup = styled.div`
    width: 177px;
    height: 177px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 3px dotted #dfdfdf;
    transition: .3s;
    cursor: pointer;
    svg {
        fill: darkgray;
        transition: .3s;
    }
    &:hover {
        border: 3px dotted #ff9800;
        svg {
            fill: #ff9800;
        }
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
    loading: boolean;
    details: boolean;
    isGroupAdd: boolean;
    currentStep: number;
    onToggleDetails: (event: React.MouseEvent<HTMLDivElement>) => any;
    onToggleModal: (event: React.MouseEvent<HTMLDivElement>) => any;
    handleModalReverseStep: (event: React.MouseEvent<HTMLButtonElement>) => any;
    handleModelNextStep: (event: React.MouseEvent<HTMLButtonElement>) => any;
    formCheckedPDF: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formCheckedSendEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formCheckedRESTFul: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formCheckedConfirm: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formGroup: IFormGroup;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addGroup: MutationFunction<any, any>;
    groupList: IGrouping[];
}
const HomePresenter: React.FC<IProps> = ({
    details,
    loading,
    isGroupAdd,
    currentStep,
    onToggleDetails,
    onToggleModal,
    handleModalReverseStep,
    handleModelNextStep,
    formCheckedPDF,
    formCheckedSendEmail,
    formCheckedRESTFul,
    formCheckedConfirm,
    formGroup,
    onInputChange,
    addGroup,
    groupList
}) => {
    
    console.log("Data3333: ", groupList);
    return (
        <Container>
            {
                loading && ( <Spinner /> )
            }
            <Wrapper className={loading ? "" : "active"}>
                <Box className={details ? "active" : ""}>
                <BoxWrapper>
                <Header>PREVIEW</Header>
                <MiddleHeader>Choose your desired grouping</MiddleHeader>
                <BottomHeader>Create a grouping for the print middleware</BottomHeader>
                <Title>GROUPING</Title>
                <GroupingList className={loading ? "" : "active"}>
                    {
                         groupList && groupList.length > 0 && groupList.map((group: any, key) => (
                            <Grouping 
                                id={key}
                                key={key}
                                groupName={group.groupName}
                                onToggleDetails={onToggleDetails}
                            />
                        ))
                    }
                    {/* <Grouping 
                        id={0}
                        groupName={"First Group"}
                        onToggleDetails={onToggleDetails}
                    />
                    <Grouping 
                        id={1}
                        groupName={"First Group"}
                        onToggleDetails={onToggleDetails}
                    /> */}
                    <AddGroup onClick={onToggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                    </AddGroup>
                </GroupingList>
                </BoxWrapper>
                <BoxWrapper>
                    <div onClick={onToggleDetails}>
                        Click!
                    </div>
                </BoxWrapper>
                </Box>
            </Wrapper>
            <ModalAddGroup 
            isGroupAdd={isGroupAdd} 
            onToggleModal={onToggleModal}
            handleModalReverseStep={handleModalReverseStep}
            handleModalNextStep={handleModelNextStep}
            currentStep={currentStep}
            formCheckedPDF={formCheckedPDF}
            formCheckedSendEmail={formCheckedSendEmail}
            formCheckedRESTFul={formCheckedRESTFul}
            formCheckedConfirm={formCheckedConfirm}
            formGroup={formGroup}
            onInputChange={onInputChange}
            addGroup={addGroup}
            />
        </Container>
    );
}

export default HomePresenter;