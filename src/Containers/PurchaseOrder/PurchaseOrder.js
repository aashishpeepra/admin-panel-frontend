import React from "react";
import "./PurchaseOrder.css";
import HeadingBlocks from "../../Components/Blocks/HeadingBlocks/HeadingBlocks";
import ButtonHolder from "../../Components/UI/Button-holder/Button-holder";
import TableFinal from "../../Components/UI/Table/TableFinal/Tablefinal";
import Button from "../../Components/UI/Button/Button"
export default class PurchaseOrder extends React.Component
{
    state={
        heads:[
            {text:"Today",func:()=>alert("Todat"),selected:true},
            {text:"This week",func:()=>alert("This Week"),selected:false},
            {text:"This Month",func:()=>alert("This Month"),selected:false},
            {text:"This Year",func:()=>alert("This Year"),selected:false}
        ],
        tableData:[
            {
                sno:{name:"S.no",value:0,multiple:false},
                date:{name:"Date",value:new Date().getDate(),multiple:false},
                poid:{name:"Po_id",value:154657,multiple:false},
                customername:{name:"Customer Name",value:"Aashish",multiple:false},
                customerpoc:{name:"Customer POC",value:6727345239,multiple:false},
                pocno:{name:"Poc No",value:746583467,multiple:false},
                mistry:{name:"Mistry",value:"Elaya",multiple:false},
                product:{name:"Product",value:["Tiles","Granites"],multiple:true},
                ssc:{name:"SSC",value:["#22","#45"],multiple:true},
                quantity:{name:"Ouan. Consumed",value:[2,2],multiple:true},
                noofslabs:{name:"No of slabs",value:[2,2],multiple:true},
                uom:{name:"UOM",value:["1000 ft","1000 ft"],multiple:true},
                mrp:{name:"MRP",value:["Rs2689","Rs6840"],multiple:true},
                amt:{name:"Amount",value:5000,multiple:false},
                paymode:{name:"Pay Mode",value:"online",multiple:false},
                action:{name:"Action",value:[<Button small={true} text="PDF" color="#FF9F5B" func={()=>alert("PDF")}/>,<Button small={true} text="Edit" color="#FF9F5B" func={()=>alert("Edit")}/>,],multiple:true}
            }
        ]
    }
    
    render(){
        return(
            <section id="Purchase-Order">
                <HeadingBlocks data={this.state.heads}/>
                <HeadingBlocks data={this.state.heads}/>
                <ButtonHolder text="+Create PO" func={()=>alert("Worked!")}/>
            
                <TableFinal data={this.state.tableData} space={7}/>
            </section>
            
        )
    }
}