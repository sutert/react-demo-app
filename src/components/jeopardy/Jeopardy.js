import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0
        }
    }
    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }
    //display the results on the screen
    render() {
        let categoryElement
        if (this.state.data.category === undefined) {
            categoryElement = <div> no category</div>;
        } else {
            categoryElement = <div>{this.state.data.category.title}</div>;
        }
        return (
            <div>
                category: {categoryElement}<br />
                value: {this.state.data.value}<br />
                question: {this.state.data.question}<br />
                score:{this.state.score}

                <form>
                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" name="answer" />
                    </div>
                </form>
            </div>
        );
    }
}
export default Jeopardy;



