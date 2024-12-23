type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

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

const blogContainer = document.getElementById('blog-container') as HTMLDivElement;

function displayBlogs(blogs: Blog[]): void {
    blogs.forEach(blog => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');

        const blogLink = document.createElement('a');
        blogLink.href = `blogs/${blog.slug}.html`

        const titleElement = document.createElement('h1');
        titleElement.textContent = blog.title;

        const dateElement = document.createElement('p');
        dateElement.textContent = blog.date;
        dateElement.classList.add('blog-date');

        const imgElement = document.createElement('img');
        imgElement.src = blog.image;
        imgElement.alt = blog.imageAlt;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = blog.description;

        blogPost.appendChild(titleElement);
        blogPost.appendChild(dateElement);
        blogPost.appendChild(imgElement);
        blogPost.appendChild(descriptionElement);

        blogPost.appendChild(blogLink);
        blogContainer.appendChild(blogPost);
    });
}

displayBlogs(blogs);
