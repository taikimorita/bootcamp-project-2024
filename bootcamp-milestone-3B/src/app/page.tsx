import blogs from './blogData';
import BlogPreview from './components/blogPreview';

export default function Home() {
  return (
    <div>
<html lang="en">
    <head>
        <title>Taiki's Personal Website</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <main>
            <h1 className="page-title">Hello World!</h1>
            <div className="about">
                <div className="about-image">
                  <img src="public/maruchan.png" alt="Here's a random image of Maruchan instant noodles because why not."/>
                  <img src="public/nutrition facts.jpeg" alt="Here's the backside."/>
                </div>
                <div className="about-text">
                    <p>
                        Hey! My name is <strong>Taiki Jeffers</strong> and I am a first-year Computer Science student at Cal Poly San Luis Obispo. My pronouns are <em>he/him</em>. 
                        Some of my hobbies include unicycling, rock climbing, skiing, volleyball, and chess.
                    </p>
                    <p>
                        I am excited to contribute to <strong>Hack4Impact's</strong> ongoing <em>and</em> future projects!
                    </p>
                </div>
            </div>
        </main>
        <footer className="footer">© 2024 Taiki's Personal Website | All Rights Reserved</footer>
    </body>
</html>
    {blogs.map(blog => 
      <BlogPreview 
        title={blog.title}
        date={blog.date}
        description={blog.description}
        image={blog.image}
        imageAlt={blog.imageAlt}
        slug={blog.slug}      
      />
    )}
    </div>
  )
}
