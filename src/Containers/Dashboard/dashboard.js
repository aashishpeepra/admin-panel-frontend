import React from "react";
import axios from "axios";
class Dashboard extends React.Component{
    state={
        name:""
    }
    componentWillMount(){
        axios.get("http://www.localhost:3000")
        .then(data=>{
            console.log(data);
            this.setState({name:data.data.name})
        })
        .catch(err=>{
            this.setState({name:"Data not coming"})
            console.log(err);
        })
    }
    render(){
        return (
            <section id="Dashboard">
                <main>
        <h1>{this.state.name}</h1>
                </main>
            </section>
        )
    }
}
export default Dashboard;