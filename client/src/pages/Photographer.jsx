import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

export default function Photographer() {
  return (

    <div>
      <div>Photographer</div>
      <label className="button">
        <FaPlusCircle />
        <input hidden='true' type="file" name="file_pick" id="file_pick" />
      </label>
    </div>
  )
}

