export default function Blog() {
    return (
      <div>
        <html>
    <head>
        <title>
            Taiki's Blog
        </title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <main>
            <h1 className="page-title"></h1>
            Hello World! This is my blog.
            <div className="content" id="blog-container"></div>
        </main>
        <footer className="footer">
            © 2024 Taiki's Personal Website | All Rights Reserved
        </footer>
        <script src="src/blog.js"></script>
    </body>
</html>
      </div>
    )
  }
