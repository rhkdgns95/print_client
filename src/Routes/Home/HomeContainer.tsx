import React, { useState, useEffect, useReducer, useContext } from "react";
import HomePresenter from "./HomePresenter";
import { Query, Mutation } from "react-apollo";
import { GET_GROUPS, DELETE_GROUPS, ADD_GROUP } from "./HomeQueries";
// import useFetch from "./HomeFetch";

interface IFormGroup {
    checkedPDF: boolean;
    checkedSendEmail: boolean;
    checkedRESTFul: boolean;
    checkedConfirm: boolean;
    email?: string;
    password?: string;
    groupName?: string;
}


const useFetch = (callbackFn) => {
    console.log("useFetch");
    useEffect(() => {
        console.log("useEffect in useFetch");
        setTimeout(() => {
            callbackFn(false);
        }, 300);
    }, []);
};

const InitialFormGroup: IFormGroup = {
    checkedPDF: false,
    checkedSendEmail: false,
    checkedRESTFul: false,
    checkedConfirm: false,
    email: "",
    password: "",
    groupName: ""
};

const formGroupReducer: React.Reducer<IFormGroup, { formGroup: IFormGroup }> = (_, action) => {
    const { formGroup } = action;
    console.log("type: ", formGroup);
    return { ...formGroup };
};

const HomeContainer: React.FC<any> = () => {
    const [ formGroup, dispatchFormGroup ] = useReducer(formGroupReducer, InitialFormGroup);
    const [ loading, setLoading ] = useState(true);
    const [ details, setDetails ] = useState(false);
    const [ isGroupAdd, setIsGroupAdd ] = useState(false);
    const [ currentStep, setCurrentStep ] = useState(0);
    
    useFetch(setLoading);

    useEffect(() =>{
        console.log("formGroup:", formGroup);
    }, [dispatchFormGroup]);

    const formGroupReset = () => dispatchFormGroup({formGroup: InitialFormGroup});
    const formCheckedPDF: React.ChangeEventHandler<HTMLInputElement> = (event) => dispatchFormGroup({formGroup: {...formGroup, checkedPDF: !formGroup.checkedPDF}});
    const formCheckedSendEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => dispatchFormGroup({formGroup: {...formGroup, checkedSendEmail: !formGroup.checkedSendEmail}});
    const formCheckedRESTFul: React.ChangeEventHandler<HTMLInputElement> = (event) => dispatchFormGroup({formGroup: {...formGroup, checkedRESTFul: !formGroup.checkedRESTFul}});
    const formCheckedConfirm: React.ChangeEventHandler<HTMLInputElement> = (event) => dispatchFormGroup({formGroup: { ...formGroup, checkedConfirm: !formGroup.checkedConfirm}});

    const onToggleDetails: React.MouseEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        setDetails(!details);
    }
    const handleModalReverseStep: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        dispatchFormGroup({formGroup: { ...formGroup, checkedConfirm: false}});
        if(currentStep === 1) {
            dispatchFormGroup({formGroup: { ...formGroup, groupName: "", email: "", password: ""}});
        }
        setCurrentStep(currentStep - 1);
    }
    const handleModelNextStep: React.MouseEventHandler<HTMLButtonElement> =  (event) => {
        event.preventDefault();
        setCurrentStep(currentStep + 1);
    }
    const onToggleModal: React.MouseEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        formGroupReset();
        setIsGroupAdd(!isGroupAdd);
        setCurrentStep(0);
    }
    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { name, value }} = event;
        switch(name) {
            case "groupName":
                dispatchFormGroup({formGroup: { ...formGroup, groupName: value}});
                break;
            case "email":
                dispatchFormGroup({formGroup: { ...formGroup, email: value}})
                break;
            case "password":
                dispatchFormGroup({formGroup: { ...formGroup, password: value}})
                break;
        }
        
        console.log("onInputChange");
        console.log(name, value);
    }
    const handleCreateGroup: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        formGroupReset();
        setIsGroupAdd(!isGroupAdd);
        setCurrentStep(0);
    }
    
    return (
        <Query 
            query={GET_GROUPS}
        >
        {
            ({data, loading: queryLoading}) => {
                return (
                    <Mutation mutation={ADD_GROUP}
                        refetchQueries={
                            [{
                                query: GET_GROUPS
                            }]
                        }
                        onCompleted={data => {
                            console.log("Success");
                            console.log(data);
                            formGroupReset();
                            setIsGroupAdd(!isGroupAdd);
                            setCurrentStep(0);
                        }}
                    >
                        {
                            (mutationFn) => {
                                if(queryLoading) {
                                    return <div>Wait....</div>;
                                }
                                const { GetGroups }: { GetGroups: IGrouping[]} = data;
                                console.log(GetGroups);
                                return (
                                    <HomePresenter 
                                        loading={loading} 
                                        onToggleDetails={onToggleDetails} 
                                        details={details} 
                                        isGroupAdd={isGroupAdd} 
                                        onToggleModal={onToggleModal}
                                        handleModalReverseStep={handleModalReverseStep}
                                        handleModelNextStep={handleModelNextStep}
                                        currentStep={currentStep}
                                        formCheckedPDF={formCheckedPDF}
                                        formCheckedSendEmail={formCheckedSendEmail}
                                        formCheckedRESTFul={formCheckedRESTFul}
                                        formCheckedConfirm={formCheckedConfirm}
                                        formGroup={formGroup}
                                        onInputChange={onInputChange}
                                        addGroup={mutationFn}
                                        groupList={GetGroups}
                                    />
                                )
                            }
                        }
                    </Mutation>
                )
            }
        }
        </Query>
    )
}

export default HomeContainer;