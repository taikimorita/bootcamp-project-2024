import React from "react";
import Comment from "./Comment";

type CommentsListProps = {
    comments: {
        user: string;
        comment: string;
        time: Date;
    }[];
};

function CommentsList({ comments }: CommentsListProps) {
    return (
        <div className="comments-list">
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
    );
}

export default CommentsList;
