import './contact.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage} >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum modi corrupti illo dolore magni dolorum facilis aperiam obcaecati fuga temporibus?
      </Header>
      <section className="contact">
        <div className="contact_wrapper">
          <a href="mailto:www.thmarazewa@gmail.com" target='_blank'><MdEmail/></a>
          <a href="http://m.me/" target='_blank'><BsMessenger/></a>
          <a href="##" target='_blank'><IoLogoWhatsapp/></a>
        </div>
      </section>

    </>
  )
}
export  default Contact;