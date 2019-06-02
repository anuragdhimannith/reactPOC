import React, { Component } from 'react';
export default class SearchHistory extends Component {
    render() {
        console.log("The props I am getting is", this.props.places)
        return (
            <div style={{
                float: "right",


            }
            }>
                <h1
                    style={{
                        backgroundColor: "antiquewhite",
                        width: "432px",
                        height: "33px",
                        marginTop: "1px",
                        border: "3px solid #00B4CC",
                        padding: "1px",
                        "border-radius": "5px 5px 5px 5px",
                        outline: "none",
                        position: "relative",
                        textAlign: "center"
                    }}> Search History </h1>

                {this.props.places.map(place =>
                    <h2 style={{

                        width: "431px",
                        height: "100",
                        border: "3px solid #00B4CC",
                        padding: "1px",
                        "border-radius": "5px 5px 5px 5px",
                        outline: "none",
                        position: "relative",
                        textAlign: "center",
                        marginTop: "-17px"

                    }}>{place} </h2>
                )}




            </div >




        )
    }
}