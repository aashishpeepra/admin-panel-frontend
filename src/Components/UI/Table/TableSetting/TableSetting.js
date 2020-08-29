import React from "react";
import "./TableSetting.css";

export default (props)=>{
    console.log(props)
    return (
        <div className="Table-setting">
            <div>
            <label htmlFor="boxes">Display</label>
            <select value={props.drop.value} id="boxes" onChange={props.drop.change}>
                {(function(){
                    let temp=[];
                    for(let i=100;i>=1;i--)
                temp.push(<option value={i} key={Math.random()*i}>{i}</option>)
                return temp;
                })()}
            </select>
            
            </div>
            <input type="text" placeholder="Search here..." value={props.search.value} onChange={props.search.change} />
        </div>
    )
}