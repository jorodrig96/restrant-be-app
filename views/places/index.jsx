const React = require('react');
const Def = require('../default');

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2> {place.name} </h2>
                <img src = {place.pic} alt= {place.name}></img>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <p>This imports from /views / places / index.jsx. Uses html from /defaul.jsx.</p>
                {placesFormatted}
            </main>
            <a href= "/places">
                    <button className= "btn-primary">Places Page. Imports from /views / places / indexjsx. </button>
                </a>
        </Def>
    );
};

module.exports = index;