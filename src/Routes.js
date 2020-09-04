import React, { Suspense } from "react";
import { Switch, Route } from "react-router";
import Existing from "./Containers/Inventory/Existing/Existing";
const Dashboard = React.lazy(() => import("./Containers/Dashboard/dashboard"));
const PurchaseOrder = React.lazy(()=>import("./Containers/PurchaseOrder/PurchaseOrder"));
const WorkOrder = React.lazy(()=>import("./Containers/WorkOrder/WorkOrder"));
const Procurement = React.lazy(()=>import("./Containers/Inventory/Procurement/Procurement"));
const Client = React.lazy(()=>import("./Containers/Inventory/Client/Client"));
const Msr= React.lazy(()=>import("./Containers/Inventory/MSR/Msr"));
const InventoryExisting = React.lazy(()=>import("./Containers/Inventory/Existing/Existing"));
const Bush = React.lazy(()=>import("./Containers/Machine/Bush/Bush"))
const Cnc = React.lazy(()=>import("./Containers/Machine/Cnc/Cnc"))
const Edge = React.lazy(()=>import("./Containers/Machine/Edge/Edge"))
const Polish = React.lazy(()=>import("./Containers/Machine/Polish/Polish"));
const Alert = React.lazy(()=>import("./Containers/Alert/Alert"));
export default class Router extends React.Component {
    state = {

    }
    render() {
        return (
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <Route path="/alerts" component={Alert}/>
                    <Route path="/machine/bush" component={Bush}/>
                    <Route path="/machine/cnc" component={Cnc}/>
                    <Route path="/machine/edge" component={Edge}/>
                    <Route path="/machine/polish" component={Polish}/>
                    <Route path="/inventory/msr" component={Msr}/>
                    <Route path="/inventory/client" component={Client}/>
                    <Route path="/inventory/existing" component={InventoryExisting}/>
                    <Route path="/inventory/procurement" component={Procurement}/>
                    <Route path="/purchase" component={PurchaseOrder} />
                    <Route path="/work" component={WorkOrder} />
                    <Route path="/inventory" component={Dashboard} />
                    <Route path="/machine" component={Dashboard} />
                    <Route path="/dispatch" component={Dashboard} />
                    <Route path="/alert" component={Dashboard} />
                    <Route path="/" component={Dashboard} />
                </Switch>
            </Suspense>

        )
    }
}