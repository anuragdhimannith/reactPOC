import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
//import from '../components/mapGoogle.css';
Geocode.setApiKey("AIzaSyAFcWf0AzhwOmpTSrJiiPCLl9za3EUn9c0");
Geocode.enableDebug();

export default class SearchBar extends Component {
    // onSelect={({ description }) => (
    //     this.setState({ address: description });
    //   )}

    inputHandler = (id, description) => {
        console.log("The discription is in handler", description)
        console.log("The discription is in handler", id)


    }
    render() {
        return (
            <div>
                <span>
                    <GooglePlacesAutocomplete inputStyle={{
                        width: "65%",
                        border: "3px solid #00B4CC",
                        padding: "5px",
                        height: "20px",
                        "border-radius": "5px 5px 5px 5px",
                        outline: "none",
                        position: "relative",
                        zIndex: "10 !important"
                    }}
                        placeholder='Search for a place'

                    />
                </span>
            </div>




        )
    }
}