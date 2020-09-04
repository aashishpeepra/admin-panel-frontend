import React from "react";
import "./Tableui.css";
import Button from "../../Button/Button";
export default (props)=>{
    console.log(props)
    return (
        <table className="tableui">
            <thead>
                <tr>
                    {Object.keys(props.data[0]).map(each=><th>{props.data[0][each].name}</th>)}
                 
                </tr>
            </thead>
            <tbody>
                    {
                        props.data.map(each=>{
                            let result=[];
                            let answer=[];
                            let keys=Object.keys(each);
                            keys.forEach(key=>{
                                result=[];
                                if(each[key].multiple)
                                {
                                each[key].value.forEach(item=>result.push(<div className="td-inner">{item}</div>));
                                answer.push(<td>{result}</td>)
                                }
                                else if(key=="action")
                                {
                                    each[key].value.forEach(item=>result.push(item))
                                    answer.push(<td>{result}</td>)
                                }
                                else
                                {
                                    answer.push(<td>{each[key].value}</td>)
                                }
                            })
                        return Array.from(Array(5)).map(()=><tr>{answer}</tr>)

                        })
                       
                       
                    }
                    
         
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    {Array.from(Array(parseInt(props.space))).map(elem=><th></th>)}
                    <th>2</th>
                    <th>1000 ft</th>
                    <th>&#x20B9;2270.0</th>
                    <th>Rs. 5000</th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    )
}