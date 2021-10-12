import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from "@ant-design/icons";

const menuList = [
    {
        title: "首页",
        icon: <DesktopOutlined />,
        key: "/home",
    },
    {
        title: "商品",
        icon: <DesktopOutlined />,
        key: "sub1",
        children: [
            {
                title: "品类管理",
                icon: <DesktopOutlined />,
                key: "/category",
            },
            {
                title: "商品管理",
                icon: <DesktopOutlined />,
                key: "/product",
            },
        ],
    },
    {
        title: "用户管理",
        icon: <DesktopOutlined />,
        key: "/user",
    },
    {
        title: "权限管理",
        icon: <DesktopOutlined />,
        key: "/role",
    },
    {
        title: "图",
        icon: <DesktopOutlined />,
        key: "sub2",
        children: [
            {
                title: "柱状图",
                icon: <DesktopOutlined />,
                key: "/charts/bar",
            },
            {
                title: "线性图",
                icon: <DesktopOutlined />,
                key: "/charts/line",
            },
            {
                title: "饼状图",
                icon: <DesktopOutlined />,
                key: "/charts/pie",
            },
        ],
    },
];

export default menuList;
