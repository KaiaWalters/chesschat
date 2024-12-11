import { useState } from "react"

function CommentSection(currentMove) {
    const [comment, setComment] = useState({});
    
    function handleSubmit(event) {
        event.preventDefault()
        const postUrl = 'http://localhost:3001/post'
        const formData = new FormData(event.target)
        const title = formData.get('title')
        const content = formData.get('comment')

        const comment = {
            title: title,
            content: content,
            move: currentMove,
        };    
                
        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                title: comment.title, 
                content: comment.content, 
                move: comment.move.data
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
