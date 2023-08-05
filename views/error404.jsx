const React = require('react');
const Def = require('./default');

function error404 () {
    return (
        <Def>
            <main>
                <h1>Error 404, page not found!</h1>
                <p>This page imports from /views /error404jsx. Uses the html from the default.jsx file</p>
            </main>
        </Def>
    )
};

module.exports = error404;