import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export class Header extends React.Component {
    render() {
        return (
            <Menu
                mode="horizontal"
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
        );
    }
}