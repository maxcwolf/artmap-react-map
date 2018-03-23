import React, { Component } from 'react';
import MAPBOXGL, { Marker } from 'react-map-gl';
import axios from 'axios';


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
    
    getPosts = () => {

        console.log("FETCHING POSTS")
        return axios({
            "url": `http://localhost:5000/api/posts`,
            "method": "GET",
            'Accepts': 'application/json'
        }).then(data => {
            data.map((obj, index) => {
                console.log(obj)
                return (
                    <Marker key={`${obj.postId}`} latitude={`${obj.lat}`} longiture={`${obj.long}`}>
                        <img src={`${obj.photoURI}` }/>
                        <p>{`${obj.postId}`}</p>
                    </Marker>
                )
            })
        })
    }

    componentWillMount() {
        this.getPosts
    }

    render() {
        return (

            <MAPBOXGL
                mapboxApiAccessToken={MAPBOXGL.accessToken}
                mapStyle={mapStyle}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
            >
               {this.getPosts}
            </MAPBOXGL>

        );
    }
}

export default Map;