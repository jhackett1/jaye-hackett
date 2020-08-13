import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"
import Helmet from "react-helmet"

const Layout = ({
    children
}) =>
    <>  
        <Helmet>
            <title>jaye hackett's terrible website</title>
        </Helmet>
        <main className="interface">
            <nav className="interface__menu">
                <Link to="/">Intro/Contact</Link>
                <Link to="/work">Work</Link>
                <Link to="/experience">Experience</Link>  
                <Link to="/skills">Skills</Link>  
                <Link to="/education">Education</Link>  
            </nav>
            <article className="interface__content">
                {children}
            </article>
        </main>

    </>
 

export default Layout