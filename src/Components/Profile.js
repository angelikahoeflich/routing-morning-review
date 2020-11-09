import React, {Component} from 'react';
import Axios from 'axios';


class Profile extends Component{
  constructor(){
    super()

    this.state= {
      characterDetails: {}
    }
  }

//What we pass in as paramters to this route we can access of of this.props.match.params

//this.props.match, this.props.history, this.props.location

  componentDidMount(){
    const {first, last} = this.props.match.params;
    Axios.get(`/api/${first}/${last}`)  
    .then(res => this.setState({characterDetails: res.data}))
    .catch(err => console.log(err))


  }
  render(){

    const{firstName, middleName, lastName, lastName, bestQuote, image} = this.state.characterDetails;
    return(
      <div className='profile'>
        <img src="{image}" alt="`${firstName} ${lastName}"/>
    <h2>{`{$firstName} ${middleName} ${lastName}`}</h2>
      </div>
    )
  }
}

export default Profile