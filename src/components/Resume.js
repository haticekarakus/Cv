import Card from "./Card";
import "./Resume.css";
import Information from "./Information";
import Experiences from "./Experiences";
import Course from "./Course";
import Projects from "./Projects";
function Resume(props) {
  return (
    <Card className="resume">
        <div className="header"><h1>Hatice Karakuş</h1></div>
        
      <div className="resume__information">
        <div className="column">
          <h3>Personal Information</h3>
          <hr></hr>
          <Information information={props.item.information} />
        </div>

        <br></br>
        <div className="column1">
          <h3>Courses/Certificates </h3>
          <hr></hr>
          <Course courses={props.item.courses} />
        </div>
      </div>

      <div className="resume__experience">
        <div className="column">
          <h3>Experiences</h3>
          <hr></hr>
          <Experiences experiences={props.item.experiences} />
        </div>

        <div className="column1">
          <h3>Projects </h3>
          <hr></hr>
          <Projects projects={props.item.projects} />
        </div>
      </div>

      <div className="resume__education">
        <div className="column">
          <h3>Education</h3>
          <hr></hr>
          {props.item.education}
        </div>

        <div className="column">

        </div>
      </div>
    </Card>
  );
}
export default Resume;
