import React, { useState } from 'react';
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: 'name',value2: 'Contains',value3:''};
  }
  
  handleChangeElem(j,event){
//Get value changed
if (j==0)
	this.setState({value1: event.target.value}); 
else if (j==1)
	this.setState({value2: event.target.value}); 
else
  this.setState({value3: event.target.value}); 

this.props.addvalue(event.target.value,j,this.props.id);
}
  
render() {
    return (
    <div class="filter"> 
    
        <label>
          Where
          <select class="element" onChange={this.handleChangeElem.bind(this,0)}>
            <option value="name">Screen Name</option>
            <option value="followers">Followers Count</option>
            <option value="location">Location</option>
            <option value="friend">Friend Count</option>
            <option value="verified">Verified</option>            
          </select>
          <select class="element" onChange={this.handleChangeElem.bind(this,1)}>
            <option value="CONTAINS">CONTAINS</option>
            <option value="GTE">{">="}</option>
            <option value="LTE">{"<="}</option>
            <option value="EQ">Equals</option>
          </select>
          
          <input type="text" class="element" onChange={this.handleChangeElem.bind(this,2)}>  
          </input>
          
        </label>
        </div>
    );
  }
}
export default Filter;
