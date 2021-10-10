import React from "react"
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"
/**
 * 应用的根组件
 */



class App extends React.Component {


    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                </Switch>
            </BrowserRouter> 
        )
    }
}
 
export default App;