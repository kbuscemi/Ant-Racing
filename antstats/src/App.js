import React, { Component } from 'react';
import './App.css';
import Ant from './Ant/Ant'
import './generateWin.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      ants: []
      // status: 'Not yet run'
    }
  }

  componentDidMount() {

    let URL = 'https://antserver-blocjgjbpw.now.sh/graphql?query=%23%20Welcome%20to%20GraphiQL%0A%23%0A%23%20GraphiQL%20is%20an%20in-browser%20tool%20for%20writing%2C%20validating%2C%20and%0A%23%20testing%20GraphQL%20queries.%0A%23%0A%23%20Type%20queries%20into%20this%20side%20of%20the%20screen%2C%20and%20you%20will%20see%20intelligent%0A%23%20typeaheads%20aware%20of%20the%20current%20GraphQL%20type%20schema%20and%20live%20syntax%20and%0A%23%20validation%20errors%20highlighted%20within%20the%20text.%0A%23%0A%23%20GraphQL%20queries%20typically%20start%20with%20a%20%22%7B%22%20character.%20Lines%20that%20starts%0A%23%20with%20a%20%23%20are%20ignored.%0A%23%0A%23%20An%20example%20GraphQL%20query%20might%20look%20like%3A%0A%23%0A%23%20%20%20%20%20%7B%0A%23%20%20%20%20%20%20%20field(arg%3A%20%22value%22)%20%7B%0A%23%20%20%20%20%20%20%20%20%20subField%0A%23%20%20%20%20%20%20%20%7D%0A%23%20%20%20%20%20%7D%0A%23%0A%23%20Keyboard%20shortcuts%3A%0A%23%0A%23%20%20%20%20%20%20%20Run%20Query%3A%20%20Ctrl-Enter%20(or%20press%20the%20play%20button%20above)%0A%23%0A%23%20%20%20Auto%20Complete%3A%20%20Ctrl-Space%20(or%20just%20start%20typing)%0A%23%0A%0A%7B%0A%20%20ants%20%7B%0A%20%20%20%20name%0A%20%20%20%20color%0A%20%20%20%20weight%0A%20%20%20%20length%0A%20%20%7D%0A%7D%0A'

    fetch(URL)
    .then(res => res.json())
    .then(res => {
      //obtain data from graphQL API - push directly into state
      this.setState(res.data)

      let antArr = this.state.ants;

      //iterate through ant state arr - add all data to each ant
      for(var i = 0; i < antArr.length; i++) {
        console.log(antArr)
      }
    })
    .catch(err => console.log(err))
  }


  
  calculate(){
    let antArr = this.state.ants;
    
    if (antArr > 0) {
      //iterate through arr to calculate odds
      for(var i = 0; i < antArr.length; i++) {
        //provide callback function for likelyhood of winning/response
      }
    }
  }
  
  // calling generateAntWinLikelihoodCalculator method which will calculate likelihood of winning
  generateAntWinLikelihoodCalculator() {
  }
  


  render() {
    // set up render method to show ants
    
    let renderAnts = () => {
       //setting showAntArr to state
        let showAntArr = this.state.ants;

      
        if(showAntArr){
          //mapping through ant object within Ant componenet and returning ant info 
          return showAntArr.map((ants) => <Ant key={ants.name} {...ants}/> )
        }

      }
      
      return (
        <div className='App'>
          <h1>Ant Race</h1>
            <div>
              <button>Run</button>
            </div>
          {renderAnts()}
      </div>
    );
  }
}

export default App;
