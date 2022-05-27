import { useParams } from "react-router-dom";
import React from "react";

export default function Piece({ data }) {
  const { pieceName } = useParams();

  return (
    <div>
      <h1>Oh Hello, I am being sent the prop: {data}</h1>
      <h1>my piece name is {pieceName} hehe</h1>
    </div>
  );
}
