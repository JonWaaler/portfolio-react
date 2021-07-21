import React from "react";
import ProfilePic from "../../assets/images/profilepicture.jpg";

function Project() {
  return (
    <main>
        <section id="about-me" className="aboutme">
        <div className="content-border"><h2>About Me</h2></div>

        <div className="about-me-container">
          <div><img src={ProfilePic}  /></div>

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
    </main>
  );
}

export default Project;
