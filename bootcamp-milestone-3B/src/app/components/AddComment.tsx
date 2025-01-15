import React, { useState } from "react";

type AddCommentProps = {
    onAddComment: (newComment: { user: string; comment: string; time: Date }) => void;
};

function AddComment({ onAddComment }: AddCommentProps) {
    const [user, setUser] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddComment({ user, comment, time: new Date() });
        setUser("");
        setComment("");
    };

    return (
        <form className="add-comment-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your name"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
            />
            <textarea
                placeholder="Your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
            ></textarea>
            <button type="submit">Add Comment</button>
        </form>
    );
}

export default AddComment;
