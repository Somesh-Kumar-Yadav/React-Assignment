import React from "react"
export function Todos() {
    let [Name, setName] = React.useState("");
    let [TodosList, setTodosList] = React.useState([]);
    
    return <>
        <input onChange={(e) => {
            setName(e.target.value)
        }} type="text" placeholder="Enter your Name" />
        <button onClick={() => {
             setTodosList([...TodosList, Name])
            
        }}>Submit</button>
        <ol>{
            TodosList.map((el)=> {
                return <li>{el}</li>
            })
        }
        </ol>
    </>
}