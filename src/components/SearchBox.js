import { Component } from "react";

export default function SearchBox(props) {
  return (
    <div className="pa2">
      <input
        className="outline-transparent pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="Search Robots"
        onChange={props.searchChange}
      />
    </div>
  );
}
