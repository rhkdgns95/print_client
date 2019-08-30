import React, { FormEvent } from "react";
import styled from "../../styles/typed-components";
import Checkbox  from "../../Components/Checkbox";
import IconCheckbox from "../../Components/IconCheckbox";
import ProgressBar from "../../Components/ProgressBar";
import Button from "../../Components/Button";
import Form from "../../Components/Form";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: ${props => props.theme.grayColor};
    padding: 50px;
`;
const ExtendedForm = styled(Form)`
    border: 1px solid #dfdfdf;
    background-color: white;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-shadow: -3px 3px 3px rgba(0,0,0,.34)
`;
const Box = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;
const CheckboxList = styled.div`
    display: flex;
    box-sizing: border-box;
`;
const IconCheckboxList = styled(CheckboxList)`
    flex-flow: column;
    width: 400px;
    justify-content: space-around;
    padding-left: 40px;
`;

const Info = styled.h5`
    margin-top: 0;
    font-size: 13px;
    span {
        color: #2854ff;
    }
`;
const Header = styled.h3`
    font-size: 20px;
`;
const ProgressBarBox = styled.div`
    padding-left: 40px;
`;
const ExtendedButton = styled(Button)`
    margin: 30px;
    width: 210px;
    border-radius: 0;
    font-size: 17px;
    text-transform: uppercase;
`;

interface IList {
    id: number;
    name: string;
    title: string;
    content: string;
    type: string;
    checked: boolean;
    svgPath: string;
}
interface IProps {
    list: Array<IList>;
    loading: boolean;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => any;
}

const HomePresenter: React.FC<IProps> = ({
    list,
    loading,
    onInputChange,
    onSubmit
}) => {
    var idx: number = 0;
    var isChecked: boolean = false;
    return (
        <Container>
        { loading && ("loading...") }
        {
            !loading && (
                <ExtendedForm submitFn={onSubmit} className={"form"}>
                <Info><span>Print  </span> > KMA9DA3E</Info>
                <Header> Actions</Header>
                <Box>
                    {/* <CheckboxList>
                        {
                            list.map(item => <Checkbox key={item.id} id={item.id + ""} value={item.title} onInputChange={onInputChange}></Checkbox>)
                        }
                    </CheckboxList> */}
                    <IconCheckboxList>
                    {
                        list.map(item => <IconCheckbox key={item.id} id={item.id + ""} name={item.name} value={item.title} svgPath={item.svgPath} onInputChange={onInputChange}/>)
                    }
                    </IconCheckboxList>
                    <ProgressBarBox>
                    {
                        list.map(item => {
                            if(item.checked) {
                                isChecked = true;
                                return <ProgressBar key={item.id} idx={++idx} content={item.content} svgPath={item.svgPath}/>
                            }
                        })
                    }
                    </ProgressBarBox>
                </Box>
                {
                    isChecked && <ExtendedButton className={"button"} value={"Submit"} />
                }

                </ExtendedForm>
            )
        }

    </Container>
    )
}

export default HomePresenter;