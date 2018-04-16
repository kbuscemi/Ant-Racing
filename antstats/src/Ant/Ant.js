import React, { Component } from 'react';
import './Ant.css'

class Ant extends Component {
    render() {
        //ES6 destructuring 'props' object into its individual const variables
        const {name, color, length, weight, status, chanceOfWinning} = this.props

        //conditional rendering
        let updateStatus = () => {
            if(!status) {
                return 'Not calculated yet'
            } else {
                return 'Calculation Status:' + status
            }
        }

        let updateChanceOfWinning = () => {
            if (chanceOfWinning === 0) {
                return ' '
            } else {
                //rounding percentage of winning 2 decimal points
                return 'Chance of Winning:' + (Math.round(chanceOfWinning * 100)) + '%'
            }

        }


        let showInfo = () => {
            return (
                <ul>
                    <h4>{name}</h4>
                    <li><img src="https://i.imgur.com/z0yl3jW.jpg" alt='ant' /></li>
                    <li>Color:&nbsp;{color}</li>
                    <li>Length:&nbsp;{length}</li>
                    <li>Weight:&nbsp;{weight}</li>
                    <li>Calculation Status:&nbsp;{updateStatus()}</li>
                    <li>{updateChanceOfWinning()}</li>
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