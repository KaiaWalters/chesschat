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
     }, 
    move: {
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

app.post('/api/post', async (req, res) => {
    console.log("request", req.body)
    const data = new Comment({
        title: req.body.title,
        comment: req.body.comment, 
        move: req.body.move
    })
    try {
        const val = await data.save()
        res.status(201).json(val)
        console.log("post called")
    } catch(error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: error.message });
    }
  
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})



