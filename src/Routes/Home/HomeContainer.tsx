import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import useFetch from "./HomeFetch";

interface IList {
    id: number,
    name: string;
    title: string;
    content: string;
    type: string;
    checked: boolean;
    svgPath: string;
}

const HomeContainer: React.FC<any> = () => {
    const initLists: Array<IList> = [
        { id: 9999, name: "", title: "", type: "", svgPath: "", checked: false, content: "" }
    ];
    const [ list, setList ] = useState(initLists);
    const loading: boolean = useFetch(setList);

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { name, checked }} = event;
        list.map(item => {
            if(item.name === name)
                item.checked = checked;
        });
        setList([
            ...list
        ]);
        console.log(list);
    }
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log("현재 설정: ", list);
    }
    return <HomePresenter loading={loading} list={list} onInputChange={onInputChange} onSubmit={onSubmit}/>
}

export default HomeContainer;
