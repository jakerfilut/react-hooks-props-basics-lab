import React from "react";

function Links(props) {
  return (
      <>
    <h3>Links</h3>
    <a herf={props.github}>{props.github}</a>
    <a herf={props.linkedin}>{props.linkedin}</a>
    </>
  );
}

export default Links;