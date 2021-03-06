import React from "react";

export default class MessageForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let title = document.querySelector("[name=title]").value;
    let writer = document.querySelector("[name=writer]").value;
    let synopsis = document.querySelector("[name=synopsis]").value;

    document.querySelector("[name=title]").value = "";
    document.querySelector("[name=writer]").value = "";
    document.querySelector("[name=synopsis]").value = "";

    fetch("https://wtnret-5004.sse.codesandbox.io/messages/new", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        title: title,
        writer: writer,
        synopsis: synopsis,
      }),
    })
      .then((x) => x.json())
      .then((response) => {
        if (response.status === 200) {
          this.props.loadState();
        }
      });
  }
  render() {
    return (
      <form
        action="https://wtnret-5004.sse.codesandbox.io/messages/new"
        method="POST"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div>
          <label className="field-label" htmlFor="title">
            Title
          </label>
        </div>
        <div>
          <input
            className="fields"
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            maxLength="48"
            required
            autoFocus
          />
        </div>

        <div>
          <label className="field-label" htmlFor="writer">
            Writer
          </label>
        </div>
        <div>
          <input
            className="fields"
            type="text"
            id="writer"
            name="writer"
            placeholder="Writer"
            maxLength="125"
            required
          />
        </div>

        <div>
          <label className="field-label" htmlFor="synopsis">
            Synopsis
          </label>
        </div>
        <div>
          <textarea
            className="fields"
            type="text"
            id="synopsis"
            rows="4"
            maxLength="500"
            name="synopsis"
            placeholder="What's the movie about?"
            required
          ></textarea>
        </div>

        <button className="field-label submit-btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
