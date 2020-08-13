import React from "react"
import Layout from "../components/Layout"

const IndexPage = ({
  data
}) =>
  <Layout>
    <header className="intro">
        <h1 className="intro__name">Jaye Hackett</h1>
        <p><em>A strategic designer and programmer</em></p>
        <p className="intro__social-links">
            <span>Find me on:</span>
            <a href="https://twitter.com/dinosaurenby">Twitter</a>
            <a href="https://www.linkedin.com/in/hackettjaye/">LinkedIn</a>
            <a href="https://github.com/jhackett1">GitHub</a>
            <a href="https://medium.com/@dinosaurenby">Medium</a>
        </p>
        <p>Email me: <a href="mailto:hello@jayehackett.com">hello@jayehackett.com</a></p>
    </header>
  </Layout>

export default IndexPage