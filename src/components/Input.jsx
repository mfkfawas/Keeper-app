import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props) {
    const [input, setInput] = useState({
        title: "",
        content: ""
    })
    const [isExpanded, setExpanded] = useState(false)

    function storeInput(event) {
            const {name, value} = event.target;
    
    setInput((prevValue)=>{
        return {
            ...prevValue,
            [name] : value
        }
    })
    }
    function expand() {
        setExpanded(true)
    }

    return(
        <form className="create-note">
            {isExpanded && <input name="title" placeholder="Title" onChange={storeInput} value={input.title} /> }
        
            <textarea onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={storeInput} value={input.content} />
            <Zoom in={isExpanded}>
                <Fab 
                    onClick={(event)=>{

                         if(input.title !== "" || input.content !== "" ){
                        props.onAdd(input)
                     }
  
                    setInput({
                        title: "",
                        content: ""
                    })
                    event.preventDefault()

                }}>
                    <AddIcon />
                </Fab>
            </Zoom>
      </form>
 
    )
}

export default Input;