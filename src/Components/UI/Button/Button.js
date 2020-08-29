import React from "react";
import "./Button.css";

export default (props)=>{
    return (
        <button className={`button-type-1 ${props.small?'button-type-small':''}`} style={props.color!==undefined?{backgroundColor:props.color}:{}} onClick={props.func}>
            {props.text}
        </button>
    )
}