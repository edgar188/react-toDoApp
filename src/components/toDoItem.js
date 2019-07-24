import React from "react";

class AddItem extends React.Component {

	xHandlerOver = e => e.target.style.backgroundColor = 'red';
	
	xHandlerOut = e => e.target.style.backgroundColor = '#0d1214a3';

	activeMsg = e => {
		if(e.target.style.backgroundColor != 'orange' && 
			e.currentTarget.style.backgroundColor != "orange" && 
			e.target.innerText != "X") {
			e.currentTarget.style.backgroundColor = "orange";
		}
		else e.currentTarget.style.backgroundColor = "#0d1214a3";
	}

	render() {
		return this.props.toDoItems.map((item, index) => (
			<div className="msgDiv" key={index} onClick={this.activeMsg}>
				<span className="close" onClick={this.props.clear} onMouseOver={this.xHandlerOver} onMouseOut={this.xHandlerOut}>X</span>
				<br />
				<p className="msg">{item}</p>
			</div>
			)
		)
	}
}

export default AddItem;
