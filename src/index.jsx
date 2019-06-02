import React, { Component } from 'react';
import ReactDom from 'react-dom';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Geocode from "react-geocode";
import GoogleMap from './components/googleMap'
import SearchHistory from './components/searchHistory'
Geocode.setApiKey("AIzaSyAFcWf0AzhwOmpTSrJiiPCLl9za3EUn9c0");
Geocode.enableDebug();




class Index extends Component {


    state = {
        places: [],
        marker: "",
        lat: 12.9749498,
        lng: 77.634703
    }


    inputHandler = (newDescription) => {
        const { places } = this.state;
        this.setState({
            places: [...this.state.places, newDescription],
            marker: newDescription
        });
    }

    onSubmit = (newDescription) => {
        Geocode.fromAddress(newDescription).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.setState({
                    lat: lat,
                    lng: lng
                })
            },
            error => {
                console.error(error);
            }
        );
    }

    render() {

        console.log("This state in the render function is", this.state)
        return (<div>

            <SearchHistory
                places={this.state.places}
            />
            <div>
                <div>

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
                        onSelect={({ description }) => (
                            this.inputHandler(description),
                            this.onSubmit(description)
                        )}

                    />

                </div>
                <GoogleMap
                    google={this.props.google}
                    center={{ lat: this.state.lat, lng: this.state.lng }}
                    height='450px'
                    zoom={15}
                    lat={this.state.lat}
                    lng={this.state.lng}
                />

            </div>



        </div>

        )
    }
}

ReactDom.render(<Index />, document.getElementById('root'));