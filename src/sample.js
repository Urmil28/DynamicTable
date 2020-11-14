class App extends React.Component {

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          {this.createUI()}        
          <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
