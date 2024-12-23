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
        image: "assets/yoshi.png",
        imageAlt: "Image of a cartoon cat.",
        slug: "my-first-post",
    },
    {
        title: "Second Post",
        date: "10-23-2024",
        description: "This is my second blog post.",
        image: "assets/irs.jpg",
        imageAlt: "Image of the IRS logo.",
        slug: "my-second-post",
    },
];

export default blogs;
