import { useState } from "react";
import ColorPicker from "./ColorPicker";
import MyText from "./MyText";
import ToDoList from "./TodoList";

export default function ChangeColorText(){

    const [color, setColor] = useState("black");

    function handleColorChange(newColor){
        setColor(newColor);
    }

    return(
        <>
            <h1> 01 Change color text</h1>
            <ColorPicker onChange={handleColorChange}/>
            <MyText color={color}/>
            <hr/>
            <h1> 02 To do List</h1>
            <ToDoList />
        </>
    )
 
}