import * as React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';

export class MushroomDetail extends React.Component<any, any> {
    render() {
        const mushroomId = this.props.match.params.id;
        const mushroom = this.props.mushrooms[mushroomId];
        return ( 
            mushroom ?
            (
                <div>
                    <h1>{mushroom.proposedName}</h1>
                    <Carousel>
                        {mushroom.imageUrls.map(url => (<img key={url} src={url}/>))}
                    </Carousel>
                </div>
            ) :
            null
        );
    }
}

const mapStateToProps = state => ({ mushrooms: state.mushrooms });

export const MushroomDetailWithState = connect(
    mapStateToProps,
    undefined,
)(MushroomDetail);