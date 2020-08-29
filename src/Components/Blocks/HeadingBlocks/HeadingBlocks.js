import React from "react";
import "./HeadingBlocks.css";
import HeadingBlock from "./HeadingBlock/headingBlock";

export default (props)=>{
    return(
        <div className="heading-block-holder">
            {props.data.map(each=><HeadingBlock selected={each.selected} text={each.text} func={each.func}/>)}
        </div>
    )
}