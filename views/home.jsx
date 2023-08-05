const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>Home page </h1>
                <p>This page imports from /views/home.jsx. Uses the html from the default.jsx file</p>
            </main>
        </Def>
    );
};

module.exports = home;

