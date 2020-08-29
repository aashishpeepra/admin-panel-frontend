import React from "react";
import "./headingBlock.css";

export default (props)=>{
    return(
        <button type="button" onClick={props.func} className={`heading-button ${!props.selected?'heading-button-un':''}`}>
            {props.text}
        </button>
    )
}