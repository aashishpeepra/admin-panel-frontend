import React from "react";
import "./tablebottom.css";
import Button from "../../Button/Button";
export default (props)=>{
    return (
        <div className="table-bottom">
            <div className="table-bottom-left">
                <h3>02 / 19 entries</h3>
            </div>
            <div className="table-bottom-right">
            <button type="button">Previous</button>
            <span>2</span>
            <button type="button">Next</button>
            </div>
        </div>
    )
}