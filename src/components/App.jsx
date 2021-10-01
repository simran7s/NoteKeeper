import React, { useState } from "react"
import Footer from "./Footer";
import Header from "./Header";
import notes from "../notes";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {
    let [list, setList] = useState([])
    let [key, setKey] = useState(1)

    function addNote(item, setCurrentInput) {
        item.key = key
        item.id = key
        setKey(key + 1) //increment key for next note

        //add note to array
        setList((prevValue) => {
            return ([...prevValue, item])
        })

        //make current inputs empty
        setCurrentInput({
            title: "",
            content: ""
        })

    }

    function removeNote(id) {
        console.log("DELETE THIS")
        console.log(id)
        // setList((prevValue) => {
        //     prevValue.filter((item, index) => {
        //         if (id != index - 1) {
        //             return item
        //         }
        //     })
        // })
    }

    return (
        <div>
            <Header />
            <AddNote addNote={addNote} />
            {list.map((noteItem) => {
                return (
                    <Note
                        key={noteItem.key}
                        id={noteItem.id}
                        title={noteItem.title}
                        content={noteItem.content}
                        removeNote={removeNote}
                    />)
            })}

            <Footer />
        </div>
    )
}


export default App;