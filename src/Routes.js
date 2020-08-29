import React, { Suspense } from "react";
import { Switch, Route } from "react-router";
const Dashboard = React.lazy(() => import("./Containers/Dashboard/dashboard"));
const PurchaseOrder = React.lazy(()=>import("./Containers/PurchaseOrder/PurchaseOrder"))
export default class Router extends React.Component {
    state = {

    }
    render() {
        return (
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    
                    <Route path="/purchase" component={PurchaseOrder} />
                    <Route path="/work" component={Dashboard} />
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