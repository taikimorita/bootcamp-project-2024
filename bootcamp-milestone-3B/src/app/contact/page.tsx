export default function Contact() {
    return (
      <div>
        <html>
            <head>
                <title>
                    Taiki's Contact Form
                </title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
                <main>
                    <h1 className="page-title"></h1>
                    Hello World! This is my contact form.
                    <form id="contact form">
                        <input type="text" id="name"/>
                        <input type="email" id="email"/>
                        <textarea>

                        </textarea>
                        <input type="submit"/>
                    </form>
                </main>
                <footer className="footer">
                    © 2024 Taiki's Personal Website | All Rights Reserved
                </footer>
            </body>
        </html>
      </div>
    )
  }
