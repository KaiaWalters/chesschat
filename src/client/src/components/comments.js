import { useState } from "react"

function CommentSection(currentMove) {
    const [comment, setComment] = useState({});
    // state object needs to match the same structure as the object you are trying to save to state
    
    function handleSubmit(event) {
        event.preventDefault()
        const postUrl = 'http://localhost:3001/api/post/'
        const formData = new FormData(event.target)
        const commentTitle = formData.get('title')
        const comment = formData.get('comment')
        setComment({ "comment": comment, "commentTitle": commentTitle, "move": currentMove })
        
        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                title: comment.commentTitle, 
                comment: comment.comment, 
                move: comment.move
            })
        })
        .then(()=>{
            alert('You have been added to the system!');
        })
        .catch((error) => {
            console.error("Failed to fetch:", error);
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
