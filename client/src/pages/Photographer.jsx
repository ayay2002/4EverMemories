import React from 'react';
import { FaPlusCircle } from "react-icons/fa";

export default function Photographer() {
  return (
    <div className="photographer-container">
      <div className="photographer-header">Photographer</div>
      <label htmlFor="file_pick" className="upload-button">
        <FaPlusCircle />
        Upload Album
        <input type="file" name="file_pick" id="file_pick" className="hidden-input" />
      </label>
    </div>
  );
}
