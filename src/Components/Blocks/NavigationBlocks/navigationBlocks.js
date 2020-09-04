import React from "react";
import "./navigationBlocks.css";
import { NavLink } from "react-router-dom";
import dropdown from "../../../Assets/icons/dropdown.png";
import {createBrowserHistory} from "history";
export default class navigationBlocks extends React.Component {
    state = {
        opwn: false,
        pathname:(function(){
            let history=createBrowserHistory();
            return history.location.pathname;
        })()
    }
    render() {
        console.log(this.props.link)
        return (
            <React.Fragment>
            <div className="navigation-blocks">
                <div className="navigation-blocks-image-holder">
                    {this.props.link===this.state.pathname?<img src={this.props.srcBlue} alt={this.props.alt} />:
                    <img src={this.props.src} alt={this.props.alt} />}
                </div>
               
                {
                    this.props.isDropdown?( <div className="navigation-blocks-opener">
                    <NavLink onClick={()=>this.setState({open:!this.state.open})} to={this.props.names[0].link}>{this.props.head}</NavLink>
                    <img src={dropdown} alt="Dropdown Icon" onClick={()=>this.setState({open:!this.state.open})} />
                </div>):<NavLink to={this.props.link} >{this.props.head}</NavLink>
                }
            </div>
             {
                this.props.isDropdown ? (
                    <React.Fragment>
                       
                        {this.state.open ? (
                            <div className="navigation-blocks-dropdown">
                                <ul>
                                    {this.props.names.map(each => { return<li> <NavLink key={each.link} to={each.link}>{each.name}</NavLink></li> })}
                                </ul>
                            </div>
                        ) : null}
                    </React.Fragment>

                ) : null
            }
            </React.Fragment>
        )
    }
}