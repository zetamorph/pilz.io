import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export class Sidebar extends React.Component {
    render() {
        return (
            <Sider>
              <Menu
                mode="inline"
              >
                <Menu.Item key="home">
                    <Link to="/">
                    home
                    </Link>
                </Menu.Item>
                <Menu.Item key="mushrooms">
                    <Link to="/mushrooms">
                        Mushrooms
                    </Link>
                </Menu.Item>
              </Menu>
            </Sider>
        );
    }
}