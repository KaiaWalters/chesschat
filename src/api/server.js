import {mongoose} from "mongoose";
import express from 'express';
import cors from 'cors'

const app = express()

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())

const uri = "mongodb+srv://newbaby:enternow@cluster0.2knf4.mongodb.net/Chess?retryWrites=true&w=majority"

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
         required: true
        },
    content: {
        type: String,
        required: true
     }, 
     move: {
        type: Object,
        required: true
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

    console.log("body", req.body)
    const data = new Comment({
        title: req.body.title,
        content: req.body.content, 
        move: req.body.move
    })

    try {
        if (data.title && data.content && data.move) {
            const val = await data.save()
            res.status(201).json(val)
        } else {
            res.status(400).json({ error: 'Missing required fields' });
        }

    } catch(error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: error.message });
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})



