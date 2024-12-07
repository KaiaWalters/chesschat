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

const Comment = mongoose.model("turns", commentSchema)

app.get('/get', async(req, res) => {
    try {
        let results = await Comment.find({})
        res.send(results).status(200);
    } catch (error) {
        console.log(error)
        res.json(error);
    }
})

app.post('/post', async (req, res) => {
    const data = new Comment({
        title: req.body.title,
        comment: req.body.comment
    })
    const val = await data.save()
    res.json(val)
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})



