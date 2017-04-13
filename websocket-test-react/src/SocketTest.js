import React, {Component} from 'react'
import Websocket from 'react-websocket'

class SocketTest extends Component {
	constructor() {
		super()
		this.state = {
        	message: ''
      	};
	}

	handleData(data) {
		// would probably parse the data if it's JSON
		this.setState({
			message: data
		})
	}

	render() {
		return (
			<div>
				Current Message: {this.state.message}
				<Websocket url='ws://localhost:2999' 
              			   onMessage={this.handleData.bind(this)} />
			</div>
		)
	}
}

export default SocketTest