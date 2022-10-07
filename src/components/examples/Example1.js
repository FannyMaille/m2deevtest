import {Component} from "react";
import { Alert, Button } from 'react-bootstrap';

class Home extends Component {

    constructor() {
		super()
		this.state = {
			nb: 0,
		}
	}

	increment() {
		this.setState({
			nb: this.state.nb + 1
		})
  }

    render() {
        return(
            <div className="container">
                <h1>Compteur</h1>
                <p>Comprendre la notion de state et la modification du state de notre composant</p>
				<div className="counter">
					<h2>{ this.state.nb }</h2>
					<Button variant="outline-danger" onClick={ ( ) => this.increment() }>
						Click HERE
					</Button>
				</div>
            </div>
        );
    }
}

export default Home;
