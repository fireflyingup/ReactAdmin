import React from "react";
import "./index.less";
import logo from "../../assets/images/logo.png";
import { Link ,withRouter} from "react-router-dom";
import { Menu } from "antd";
import menuList from "../../config/menuConfig";

const { SubMenu } = Menu;

class LeftNav extends React.Component {

    getMenuNodes = (menuList) => {
        const path = this.props.location.pathname;
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            } else {
                const cItem = item.children.find(cItem => cItem.key === path);
                if (cItem) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render() {

        const path = this.props.location.pathname;
        const openKey = this.openKey;

        return (
            <div className="left-nav">
                <Link to="/home" className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>硅谷后台</h1>
                </Link>

                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {/* <Menu.Item key="home" icon={<PieChartOutlined />}>
                        <Link to="/home">首页</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="category" icon={<PieChartOutlined />}>
                            <Link to="/category">品类管理</Link>
                        </Menu.Item>
                        <Menu.Item key="product" icon={<PieChartOutlined />}>
                            <Link to="/product">商品管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user" icon={<DesktopOutlined />}>
                        <Link to="/user">用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="role" icon={<ContainerOutlined />}>
                        <Link to="/role">权限管理</Link>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<MailOutlined />} title="图">
                        <Menu.Item key="charts/bar" icon={<PieChartOutlined />}>
                            <Link to="/charts/bar">柱状图</Link>
                        </Menu.Item>
                        <Menu.Item key="charts/line" icon={<PieChartOutlined />}>
                            <Link to="/charts/line">线形图</Link>
                        </Menu.Item>
                        <Menu.Item key="charts/pie" icon={<PieChartOutlined />}>
                            <Link to="/charts/pie">饼状图</Link>
                        </Menu.Item>
                    </SubMenu> */}
                    {
                        // this.getMenuNodes(menuList)
                        this.menuNodes
                    }
                </Menu>
            </div>
        );
    }
}

/**
 * withRoute高阶组件
 * 包装非路由组件，返回一个新的组件
 * 新的组件向非路由组件传递三个属性：history、location、match
 */
export default withRouter(LeftNav)
