import React from 'react';
import { MdDelete } from "react-icons/md";


function Note({ title, content, onDelete, id }) {
    return (
        <div className="note">
            <h2>{title}</h2>
            <img src={localStorage.getItem('fileBase64')}></img>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}>
                <MdDelete size={25} />
            </button>
        </div>
    );
}

export default Note;