'use client';
import React, { useState } from "react";
import "./Blog.css";
import Comment from "../../components/Comment";

async function getBlog(slug: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }
        return res.json();
    } catch (err: unknown) {
        console.log(`error: ${err}`);
        return null;
    }
}

export default function Blog({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const [blog, setBlog] = useState<any | null>(null);
    const [newComment, setNewComment] = useState<string>("");
    const [comments, setComments] = useState<any[]>([]);

    React.useEffect(() => {
        // Fetch blog data on component mount
        getBlog(slug).then((data) => {
            if (data) {
                setBlog(data);
                setComments(data.comments || []);
            }
        });
    }, [slug]);

    const handleCommentSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const res = await fetch(`/api/blog/${slug}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: "Anonymous",
                    comment: newComment,
                    time: new Date(),
                }),
            });

            if (res.ok) {
                const updatedComments = await res.json();
                setComments(updatedComments);
                setNewComment(""); // Clear the input field
            } else {
                console.error("Failed to submit comment");
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    if (!blog) {
        return (
            <div>
                <h1>Blog Not Found</h1>
                <p>Sorry, we couldn't find the blog you're looking for. Please check the URL or try again later.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>Published on: {new Date(blog.date).toLocaleDateString()}</p>

            <div>
                <h2>Comments</h2>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <Comment key={index} comment={comment} />
                    ))
                ) : (
                    <p>No comments yet. Be the first to comment!</p>
                )}
            </div>

            {/* Comment submission form */}
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    rows={4}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
