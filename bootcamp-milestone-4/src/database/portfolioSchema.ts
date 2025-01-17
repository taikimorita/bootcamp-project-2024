import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Portfolio = {
    project_name: string;
    project: string;
    date: Date;
    project_description: string;
    slug: string; // array for comments
    comments: IComment[]; // array of comments
};

type IComment = {
    user: string;
    comment: string;
    time: Date;
}

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true, default: Date.now },
});

// mongoose schema 
const portfolioSchema = new Schema<Portfolio>({
    project_name: { type: String, required: true },
    project: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    project_description: { type: String, required: true },
    slug: { type: String, required: true },
    comments: { type: [commentSchema], default: [] }, // Add comments array
})

// defining the collection and model
const Portfolio = mongoose.models['portfolio'] ||
    mongoose.model('portfolio', portfolioSchema);

export default Portfolio;