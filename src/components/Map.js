import React, { Component } from 'react';
import MAPBOXGL, { Marker } from 'react-map-gl';

const mapStyle = "mapbox://styles/maxcwolf/cjf3g7e8o0cyo2sputkj2u4wu";
MAPBOXGL.accessToken = "pk.eyJ1IjoibWF4Y3dvbGYiLCJhIjoiY2pmMnZsam5mMGxtcTJ4bXF5bm13YThsOSJ9.OOXW_UllKXamqkAcYrTVMw"


class Map extends Component {

    state = {
        viewport: {
            latitude: 36.20317184193212,
            longitude: -86.7017887571744,
            width: 1240,
            height: 300,
            startDragLngLat: null,
            isDragging: null,
            zoom: 8
        }
    };
    

    render() {
        return (

            <MAPBOXGL
                mapboxApiAccessToken={MAPBOXGL.accessToken}
                mapStyle={mapStyle}
                containerStyle={{ width: '100vw', height: '100vh' }}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
            >
                <Marker latitude={36.20317184193212} longitude={-86.7017887571744}>
                    <div>You are here</div>
                </Marker>
            </MAPBOXGL>

        );
    }
}

export default Map;