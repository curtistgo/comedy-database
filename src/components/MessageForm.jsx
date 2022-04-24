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

    fetch("https://wtnret-5007.sse.codesandbox.io/messages/new", {
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
        action="https://wtnret-5007.sse.codesandbox.io/messages/new"
        method="POST"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div>
          <label class="field-label" for="title">
            Title
          </label>
        </div>
        <div>
          <input
            className="fields"
            type="text"
            name="title"
            placeholder="Title"
            maxLength="48"
          />
        </div>

        <div>
          <label class="field-label" for="writer">
            Writer
          </label>
        </div>
        <div>
          <input
            className="fields"
            type="text"
            name="writer"
            placeholder="Writer"
            maxLength="125"
          />
        </div>

        <div>
          <label class="field-label" for="synopsis">
            Synopsis
          </label>
        </div>
        <div>
          <textarea
            className="fields"
            type="text"
            rows="4"
            maxLength="500"
            name="synopsis"
            placeholder="What's the movie about?"
          ></textarea>
        </div>
        <button class="field-label" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
