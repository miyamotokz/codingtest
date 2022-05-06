import React, { ReactNode } from 'react';
import '../App.css';
import { FetchTodohukenList } from '../lib/fetch';


type Props = {
    children: never[],
    checked: number[],
    onCheck: (arg0: any) => void
}

type Todohuken = {
  prefCode:number,
  prefName:string,
}

const TodohukenCheckBox = (props:Props) => {
    const { data, error } = FetchTodohukenList()
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <>
            <div id="checkboxtitle">都道府県</div>
        <form>  {
            data.result.map((e: Todohuken) => {
                const name: string = "todohuken" + e.prefCode
                const checkedAttr:string = e.prefCode in props?.checked ? " checked" : ""
                return (
                    <span>
                    <input type="checkbox"
                        key={name}
                        value="{e.prefCode}"
                        id={name}
                        onChange={() => props.onCheck(e.prefCode)}
                        {...checkedAttr}
                        >
                    </input>
                    <label htmlFor={name}>{e.prefName}</label>
                    </span>
                    )
                })
            }
        </form>
        </>
    )
}

export default TodohukenCheckBox;