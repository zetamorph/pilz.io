import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import {
    NewMushroom,
    MushroomListWithState as MushroomList,
} from '../mushroom';

const { Content } = Layout;

export class MainContent extends React.Component {
    render() {
        return (
            <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                <Route exact={true} path="/mushrooms" component={MushroomList} />
                <Route exact={true} path="/" component={NewMushroom} />
            </Content>
        );
    }
}
