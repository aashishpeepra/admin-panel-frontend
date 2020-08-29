import React from "react";
import "./PurchaseOrder.css";
import HeadingBlocks from "../../Components/Blocks/HeadingBlocks/HeadingBlocks";
import ButtonHolder from "../../Components/UI/Button-holder/Button-holder";
import TableFinal from "../../Components/UI/Table/TableFinal/Tablefinal";
export default class PurchaseOrder extends React.Component
{
    state={
        heads:[
            {text:"Today",func:()=>alert("Todat"),selected:true},
            {text:"This week",func:()=>alert("This Week"),selected:false},
            {text:"This Month",func:()=>alert("This Month"),selected:false},
            {text:"This Year",func:()=>alert("This Year"),selected:false}
        ],
    }
    
    render(){
        return(
            <section id="Purchase-Order">
                <HeadingBlocks data={this.state.heads}/>
                <HeadingBlocks data={this.state.heads}/>
                <ButtonHolder text="+Create PO" func={()=>alert("Worked!")}/>
            
                <TableFinal/>
            </section>
            
        )
    }
}