import React, {Component} from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js'
import { setSearchField, requestRobots } from '../action'

// const state = {
//     robots: robots,
//     searchfield: ''
// }
const mapStateToProps = state =>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         // searchfield: ''
    //     }
    // }
    //fetch API
    componentDidMount(){
        this.props.onRequestRobots();
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(user => this.setState({robots: user}))
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // }

    render(){
        // const {robots, searchfield}=this.state;
        // const { robots } = this.state;
        const{ searchField, onSearchChange, robots, isPending } = this.props;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //if API takes a long time to load
            return isPending ?
            <h1>LOADING</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            );
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);