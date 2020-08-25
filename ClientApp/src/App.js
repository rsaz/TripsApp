import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Trip/Home/Home";

import "./custom.scss";
import Trips from "./components/Trip/Trips";
import { Create } from "./components/Trip/Create";
import { Update } from "./components/Trip/Update";
import { Delete } from "./components/Trip/Delete";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/Create" component={Create} />
                <Route path="/Trips" component={Trips} />
                <Route path="/Update/:id" component={Update} />
                <Route path="/Delete/:id" component={Delete} />
            </Layout>
        );
    }
}
