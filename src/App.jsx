import React, { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import Input  from "./components/Input";

// import  ReactDOM  from "react-dom";

function App() {
    const [posts, setPosts] = useState([])

    function addPost(input) {
                setPosts((prevValue)=>{
                    return [...prevValue, input]
                })
    }
    function deletePost(id) {
        setPosts((prevValue)=>{
            return prevValue.filter((item, index)=>{
                return index !== id
            })
        })
    }

    return(
        <div>
            <Header />
            <div className="container">

                <Input onAdd={addPost} />

                {posts.map( (post, index) =>(
                    <Note
                    key={index}
                    id={index}
                     title={post.title} 
                     content={post.content}
                     onDelete={deletePost} 
                     />
                ))}
                
            </div>
            <Footer />
        </div>

    )
}

export default App