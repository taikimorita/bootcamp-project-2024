import React, { useState } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

export default function CommentsSection() {
    const [comments, setComments] = useState<
        { user: string; comment: string; time: Date }[]
    >([]);

    const handleAddComment = (newComment: { user: string; comment: string; time: Date }) => {
        setComments((prev) => [...prev, newComment]);
    };

    return (
        <div className="comments-section">
            <h3>Comments</h3>
            <AddComment onAddComment={handleAddComment} />
            <CommentsList comments={comments} />
        </div>
    );
}
