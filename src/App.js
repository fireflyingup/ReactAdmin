import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";
/**
 * 应用的根组件
 */

const user = storageUtils.getUser();
memoryUtils.user = user;

class App extends React.Component {
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;
