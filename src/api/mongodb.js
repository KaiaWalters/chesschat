import {mongoose} from "mongoose";


mongoose.connect("mongodb+srv://lizzo:Iamapowerhouse>@cluster0.2knf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

function testMongo(comments) {
    const turnCommentSchema = new mongoose.Schema({
        title: {
            type: String,
            require: true
        },
        comment: {
            type: String,
            require: true
        }
    })

    const turnComment = new mongoose.model("turnComment", turnCommentSchema)

    const mage_1 = new turnComment({
        title: `${comments.commentTitle}`,
        comment: `${comments.comment}`
    });

    mage_1.save();
}

export default testMongo