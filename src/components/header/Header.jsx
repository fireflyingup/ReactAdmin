import React from "react";
import "./index.less";
import { formateDate } from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils"
import { withRouter } from "react-router";
import menuList from "../../config/menuConfig";
import { Modal } from "antd";
import LinkButton from "../link-button";


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            time: formateDate(new Date()),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                time: formateDate(new Date()),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    getTitle = () => {
        const path = this.props.location.pathname;
        let title = "";
        menuList.forEach((item) => {
            if (item.key === path) {
                title = item.title;
            } else if (item.children) {
                const cItem = item.children.find((cItem) => cItem.key === path);
                if (cItem) {
                    title = cItem.title;
                }
            }
        });
        return title;
    };


    logout = () => {
        Modal.confirm({
            content: '确定退出吗？',
            onOk : () => {
                console.log("ok")
                memoryUtils.user = ''
                storageUtils.removeUser()
                this.props.history.replace("/login")
            },
            onCancel() {
                console.log("cancle")
            }
        })
    };



    render() {
        const username = memoryUtils.user.username;
        const title = this.getTitle();
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{username}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        <span>{title}</span>
                    </div>
                    <div className="header-bottom-right">
                        <span>{this.state.time}</span>
                        <img
                            src="http://api.map.baidu.com/images/weather/day/qing.png"
                            alt="weather"
                        />
                        <span>晴</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
