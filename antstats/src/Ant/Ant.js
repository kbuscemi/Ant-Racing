import React, { Component } from 'react';
import './Ant.css'

class Ant extends Component {
    render() {
        var {name, color, length, weight} = this.props


        var showInfo = () => {
            return (
                <ul>
                    <li><h5>{name}</h5></li>
                    <li>Color:&nbsp;{color}</li>
                    <li>Length:&nbsp;{length}</li>
                    <li>Weight:&nbsp;{weight}</li>
                </ul>
            )
        }

    return (
        <div className='box'>
            {showInfo()}
        </div>
    )
    }
}

export default Ant;