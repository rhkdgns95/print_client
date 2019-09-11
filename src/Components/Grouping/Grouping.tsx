import React from "react";
import styled from "../../styles/typed-components";

const Container = styled.div`   
    position: relative;
    width: 180px;
    height: 180px;
    margin-right: 10px;
    border-radius: 6px;
    border: 1px solid #dfdfdf;
`;
const Icon = styled.div`
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
        fill: grey;
    }
`;
const GroupTitle = styled.h3`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #1f89dd;
    color: white;
    font-size: 15px;
    padding: 5px 10px;
    box-sizing: border-box;
    text-align: center;
    font-weight: 600;
`;
const InputCheckbox = styled.input`
    border: none;
    &:focus {
        outline: none;
    }
    position: absolute;
    z-index: -99;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
    & ~ label {

    }
    &:checked {
        & ~ label {
            border: 1px solid #1f89dd;
            box-shadow: 0 2px 4px rgba(0,0,0,.24), 0 2px 4px rgba(0,0,0,0.32);
        }
        & ~ .checked-icon {
            opacity: 1;
        }
    }
    
`;
const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .3s;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0,0,0,.24), 0 2px 4px rgba(0,0,0,0.32);
   
    &:hover {
        box-shadow: 0 4px 6px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,0.32);
        & ~ .detail-option {
            width: auto;
            height: auto;
            padding: 10px;
            top: 3px;
            right: 3px;
            box-shadow: 0 2px 4px rgba(0,0,0,.24), 0 3px 6px rgba(0,0,0,.42);
        }
    }

`;
const CheckIcon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 0px;
    border-bottom: 50px solid transparent;
    border-left: 50px solid #1f89dd;
    opacity: 0;
    transition: .3s;
    svg {
        position: absolute;
        top: 10px;
        left: -40px;
        fill: white;
    }
`;
const DetailOptions = styled.div`
    position: absolute;
    display: flex;
    top: 3px;
    right: 3px;
    width: 0;
    height: 0;
    background-color: #addef5;
    border-radius: 50%;
    transition: .3s;
    cursor: pointer;
    svg {
        fill: white;
    }
    &:hover {
        width: auto;
        height: auto;
        padding: 10px;
        top: 3px;
        right: 3px;
        background-color: #03a9f4;
        box-shadow: 0 2px 4px rgba(0,0,0,.24), 0 3px 6px rgba(0,0,0,.42);
    }
`;
interface IProps {
    id: number;
    groupName: string;
    onToggleDetails: (event: React.MouseEvent<HTMLDivElement>) => any;
}

const Grouping: React.FC<IProps> = ({
    id,
    groupName,
    onToggleDetails
}) => (
    <Container>
      <React.Fragment>
            <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm12.002-14.315l-12.002-7-11.998 7 11.998 7 12.002-7z"/></svg>
            </Icon>
            <GroupTitle>{groupName}</GroupTitle>
            <InputCheckbox type={"radio"} id={"data" + id} name={"grouping"}/>
            <Label htmlFor={"data" + id}/>
            <CheckIcon className={"checked-icon"}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M0 11.386l1.17-1.206c1.951.522 5.313 1.731 8.33 3.597 3.175-4.177 9.582-9.398 13.456-11.777l1.044 1.073-14 18.927-10-10.614z"/></svg>
            </CheckIcon>
            <DetailOptions className={"detail-option"} onClick={onToggleDetails}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M21.414 18.586l2.586-2.586v8h-8l2.586-2.586-5.172-5.172 2.828-2.828 5.172 5.172zm-13.656-8l2.828-2.828-5.172-5.172 2.586-2.586h-8v8l2.586-2.586 5.172 5.172zm10.828-8l-2.586-2.586h8v8l-2.586-2.586-5.172 5.172-2.828-2.828 5.172-5.172zm-8 13.656l-2.828-2.828-5.172 5.172-2.586-2.586v8h8l-2.586-2.586 5.172-5.172z"/></svg>
            </DetailOptions>
        </React.Fragment>
    </Container>        
)

export default Grouping;