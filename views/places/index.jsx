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
                <h1>Places</h1>
                <p>This imports from /views / places / index.jsx. Uses html from /defaul.jsx.</p>
                {placesFormatted}
            </main>
        </Def>
    );
};

module.exports = index;