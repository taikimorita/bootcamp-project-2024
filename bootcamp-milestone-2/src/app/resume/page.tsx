export default function Resume() {
    return (
      <div>
<html>
    <head>
        <title>
            Taiki's Resume
        </title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <main>
            <h1 className="page-title">
                <a href="Resume.pdf" download>Download Resume</a>
            </h1>
            Hello World! This is my resume.
            <div className="resume">
                <section className="section">
                    <h2 className="section-title">
                        Education
                        <div className="entry">
                            <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
                            <p className="entry-info">California Polytechnic State University, San Luis Obispo | Expected Graduation June 2028</p>
                        </div>
                    </h2>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        Experience
                        <div className="entry">
                            <h3 className="entry-title">Computers 4 People Volunteer</h3>
                            <p className="entry-info">Hoboken, NJ | August 2022 - September 2024</p>
                            <p className="entry-description">
                                Volunteered at a nonprofit that donates computers to low-income
                                households; refurbished/repaired 100+ laptops and translated brochures
                                to Japanese.
                            </p>
                        </div>
                    </h2>
                </section>
                <section className="section">
                    <h2 className="section-title">Skills</h2>
                    <ul>Skills
                        <li>Semantic HTML</li>
                        <li>CSS3</li>
                        <li>Git Version Control</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>TypeScript</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        Projects
                        <div className="entry">
                            <h3 className="entry-title"><a href="index.html">Personal Website</a></h3>
                            <p className="entry-info">Designed and built a personal website using HTML and CSS</p>
                            <p className="entry-description"> - Implemented multiple pages using HTML and CSS</p>
                            <p className="entry-description"> - Focused on semantic HTML design</p>
                            <p className="entry-description"> - Used best practices for Git and GitHub</p>
                        </div>
                    </h2>
                </section>
                <section className="section">
                    <h2 className="section-title">Coursework</h2>
                    <ul>Coursework
                        <li>Hack4Impact HTML, CSS, and Git Starter Pack</li>
                        <li>Fundamentals of Computer Science</li>
                        <li>AP Computer Science A</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">Activities</h2>
                </section>
                <section className="section">
                    <h2 className="section-title">Awards</h2>
                </section>
                <section className="section">
                    <h2 className="section-title">Interests</h2>
                </section>
                <section className="section">
                    <h2 className="section-title">References</h2>
                </section>
            </div>
        </main>
        <footer className="footer">
            © 2024 Taiki's Personal Website | All Rights Reserved
        </footer>
    </body>
</html>

      </div>
    )
  }
