const React = require('react');
const Def = require("../default");

function new_form () {
    return(
        <Def>
            <main>
                <h1>Add New Places</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className ="form-control" id="name" name="name" required/>
                    </div>
                    <div className="form-group">
                        <label hmtlFor="pic">Place Picture</label>
                        <input className ="form-control" type="url" id="pic" name="pic"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Cuisine</label>
                        <input className ="form-control" id="cuisines" name="cuisines" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">City</label>
                        <input className ="form-control" id="city" name="city"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">State</label>
                        <input className ="form-control" id="state" name="state"/>
                    </div>
                    <input className="btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
            <div>
            <a href= "/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                    <p>Imports from /views / places / indexjsx. </p>
            </div>
        </Def>
    )
};

module.exports = new_form;
