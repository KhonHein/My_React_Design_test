import './about.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
const About = () => {
  return (
    <div>
      <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ab fuga reiciendis eos cum ipsa. Unde qui alias quis ratione.
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="our story" />
          </div>
          <div className="about_section-content">
            <h1>Our Story </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum tempore natus, repellendus, laudantium reprehenderit quasi fugiat quaerat adipisci modi numquam asperiores ab exercitationem. Doloribus deleniti sint voluptates aliquid repellendus?
            </p>
            
          </div>
        </div>
      </section>
      <section className="about_Vision">
        <div className="container about_Vision-container">
          <div className="about_section-content">
            <h1>Our Vision </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum tempore natus, repellendus, laudantium reprehenderit quasi fugiat quaerat adipisci modi numquam asperiores ab exercitationem. Doloribus deleniti sint voluptates aliquid repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus fuga repudiandae, natus enim nemo excepturi laudantium veniam velit optio sunt consequatur culpa doloribus, perspiciatis illo odio sint quod corrupti veritatis sequi id. Dolor fuga repellat libero? Eveniet illum, iure possimus aspernatur repellendus quaerat doloremque odit inventore ipsum enim sequi? Est?
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="our story" />
          </div>
        </div>
      </section>
      <section className="about_Mission">
        <div className="container about_Mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="our mission" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum tempore natus, repellendus, laudantium reprehenderit quasi fugiat quaerat adipisci modi numquam asperiores ab exercitationem. Doloribus deleniti sint voluptates aliquid repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus fuga repudiandae, natus enim nemo excepturi laudantium veniam velit optio sunt consequatur culpa doloribus, perspiciatis illo odio sint quod corrupti veritatis sequi id. Dolor fuga repellat libero? Eveniet illum, iure possimus aspernatur repellendus quaerat doloremque odit inventore ipsum enim sequi? Est?
            </p>
          </div>
        </div>
      </section>
      </>
    </div>
  )
}
export  default About;
