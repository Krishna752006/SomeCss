import { useState } from 'react'

export default function Todo(){
    let [arr,setarr] = useState([]);

    function oc(){
        let a = document.getElementById('inp').value;
        document.getElementById('inp').value = "";
        setarr(() => {
            return [...arr,a];
        });
    }

    function ocl(event){
        let el = event.target;
        el.style.textDecoration = el.style.textDecoration === "line-through" ? "" : "line-through";
    }

    function del(event){
        event.stopPropagation();
        let t = event.target.parentElement.firstChild.textContent;
        setarr(arr.filter(i => i !== t));
    }

    return(
        <>
        <label htmlFor = "inp">Name: </label>
        <input id = "inp"/>
        <button onClick={oc}>Add</button>
        <ol>
        {arr.map((task, index) => (
                <li key={index} onClick = {ocl}>
                    {task}
                    <button onClick={del}>Delete</button>
                </li>
            ))}
        </ol>
        </>
    );
}