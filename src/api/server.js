import {mongoose} from "mongoose";
import express from 'express';

const app = express()
app.use(express.json())

const uri = "mongodb+srv://newbaby:enternow@cluster0.2knf4.mongodb.net/Chess?retryWrites=true&w=majority";

mongoose.connect(uri).catch(error => {
    if(!error){
        console.log("connected to the database")
    }else {
        console.log(error)
    }   
})

const commentSchema = {
    title: {
        type: String,
         require: true
        },
    comment: {
        type: String,
        require: true
     }
}
const comment = mongoose.model("Turns", commentSchema)

app.post('/post', async (req, res) => {
    console.log("called")
    const data = new comment({
        title: req.body.title,
        comment: req.body.comment
    })
    const val = await data.save()
    res.json(val)
});

const port = process.env.PORT || 3001; // Use the port provided by the host or default to 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

// function testMongo(comments) {
//     const turnCommentSchema = new mongoose.Schema({
//         title: {
//             type: String,
//             require: true
//         },
//         comment: {
//             type: String,
//             require: true
//         }
//     })

//     const turnComment = new mongoose.model("turnComment", turnCommentSchema)

//     const mage_1 = new turnComment({
//         title: `${comments.commentTitle}`,
//         comment: `${comments.comment}`
//     });

//     mage_1.save();
// }



