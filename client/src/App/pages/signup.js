import React, { Component } from 'react';



class Signup extends Component {
    render() {
        return (
            <div className="container">
                <form action="/signup" method="post">
        <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email"></input>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password"></input>
        </div>

        <button type="submit" className="btn btn-warning btn-lg">Signup</button>
    </form>

            </div>
        )
    }
}

export default Signup;