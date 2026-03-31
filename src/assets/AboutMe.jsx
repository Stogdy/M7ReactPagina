import "./AboutMe.css"
import doctor from "./doctor.png"

function AboutMe() {
  return (
    <div className="about-container">

      <div className="image-box">
        <img src={doctor} alt="smile" />
      </div>

      <div className="text-box">
        <h2>About Me</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

    </div>
  )
}

export default AboutMe