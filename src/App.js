import React from "react"
import { Button, message } from 'antd'

/**
 * 应用的根组件
 */



class App extends React.Component {

    handlerClick = ()=> {
        message.success('This is a success message');
    }

    render () {
        return (
            <div>App2
                <Button type="primary" onClick = {this.handlerClick}>aaa</Button>
            </div>
        )
    }
}

export default App;