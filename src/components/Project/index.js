import React from "react";
import ProfilePic from "../../assets/images/profilepicture.jpg";
import Zombie_v from "../../assets/videos/CODZombiesGameplay.mp4";
import Zombie_p from "../../assets/images/CodZombiesCover.PNG";
import BloodReign_v from "../../assets/videos/BloodReignGamepley.mp4";
import BloodReign_p from "../../assets/images/BloodReignCover.PNG";
import Rogue_v from "../../assets/videos/ETG_Gameplay.mp4";
import Rogue_p from "../../assets/images/ETGCover.PNG";

function Project() {
  return (
    <main>
        <section id="about-me" className="aboutme">
        <div className="content-border">
          <h2>About Me</h2>
        </div>

        <div className="about-me-container">
          <div>
            <img src={ProfilePic}  />
          </div>

          <div>
            <p>
              Passionate programmer with 5+ years of experience in C# and C++. Began web development in 2021 at 
               <a href="https://bootcamp.learn.utoronto.ca/coding/" rel="norefferer" target="_blank">University of
               Toronto's Coding Bootcamp</a>. I have significant experience working in groups and collaborating 
               with teams on <a href="https://github.com/JonWaaler?tab=repositories" rel="norefferer" target="_blank">GitHub</a>.
               What gets me excited about coding is: trying to replicate something that I already enjoy, creating 
               challenging projects without fear of failure (that’s how we continuously improve) and lastly, 
               making something out of those random thoughts (what if there was something that did this...!).
            </p>
          </div>
        </div>
      </section>

      <section id="my-work" className="mywork">
        <div className="content-border">
          <h2>My Work</h2>
        </div>
        <div className="container-projects">
          <div>
            <a href="https://www.youtube.com/watch?v=svWEewbpUVc&ab_channel=Jon">
              <video src={Zombie_v} poster={Zombie_p} autoPlay loop muted playsInline/>
              <div>
                <h4>COD Zombies</h4>
                <p>Unity3D, C#</p>
              </div>
            </a>
          </div>
          <div>
              <a href="https://www.youtube.com/watch?v=JRiN59K-WQo&ab_channel=Jon"> 
                <video src={BloodReign_v} poster={BloodReign_p}  autoPlay loop muted playsInline/>
                <div>
                  <h4>BloodReign</h4>
                  <p>Unity3D, C#</p>
                </div>
              </a>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=hJSnYb3YkNk&ab_channel=Jon">
              <video src={Rogue_v} poster={Rogue_p} autoPlay loop muted playsInline/>
              <div>
                <h4>Rogue Like Game</h4>
                <p>Unity3D, C#</p>
              </div>
            </a>
        </div>
          <div>
            <a href="https://tech-blog-shorts.herokuapp.com/">
              <img src="https://camo.githubusercontent.com/d64b1db2361dcd112492cc190b84f470bf5e502985b7652152a486f139c48521/68747470733a2f2f692e696d6775722e636f6d2f6f6d503373747a2e706e67" />
              <div>
                <h4>Tech Blog Shorts</h4>
                <p>Handlebars, sequelize, express</p>
              </div>
            </a>
        </div>
          <div>
            <a href="https://github.com/JonWaaler/heroku-express-notetaker">
              <img src="https://camo.githubusercontent.com/2340d8de4086531b2f33f417b762c9385abbe993cea0663b605ad78676425453/68747470733a2f2f692e696d6775722e636f6d2f37686361334c7a2e706e67" />
              <div>
                <h4>Notetaker</h4>
                <p>express, sql database</p>
              </div>
            </a>
        </div>
        </div>
      </section>
    </main>
  );
}

export default Project;
