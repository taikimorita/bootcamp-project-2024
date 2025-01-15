import React from "react";

type CommentProps = {
    comment: {
        user: string;
        comment: string;
        time: Date;
    };
};

function parseCommentTime(time: Date): string {
    const date = new Date(time);
    return date.toLocaleString();
}

function Comment({ comment }: CommentProps) {
    return (
        <div className="comment">
            <h4 className="comment-user">{comment.user}</h4>
            <p className="comment-text">{comment.comment}</p>
            <span className="comment-time">{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;
