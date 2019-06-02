import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
Geocode.setApiKey("AIzaSyAFcWf0AzhwOmpTSrJiiPCLl9za3EUn9c0");
Geocode.enableDebug();

class Map extends Component {


    render() {
        console.log("The props I am getting is-----", this.props.lat)
        console.log("The props I am getting is-----", this.props.lng)
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap
                        google={this.props.google}
                        defaultZoom={this.props.zoom}
                        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
                    >

                        {/*Marker*/}
                        <Marker google={this.props.google}
                            name={'Dolores park'}
                            draggable={true}
                            onDragEnd={this.onMarkerDragEnd}
                            position={{ lat: this.props.lat, lng: this.props.lng }}
                        />
                        <Marker />
                    </GoogleMap>
                )
            )
        );




        return (
            <div style={{
                width: "65.7%",
                height: "450px",
                border: "3px solid #00B4CC",
                padding: "1px",
                "border-radius": "5px 5px 5px 5px",
                outline: "none",
                position: "relative",

            }}
            >
                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.26key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.props.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
            </div>

        )
    }
}
export default Map