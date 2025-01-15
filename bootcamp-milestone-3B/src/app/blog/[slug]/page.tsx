import React from "react";
import Image from "next/image";
import "./Blog.css";
import CommentsSection from "../../components/CommentsSection";
import Comment from "../../components/Comment";

type Props = {
    params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function Blog({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const blog = await getBlog(slug);

    if (blog) {
        return (
            <div>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                <p>Published on: {new Date(blog.date).toLocaleDateString()}</p>

                <div>
                    <h2>Comments</h2>
                    {blog.comments.length > 0 ? (
                        blog.comments.map((comment: { user: string; comment: string; time: Date; }, index: React.Key | null | undefined) => (
                            <Comment key={index} comment={comment} />
                        ))
                    ) : (
                        <p>No comments yet. Be the first to comment!</p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Blog Not Found</h1>
            <p>Sorry, we couldn't find the blog you're looking for. Please check the URL or try again later.</p>
        </div>
    );
}
