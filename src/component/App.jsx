import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return <div>
    <Header /> 
    { Notes.map( note => 
        <Note 
          key = {note.key}
          title = {note.title}
          content = {note.content} 
        /> 
      )
    }
    <Footer /> 
  </div>
}

export default App;