const React = require('react');
const Def = require('./default');

function error404 () {
    return (
        <Def>
            <main>
                <h1>Error 404, page not found!</h1>
                <p>This page imports from /views /error404jsx. Uses the html from the default.jsx file</p>
                <div>
                    <img src= "https://i.pinimg.com/550x/17/19/01/1719014e68b5a4539b2f3ad17002dfd4.jpg" alt="error 404 pic" />
                </div>
            </main>
        </Def>
    )
};

module.exports = error404;