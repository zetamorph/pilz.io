import * as React from 'react';
import { connect } from 'react-redux';
import { mushroomActions } from '../redux/modules/mushroom';
import { Link } from 'react-router-dom';
import { Mushroom } from 'types';
import { State } from '../types/State';

const { fetchMushrooms } = mushroomActions;

class MushroomList extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMushrooms();
    }

    render() {
        return Object.values(this.props.mushrooms as { [id: string]: Mushroom })
        .map((mushroom) => {
            return (
                <Link key={mushroom.id} to={`/mushroom/${mushroom.id}`}>
                    <p key={mushroom.id}>{mushroom.proposedName}</p>
                </Link>
            );
        });
    }
}

const mapStateToProps = (state: State) => ({ mushrooms: state.mushrooms });

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMushrooms: () => dispatch(fetchMushrooms.started(undefined)),
    };
};

export const MushroomListWithState = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MushroomList);