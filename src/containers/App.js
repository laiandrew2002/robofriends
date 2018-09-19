import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js'

// const state = {
//     robots: robots,
//     searchfield: ''
// }


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    //fetch API
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => console.log(response.json()))
        .then(response => response.json())

        .then(user => this.setState({robots: user}))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        //const {robots, searchfield}=this.state;
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        //if API takes a long time to load
        if(this.state.robots.length===0){
            return <h1>LOADING</h1>
        }else{

            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;