import React from "react";
import AddItem from "./toDoItem.js";
import events from "../events.js";

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

class MainDiv extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			toDoItems: [...data]
		};
	}
 	
	render () {
		return (
			<main>
				<div id="mainDiv">
					<p id="whatToDo">What to do ?</p>
					<input type="text" 
						   value={this.state.value} 
						   onChange={events.handleChange.bind(this)}
						   placeholder="Do" 
						   onKeyDown={events.enterHandlerDown.bind(this)} 
						   onKeyUp={events.enterHandlerUp.bind(this)}
						   ></input>
					<button type="button" 
							onMouseDown={events.addToDo.bind(this)} 
							onMouseUp={events.onMouseUpHandler.bind(this)} 
							onMouseOver={events.onMouseOverHandler.bind(this)} 
							onMouseOut={events.onMouseOutHandler.bind(this)}>Do</button>
					<button type="button"
							onClick = {events.clearAllItems.bind(this)} 
							onMouseOver={events.onMouseOverHandler.bind(this)} 
					 		onMouseOut={events.onMouseOutHandler.bind(this)}>Clear All</button>
					<AddItem toDoItems={this.state.toDoItems} clear = {events.clearItem.bind(this)}/>
				</div>
			</main>
		)
	}
}

export default MainDiv;