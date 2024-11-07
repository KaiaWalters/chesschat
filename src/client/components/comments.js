import testMongo from "../../../api/mongodb"

function CommentSection() {
    async function submitComment(formData) {
        'use server'
        const commentTitle = formData.get('comment_title')
        const comment = formData.get('comment')
        await testMongo({ "comment": comment, "commentTitle": commentTitle})
    }
     
    return (
        <>  
            <form action={submitComment}>
                <input type="text" name="comment_title" defaultValue={"title"} />
                <input type="text" name="comment" defaultValue={"comment"} />
                <button type="submit">Add to Cart</button>
            </form>
        </>
    )

}

export default CommentSection