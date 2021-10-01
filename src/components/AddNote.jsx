import React, { useState } from "react"

function AddNote(props) {
    const [currentInput, setCurrentInput] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { value, placeholder } = event.target
        setCurrentInput((prevValue) => {
            const { title, content } = prevValue
            if (placeholder === "Take a note...") {
                return ({
                    title: title,
                    content: value
                })
            } else {
                return ({
                    title: value,
                    content: content
                })
            }
        })
    }


    return (
        <div className="container">
            <div className="box">
                <input type="text" placeholder="Title" className="inputTitle" value={currentInput.title} onChange={handleChange} />
                <textarea className="inputNote" cols="30" rows="10" placeholder="Take a note..." value={currentInput.content} onChange={handleChange}></textarea>
                <button className="addBtn" onClick={() => {
                    if (currentInput.title != "" && currentInput.content != "") {
                        props.addNote(currentInput, setCurrentInput)
                    }
                    else {
                        alert("Must have something written in both title and content section")
                    }
                }}><p>+</p></button>
            </div>

        </div>
    )
}

export default AddNote