var blogs = [
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
var blogContainer = document.getElementById('blog-container');
function displayBlogs(blogs) {
    blogs.forEach(function (blog) {
        var blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        var titleElement = document.createElement('h1');
        titleElement.textContent = blog.title;
        var dateElement = document.createElement('p');
        dateElement.textContent = blog.date;
        dateElement.classList.add('blog-date');
        var imgElement = document.createElement('img');
        imgElement.src = blog.image;
        imgElement.alt = blog.imageAlt;
        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = blog.description;
        blogPost.appendChild(titleElement);
        blogPost.appendChild(dateElement);
        blogPost.appendChild(imgElement);
        blogPost.appendChild(descriptionElement);
        blogContainer.appendChild(blogPost);
    });
}
displayBlogs(blogs);
