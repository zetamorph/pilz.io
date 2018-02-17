import * as React from 'react';
import { config } from '../config';

interface PropTypes {}

type Mushroom = {
    id: string;
    proposedName?: string;
    imageUrls?: string[];
};

export class MushroomList extends React.Component {

    public state = {
        mushrooms: [],
    };

    constructor(props: PropTypes) {
        super(props);
    }

    async componentWillMount() {
        await this.fetchMushrooms();
    }

    async fetchMushrooms(): Promise<void> {
        const response = await fetch(`${config.apiUrl}/mushrooms`);
        const mushrooms = await response.json();
        console.log(mushrooms);
        this.setState({ mushrooms });
    }

    render() {
        return (
            this.state.mushrooms.map((mushroom: Mushroom) => {
                return <p key={mushroom.id}>{mushroom.proposedName}</p>;
            })
        );
    }

}