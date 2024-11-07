import { useState } from "react"

function CommentSection(currentMove) {
    const [comment, setComment] = useState({});
    // state object needs to match the same structure as the object you are trying to save to state
    
    function submitComment(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const commentTitle = formData.get('title')
        const comment = formData.get('comment')
        setComment({ "comment": comment, "commentTitle": commentTitle, "move": currentMove })
        console.log("comment",comment, "move", currentMove)
    }
  
    return (
        <>  
            <form onSubmit={submitComment}>
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