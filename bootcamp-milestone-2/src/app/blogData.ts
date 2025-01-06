import blog from "@/database/blogSchema";
import connectDB from "@/database/db";

export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "First Post",
        date: "10-21-2024",
        description: "This is my first blog post.",
        image: "public/yoshi.png",
        imageAlt: "Image of a cartoon cat.",
        slug: "my-first-post",
    },
    {
        title: "Second Post",
        date: "10-23-2024",
        description: "This is my second blog post.",
        image: "public/irs.jpg",
        imageAlt: "Image of the IRS logo.",
        slug: "my-second-post",
    },
];

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default blogs;