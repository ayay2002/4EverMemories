import React from 'react';
import { FaPlusCircle } from "react-icons/fa";

export default function Photographer() {
  return (
    <div>
      <div>Photographer</div>
      <label htmlFor="file_pick" className="button">
        <FaPlusCircle />
        Upload Album
        <input type="file" name="file_pick" id="file_pick" style={{ display: "none" }} />
      </label>
    </div>
  );
}