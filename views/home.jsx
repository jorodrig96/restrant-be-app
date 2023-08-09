const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>Home Page</h1>
                    <p>This page imports from /views/home.jsx. Uses the html from the default.jsx file</p>
                <div>
                    <img src= "/images/heartburger.jpg" alt="heart burgers with beer" />
                <div>
                    Photo by <a href= "https://www.istockphoto.com/portfolio/Rimma_Bondarenko?mediatype=photography"> Rimma Bondarenko</a> on <a href ="https://www.istockphoto.com/"> Istock Photo</a>
                </div>
                </div>
                    <a href= "/places">
                        <button className= "btn-primary">Places Page. Imports from /views / places / indexjsx. </button>
                    </a>
            </main>
        </Def>
    );
};

module.exports = home;

