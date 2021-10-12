import React from "react";
import { Redirect, Route, Switch } from "react-router";
import memoryUtils from "../../utils/memoryUtils";
import { Layout } from "antd";
import LeftNav from "../../components/left-nav/LeftNav";
import Header from "../../components/header/Header";
import Home from "../home/Home";
import User from "../user/User";
import Role from "../role/Role";
import Product from "../product/Product";
import Category from "../category/Category";
import Bar from "../charts/Bar";
import Line from "../charts/Line";
import Pie from "../charts/Pie";

const { Footer, Sider, Content } = Layout;

export default class Admin extends React.Component {
    render() {
        const user = memoryUtils.user;
        if (!user || !user.username) {
            return <Redirect to="/login"></Redirect>;
        }
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{backgroundColor:'white'}}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/product' component={Product} />
                            <Route path='/role' component={Role} />
                            <Route path='/user' component={User} />
                            <Route path='/charts/bar' component={Bar} />
                            <Route path='/charts/line' component={Line} />
                            <Route path='/charts/pie' component={Pie} />
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center', color:'#ccc'}}>这是一个标记</Footer>
                </Layout>
            </Layout>
        );
    }
}
