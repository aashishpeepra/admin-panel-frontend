import React from "react";
import "./Tablefinal.css";
import Tableui from "../TableUI/Tableui";
import Tablebottom from "../TableBottom/tableBottom";
import Tablesetting from "../TableSetting/TableSetting";

export default class TableFinal extends React.Component {
    state = {
        
        setting:{
           drop:100,
           search:""
        }
    }
    onDropChange=(e)=>{
        this.setState({setting:{...this.state.setting,drop:e.target.value}})
    }
    onSearchChange=(e)=>{
        this.setState({setting:{...this.state.setting,search:e.target.value}})
    }
    render() {
        console.log(this.props.data)
        return (
            <section className="final-table-type-1">
                <Tablesetting drop={{value:this.state.setting.drop,change:this.onDropChange}} search={{value:this.state.setting.search,change:this.onSearchChange}} />
                <Tableui data={this.props.data} space={this.props.space}/>
                <Tablebottom />

            </section>
        )
    }
}