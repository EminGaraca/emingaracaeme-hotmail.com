import React, { Component, Fragment } from 'react';


export default class ListItem extends Component {
    render() {
        return (
            <Fragment>
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <h6>
                        {
                            <div><h6>{this.props.title}</h6></div>
                        }
                    </h6>
                    <div >
                    <button type="submit" className="btn mr-3" onClick={this.props.editOne}>Edit</button>
                    <button type="submit" className="btn ml-3 red" onClick={this.props.deleteOne}>Delete</button>

                    </div>
                </li>
            </Fragment>
        )
    }
}

