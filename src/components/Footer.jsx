import { Link } from "react-router-dom"
import Logo from '../images/logo.png'

import { FaLinkedin , FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter,AiFillInstagram } from "react-icons/ai"

const Folder = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="footer logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est illo tempore laborum tempora nostrum exercitationem eveniet optio reprehenderit ullam! Eaque molestias voluptatem aliquam obcaecati explicabo minima corporis voluptates eos?
                </p>
                <div className="footer_socials">
                    <a href="https://linkdin.com/" target="_blank" alt="noreferre"><FaLinkedin/></a>
                    <a href="https://facebook.com/" target="_blank" alt="noreferre"><FaFacebook/></a>
                    <a href="https://twitter.com/" target="_blank" alt="noreferre"><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" alt="noreferre"><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
        </div>
        <div className="footer_copyright">
            <small>2023 Khon Hien & copy; All Right Reserve</small>
        </div>
    </footer>
  )
}

export default Folder