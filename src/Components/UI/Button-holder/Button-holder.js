import React from "react";
import "./Button-holder.css";
import Button from "../Button/Button";

export default (props)=>{
    return (
        <div className="button-holder-type-1">
            <Button text={props.text} func={props.func}/>
        </div>
    )
}