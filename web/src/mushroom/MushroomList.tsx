import * as React from 'react';
import { connect } from 'react-redux';
import { fetchMushrooms } from '../redux/modules/mushroom';

import { Mushroom } from '../types';

class MushroomList extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMushrooms();
    }

    render() {
        return (
            this.props.mushrooms ?
            this.props.mushrooms.map((mushroom: Mushroom) => {
                return <p key={mushroom.id}>{mushroom.proposedName}</p>;
            })
            : <p>keine Pilze</p>
        );
    }
}

const mapStateToProps = state => ({ mushrooms: state.mushrooms });

const mapDispatchToProps = dispatch => {
    return {
        fetchMushrooms: () => dispatch(fetchMushrooms()),
    };
};

export const MushroomListWithState = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MushroomList);