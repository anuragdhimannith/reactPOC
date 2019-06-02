import React, { Component } from 'react';
import ReactDom from 'react-dom';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import SearchBar from './components/searchBar'
import GoogleMap from './components/googleMap'
import SearchHistory from './components/searchHistory'
//  12.974954, 77.634702


class Index extends Component {


    state = {
        places: ["USA Medical Center Drive, Mobile, AL, USA"]
    }

    inputHandler = (newDescription) => {
        const { places } = this.state;

        this.setState({
            places: [...this.state.places, newDescription]
        });
    }
    render() {

        console.log("This is the data", this.state.places)
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
                            this.inputHandler(description)
                        )}

                    />

                </div>
                <GoogleMap
                    google={this.props.google}
                    center={{ lat: 18.5204, lng: 73.8567 }}
                    height='450px'
                    zoom={15}
                />

            </div>



        </div>

        )
    }
}

ReactDom.render(<Index />, document.getElementById('root'));