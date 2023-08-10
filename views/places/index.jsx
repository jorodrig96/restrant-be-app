const React = require('react');
const Def = require('../default');

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className= "col-sm-6">
                <h2> {place.name} </h2>
                <p className = "text-center">
                    {place.cuisine}
                </p>
                <img src = {place.pic} alt= {place.name}></img>
                <p className = "text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <p>This imports from /views / places / index.jsx. Uses html from /defaul.jsx.</p>
                <div className= "row">
                {placesFormatted}
                </div>
            </main>
            <a href= "/places">
                    <button className= "btn-primary">Places Page. Imports from /views / places / indexjsx. </button>
                </a>
        </Def>
    );
};

module.exports = index;