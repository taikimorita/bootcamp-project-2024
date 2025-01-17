import { NextApiRequest, NextApiResponse } from 'next';
import Blog from '../../../../database/blogSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { slug } = req.query;
        const { user, comment } = req.body;

        // Validate input
        if (!user || !comment) {
            return res.status(400).json({ error: 'Missing required fields: user or comment' });
        }

        try {
            const blog = await Blog.findOne({ slug });

            if (!blog) {
                return res.status(404).json({ error: 'Blog not found' });
            }

            // Add the comment to the blog's comments array
            blog.comments.push({
                user,
                comment,
                time: new Date(),
            });

            await blog.save(); // Save the updated document to the database

            return res.status(200).json({ message: 'Comment added successfully', comments: blog.comments });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to add comment' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
