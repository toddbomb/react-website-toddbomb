import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'
import tusharImg from './assets/tushar.jpg'
import tablaImg from './assets/tabla.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
            <h1 id="my-name">Tushar Aggarwal</h1>
            <nav>
                <a href="#about-me" className="nav-link">About</a>
                <a href="#interests" className="nav-link">Interests</a>
                <a href="#on-campus" className="nav-link">On Campus</a>
            </nav>
        </header>
        <img src={tusharImg}
             width="315"
             height="330"/>
        <p className="img-subtitle">This is me!</p>
        <section id="about-me">
            <h2>About me</h2>
            <p>Hi, my name is Tushar Aggarwal and I'm a '26 at Dartmouth. I'm from Boston, MA, and I am planning to be either a CS or ENGS major. I have a younger sister but no pets unfortunately :(</p>
        </section>
        <section id="interests">
            <h2>Interests and Hobbies</h2>
            <ul>
                <li>Music</li>
                <li>Tennis</li>
                <li>Pens/Pencils/Stationary</li>
                <li>Formula 1</li>
                <li>Video gaming</li>
            </ul>
            <img src={tablaImg}/>
            <p className="img-subtitle">I play this instrument, called the tabla. It's an Indian classical percussion instrument.</p>
        </section>
        <section id="on-campus">
            <h2>On Campus</h2>
            <p>Currently, I'm involved in the Coast Jazz Orchestra, where I play the tabla. I am also the TA for MUS 17.02: Music and Dance of North India. In the future, I hope to be involved in DALI lab, Dartmouth Formula Racing, and/or the DOC!</p>
            <p>Check out our latest concert video below (I'm on the far left):</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aukcFQ5gFv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="embed-video"></iframe>
            <h3>Relevant Coursework</h3>
            <ul>
                <li>COSC 1</li>
                <li>COSC 10</li>
                <li>PHYS 13, 14</li>
                <li>ECON 1</li>
            </ul>
        </section>
        <footer>
            <a target="_blank" href="https://twitter.com/toddbombb" className="footer-link">Twitter</a>
            <a target="_blank" href="https://www.instagram.com/tushar.agg12/" className="footer-link">Instagram</a>
            <a target="_blank" href="https://github.com/toddbomb" className="footer-link">Github</a>
        </footer>
    </>
  )
}

export default App
