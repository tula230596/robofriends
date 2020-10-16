import React, {Component} from 'react';
import CardList from '../Components/CardList.js';
// import {robots} from './robots.js';
import SearchBox from'../Components/searchBox.js';
import './App.css';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary from '../Components/ErrorBoundary.js';


class App extends Component{
	constructor(){
		super()
		// this is what can be changed, lives in App parent
		this.state={
			robots: [],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState({robots:users}));
	}



	// whenever u make ur own function, use arrow syntax
	onSearchChange=(event)=>{
	this.setState({searchfield: event.target.value})	
	
	}

	render(){

		const filterRobot=this.state.robots.filter(robot=>{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if(this.state.robots.length===0){
			return<h1>Loading</h1>
		}else{

		return(
		<div className='tc'>
		<h1 className='f1 lh-title dark-green'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange} />

		<Scroll>
			<ErrorBoundary>
				<CardList robots={filterRobot}/>
			</ErrorBoundary>	
		</Scroll>

		</div>

		);
		}
	}
	
}

export default App;