import { toHaveErrorMessage } from "@testing-library/jest-dom/matchers";
import { useState } from "react"

function CommentSection(currentMove) {
    const [comment, setComment] = useState({ "content": "", "title": "", "move": currentMove });
    // state object needs to match the same structure as the object you are trying to save to state
    
    function handleSubmit(event) {
        event.preventDefault()
        const postUrl = 'http://localhost:3001/post'
        const formData = new FormData(event.target)
        const title = formData.get('title')
        const content = formData.get('comment')

        setComment({"title": title, "content": content,  "move": currentMove })
        
        console.log(comment)
        
        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                title: comment.title, 
                content: comment.content, 
                move: comment.move
            })
        })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
    }
  
    return (
        <>  
            <form action="/api/comment" onSubmit={handleSubmit} method="POST">
                <input name="title" defaultValue={"title"} />
                <input name="comment" defaultValue={"comment"} />
                <button type="submit">Add to Cart</button>
            </form>
            <span>Comment:{comment.comment}</span>
            <span>Title: {comment.commentTitle}</span>
        </>
    )
     
}

export default CommentSection
