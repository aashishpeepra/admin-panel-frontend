import React from "react";
import "./Tableui.css";
import Button from "../../Button/Button";
export default (props)=>{
    return (
        <table className="tableui">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Date</th>
                    <th>Product id</th>
                    <th>Customer name</th>
                    <th>Customer POC</th>
                    <th>POC no</th>
                    <th>Product</th>
                    <th>HSN</th>
                    <th>No of slabs</th>
                    <th>UOM</th>
                    <th>MRP</th>
                    <th>AMT</th>
                    <th>Pay mode</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                     <td>1.</td>
                    <td>12/7/20</td>
                    <td>154556</td>
                    <td>Elayamani</td>
                    <td>123467152</td>
                    <td>6725301925</td>
                    <td>
                        <div className="td-inner">
                            Tiles
                        </div>
                        <div className="td-inner">
                            Granites
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            #27
                        </div>
                        <div className="td-inner">
                            #45
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            2
                        </div>
                        <div className="td-inner">
                            4
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            1000 ft
                        </div>
                        <div className="td-inner">
                            1000 ft
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            &#x20B9;2700.0
                        </div>
                        <div className="td-inner">
                            &#x20B9;3400.0
                        </div>
                    </td>
                    <td>
                        Rs. 5000
                    </td>
                    <td>
                        Online
                    </td>
                    <td>
                        <div className="td-inner">
                            <Button text="View PDF" color="#FF9F5B" small={true} func={()=>alert("Clicked")}/>
                        </div>
                        <div className="td-inner">
                        <Button text="Edit" small={true} color="#FF9F5B" func={()=>alert("Clicked")}/>
                        </div>
                    </td>
                </tr>
                <tr>
                     <td>1.</td>
                    <td>12/7/20</td>
                    <td>154556</td>
                    <td>Elayamani</td>
                    <td>123467152</td>
                    <td>6725301925</td>
                    <td>
                        <div className="td-inner">
                            Tiles
                        </div>
                        <div className="td-inner">
                            Granites
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            #27
                        </div>
                        <div className="td-inner">
                            #45
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            2
                        </div>
                        <div className="td-inner">
                            4
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            1000 ft
                        </div>
                        <div className="td-inner">
                            1000 ft
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            &#x20B9;2700.0
                        </div>
                        <div className="td-inner">
                            &#x20B9;3400.0
                        </div>
                    </td>
                    <td>
                        Rs. 5000
                    </td>
                    <td>
                        Online
                    </td>
                    <td>
                        <div className="td-inner">
                            <Button text="View PDF" color="#FF9F5B" small={true} func={()=>alert("Clicked")}/>
                        </div>
                        <div className="td-inner">
                        <Button text="Edit" small={true} color="#FF9F5B" func={()=>alert("Clicked")}/>
                        </div>
                    </td>
                </tr>
                <tr>
                     <td>1.</td>
                    <td>12/7/20</td>
                    <td>154556</td>
                    <td>Elayamani</td>
                    <td>123467152</td>
                    <td>6725301925</td>
                    <td>
                        <div className="td-inner">
                            Tiles
                        </div>
                        <div className="td-inner">
                            Granites
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            #27
                        </div>
                        <div className="td-inner">
                            #45
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            2
                        </div>
                        <div className="td-inner">
                            4
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            1000 ft
                        </div>
                        <div className="td-inner">
                            1000 ft
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            &#x20B9;2700.0
                        </div>
                        <div className="td-inner">
                            &#x20B9;3400.0
                        </div>
                    </td>
                    <td>
                        Rs. 5000
                    </td>
                    <td>
                        Online
                    </td>
                    <td>
                        <div className="td-inner">
                            <Button text="View PDF" color="#FF9F5B" small={true} func={()=>alert("Clicked")}/>
                        </div>
                        <div className="td-inner">
                        <Button text="Edit" small={true} color="#FF9F5B" func={()=>alert("Clicked")}/>
                        </div>
                    </td>
                </tr>
                <tr>
                     <td>1.</td>
                    <td>12/7/20</td>
                    <td>154556</td>
                    <td>Elayamani</td>
                    <td>123467152</td>
                    <td>6725301925</td>
                    <td>
                        <div className="td-inner">
                            Tiles
                        </div>
                        <div className="td-inner">
                            Granites
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            #27
                        </div>
                        <div className="td-inner">
                            #45
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            2
                        </div>
                        <div className="td-inner">
                            4
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            1000 ft
                        </div>
                        <div className="td-inner">
                            1000 ft
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            &#x20B9;2700.0
                        </div>
                        <div className="td-inner">
                            &#x20B9;3400.0
                        </div>
                    </td>
                    <td>
                        Rs. 5000
                    </td>
                    <td>
                        Online
                    </td>
                    <td>
                        <div className="td-inner">
                            <Button text="View PDF" color="#FF9F5B" small={true} func={()=>alert("Clicked")}/>
                        </div>
                        <div className="td-inner">
                        <Button text="Edit" small={true} color="#FF9F5B" func={()=>alert("Clicked")}/>
                        </div>
                    </td>
                </tr>
                <tr>
                     <td>1.</td>
                    <td>12/7/20</td>
                    <td>154556</td>
                    <td>Elayamani</td>
                    <td>123467152</td>
                    <td>6725301925</td>
                    <td>
                        <div className="td-inner">
                            Tiles
                        </div>
                        <div className="td-inner">
                            Granites
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            #27
                        </div>
                        <div className="td-inner">
                            #45
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            2
                        </div>
                        <div className="td-inner">
                            4
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            1000 ft
                        </div>
                        <div className="td-inner">
                            1000 ft
                        </div>
                    </td>
                    <td>
                        <div className="td-inner">
                            &#x20B9;2700.0
                        </div>
                        <div className="td-inner">
                            &#x20B9;3400.0
                        </div>
                    </td>
                    <td>
                        Rs. 5000
                    </td>
                    <td>
                        Online
                    </td>
                    <td>
                        <div className="td-inner">
                            <Button text="View PDF" color="#FF9F5B" small={true} func={()=>alert("Clicked")}/>
                        </div>
                        <div className="td-inner">
                        <Button text="Edit" small={true} color="#FF9F5B" func={()=>alert("Clicked")}/>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
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