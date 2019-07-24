let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const events = {
	handleChange(e) {
		this.setState({value: e.target.value})
	},

	addToDo(e) {
		if (this.state.value) {
			// ----------- adding item to localestorage --------------
			itemsArray.push(this.state.value);
			localStorage.setItem("items", JSON.stringify(itemsArray));
			// --------------------------------------------------------
			let allToDoes = [...this.state.toDoItems];
			allToDoes.push(this.state.value);
			this.state.value = "";
			this.setState({toDoItems: [...allToDoes]});
		}
		else e.target.style.backgroundColor = 'red';
	},

	onMouseUpHandler(e) {
		e.target.style.backgroundColor = '#0d1214a3';
	},

	onMouseOverHandler(e) {
		e.target.style.backgroundColor = 'orange';
	},

	onMouseOutHandler(e) {
		e.target.style.backgroundColor = '#0d1214a3';
	},

	enterHandlerDown(e) {
		if (e.which == 13) {
			if (this.state.value) {
				// ----------- adding item to localestorage --------------
				itemsArray.push(this.state.value);
				localStorage.setItem("items", JSON.stringify(itemsArray));
				// --------------------------------------------------------
				let allToDoes = [...this.state.toDoItems];
				allToDoes.push(this.state.value);
				this.state.value = "";
				this.setState({toDoItems: [...allToDoes]});
			} 
			else {
				document.getElementsByTagName("button")[0].style.backgroundColor = 'red';
			}
		}
	},

	enterHandlerUp(e) {
		if (e.which == 13) document.getElementsByTagName("button")[0].style.backgroundColor = '#0d1214a3';
	},

	clearItem(e) {
		let text = e.target.nextSibling.nextSibling.innerText,
		allToDoes = [...this.state.toDoItems],
		clearEl = allToDoes.indexOf(text);
		allToDoes.splice(clearEl, 1);
		this.setState({toDoItems: [...allToDoes]});
		e.preventDefault();
		// --------- removing item from localestorage -----------
		let arr = JSON.parse(localStorage.getItem("items"));
		arr.splice(arr.indexOf(text), 1);
		localStorage.setItem("items", JSON.stringify(arr));
	},

	clearAllItems () {
		localStorage.clear();
		this.setState({toDoItems: []});
	}
}

export default events;
