import React from 'react';
import {useState} from 'react';
import { IoIosAdd } from "react-icons/io";

function CreateArea({onAdd}) {
    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
      });

      function handleChange(e) {
        const { name, value } = e.target;
        setNote((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      }

      function handleExpanded() {
        setExpanded(true);
      }


      function submitButton(event){
        onAdd(note);
        setNote({
          title: "",
          content: "",
        });
        event.preventDefault();
      }
      
      function fileUpload(e){
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
          localStorage["fileBase64"] = base64;
          console.debug("file stored", base64);
        });
      }

      const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
          reader.readAsDataURL(file);
        });
      }

      return (
        <div>
            <form>
                {isExpanded && (
                  <input type="text"
                    value={note.title} 
                    placeholder="Create topic" 
                    name="title" 
                    onChange={handleChange} 
                  />
                )}
                <p>
                  <input type="file" id="imageFile" onChange= {fileUpload} ></input>
                </p>
                <p>
                  <textarea 
                    name="content" 
                    value={note.content}  
                    onClick={handleExpanded} 
                    placeholder="Make a note"
                    rows={isExpanded ? 3 : 1} 
                    onChange={handleChange}
                  ></textarea>
                </p>
                <button onClick={submitButton}>
                    <IoIosAdd size={35} />
                </button>
            </form>
        </div>
    );
  
}

export default CreateArea;