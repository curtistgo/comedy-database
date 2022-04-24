import React from "react";
export default class MessageList extends React.Component {
  transformMessage(message) {
    let dateTime =
      new Date(message.time).toDateString() +
      " " +
      new Date(message.time).toLocaleTimeString("en-US");
    return (
      <tr key={message.id}>
        <td>
          <strong>{dateTime}</strong>
        </td>
        <td className="db-text">{message.title}</td>
        <td className="db-text">{message.writer}</td>
        <td className="db-text">{message.synopsis}</td>
      </tr>
    );
  }
  render() {
    let messagesJsx = this.props.messages.map(this.transformMessage);
    return <ul>{messagesJsx}</ul>;
  }
}
