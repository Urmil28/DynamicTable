import React from 'react';
import Filter from './Filter.jsx'
import './index.css';
import trash from './delete.svg';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { values: [] };
    this.index = 0;
    this.condition = 'AND';
  }
  
  makequery(val,j,id){
    console.log(this.state);
  }
  
  createUI(){
     return this.state.values.map((el, i) => 
         <div key={i}>
         {i == 1 &&
        <select class="and" onChange={this.handleChange.bind(this,0)}>
        <option value="AND">AND</option>
        <option value="OR">OR</option>       
      </select>}
      {i > 1 &&
      <div>{this.condition}</div>
  }
      <Filter id={i} addvalue={this.makequery.bind(this,0)} style={{display: 'inline'}}/>
         <img src={trash} style={{display: 'inline'}} class="trash" alt="React Logo" width="20" height="20" onClick={this.removeClick.bind(this, i)}/>         
         </div>          
     )
  }

  handleChange(i, event){
    if (i = 1)
      this.condition = event.target.value; 
     let values = [...this.state.values];
     values[i] = event.target.value;
     this.setState({ values });
  }

  addClick(){
    this.setState(prevState => ({ values: [...prevState.values, '']}))
  }
  
  removeClick(i){
    let values = [...this.state.values];
    values.splice(i,1);
    this.setState({ values });
 }
  
  handleSubmit(event) {
    event.preventDefault();
  }
  

  render() {
        return (
        
        <form class="form" onChange={this.handleSubmit}>
          <div>FILTERS</div>
		<fieldset>
		
		{this.createUI()}        
	          <div onClick={this.addClick.bind(this)}>
            + Add filters</div>	
		</fieldset>
      </form>
        );
      }
      }

export default Form;