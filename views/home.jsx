const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>This page renders from /views /home.jsx . Uses the html from the default.jsx  </h1>
            </main>
        </Def>
    );
};

module.exports = home;

