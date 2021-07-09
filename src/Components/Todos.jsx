import React from "react"
import { TodosInput } from "./TodosInput"
import { TodosList } from "./TodosList"
function Todos() {
    let [Todos, setTodos] = React.useState([])
    const HandleTodos = (item) => {
        setTodos([...Todos,item])
    }
    const ToggleTodos = (item)=>{
        item.id=!item.id
    }
    return <>
        <TodosInput HandleTodos={HandleTodos} Todos={ Todos }/>
        <TodosList Todos={Todos} ToggleTodos={ToggleTodos }/>
    </>
}
export { Todos };