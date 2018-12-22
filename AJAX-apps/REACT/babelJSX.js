const {render} = ReactDOM;

class App extends React.Component {
	constructor(){
  	super()
    this.state = { data: null }
  }
	componentDidMount(){
  	let r = new XMLHttpRequest();
    r.open("GET", "http://www.filltext.com?rows=10&f={firstName}", true);
    r.onreadystatechange = () => {
      if (r.readyState != 4 || r.status != 200) return;
      var data = JSON.parse(r.responseText);
      this.setState({data})
      
    };
    r.send();
  }
	render(){
  	let component = null;
    if(!this.state.data) {
    	component = <h1>Loading...</h1>	
    }
    else {
    	component = <ul>{this.state.data.map((d, i) => <li key={i}>{d.f}</li>)}</ul>
    }
  	return component
  }
}

render(<App />, document.getElementById('app'))