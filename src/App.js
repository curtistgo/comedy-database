import "./App.css";
import React from "react";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import Paragraph from "./components/Paragraph";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadState = this.loadState.bind(this);
    this.state = { messages: [], error: null };
  }
  loadState() {
    fetch("https://wtnret-5002.sse.codesandbox.io/messages")
      .then((data) => data.json())
      .then((messages) => {
        this.setState({ messages: messages, error: null });
      })
      .catch((error) => {
        this.setState({ message: [], error: "Error loading message." });
      });
  }
  componentDidMount() {
    this.loadState();
  }
  render() {
    return (
      <div className="App">
        <h1 className="the-head">Comedy Screenplays</h1>
        <div>
          <Paragraph />
        </div>

        <div class="info-block container-fluid">
          <div>
            <MessageForm loadState={this.loadState} />
          </div>

          <div id="messages">
            <MessageList messages={this.state.messages} />
            <p>{this.state.error ?? " "}</p>
          </div>
        </div>
      </div>
    );
  }
}
