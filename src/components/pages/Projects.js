import React from "react";
import RunBuddy from "../../assets/images/RunBuddy.png";
import WorkDayScheduler from "../../assets/images/WorkDayScheduler.png";
import WeatherDashboard from "../../assets/images/WeatherDashboard.png";
import DinnerAroundTheWorld from "../../assets/images/DinnerAroundTheWorld.png";
import ExpressNoteTaker from "../../assets/images/ExpressNoteTaker.png";
import Project2 from "../../assets/images/Project2.png";

const Projects = () => {
  return (
    <section className="row row-cols-3">
      <div className="col">
        <img
          src={RunBuddy}
          alt="Web Page displaying fitness trainers, individual trainer bios, a sign up form, contact info, and a location map."
          title="run-buddy"
          id="run-buddy"
          className="img-thumbnail mx-1"
          height={500}
          width={500}
        />
        <a href="https://github.com/Crimsonsurf07/run-buddy">
          Link To Deployed Github Repo
        </a>
        <br />
        <a href="https://crimsonsurf07.github.io/run-buddy/">
          Link To Deployed Application
        </a>
      </div>
      <div className="col">
        <img
          src={WorkDayScheduler}
          alt="Front End Application allowing users to schedule their workday hour by hour. Users can add and delete or edit time slots as needed."
          title="work-day-sheduler"
          id="work-day-scheduler"
          className="img-thumbnail mx-1"
          height={500}
          width={500}
        />
        <a href="https://github.com/Crimsonsurf07/Hourly-Work-Day-Scheduler">
          Link To Deployed Github Repo
        </a>
        <br />
        <a href="https://crimsonsurf07.github.io/Hourly-Work-Day-Scheduler/">
          Link To Deployed Application
        </a>
      </div>
      <div className="col">
        <img
          src={WeatherDashboard}
          alt="Front End Application allowing users to search for live weather conditions per location information submitted by the user."
          title="weather-dashboard"
          id="weather-dashboard"
          className="img-thumbnail mx-1"
          height={500}
          width={500}
        />
        <a href="https://github.com/Crimsonsurf07/weather-dashboard">
          Link To Deployed Github Repo
        </a>
        <br />
        <a href="https://crimsonsurf07.github.io/weather-dashboard/">
          Link To Deployed Application
        </a>
      </div>
      <div className="col">
        <img
          src={DinnerAroundTheWorld}
          alt="Front End Application utilizing Third Party API's that allows users to search for drinks and food based on a series of options displayed in 2 seperate menus."
          title="dinner-around-the-world"
          id="dinner-around-the-world"
          className="img-thumbnail mx-1"
          height={500}
          width={500}
        />
        <a href="https://github.com/Crimsonsurf07/Dinner-Around-The-World">
          Link To Deployed Github Repo
        </a>
        <br />
        <a href="https://crimsonsurf07.github.io/Dinner-Around-The-World/">
          Link To Deployed Application
        </a>
      </div>
      <div className="col">
        <img
          src={ExpressNoteTaker}
          alt="Full Stack Application allowing users to create, save, update, and delete notes."
          href="https://crimsonsurf07.github.io/Express-Note-Taker/"
          title="express-note-taker"
          id="express-note-taker"
          className="img-thumbnail lx-1"
          height={500}
          width={500}
        />
        <a href="https://github.com/Crimsonsurf07/Express-Note-Taker">
          Link To Deployed Github Repo
        </a>
        <br />
        <a href="https://crimsonsurf07.github.io/Express-Note-Taker/">
          Link To Deployed Application
        </a>
      </div>
      <div className="g-col3">
        <img
          src={Project2}
          alt="Full Stack Application allowing users to sign up, add, edit, delete, and save memories from travel destinations. Users can also upload and store photos."
          title="project2"
          id="project2"
          className="img-thumbnail lx-1"
          height={500}
          width={500}
        />
        <a href="https://github.com/Crimsonsurf07/project2">
          Link To Deployed Github Repo
        </a>
        <br />
        <a href="https://crimsonsurf07.github.io/project2/">
          Link To Deployed Application
        </a>
      </div>
    </section>
  );
};

export default Projects;
