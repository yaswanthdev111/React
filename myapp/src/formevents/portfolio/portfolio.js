import React from "react"
import "./portfolio.css"

function Portfolio(){

    return(
<>

 <div>


<div>
<h1 style={{display:"flex",justifyContent:"center",fontSize:"50px"}}>VENKATA YASWANTH BABU GUTLAPALLI</h1></div>


</div>
<div className="port">
{/* <span >ABOUT</span> */}
<a href="#bm1">ABOUT</a>
{/* <span>EDUCATION</span>
<span>SKILLS</span>
<span>PROJECTS</span>
<span>CONTACT</span> */}
<a href="#bm2">EDUCATION</a>
<a href="#bm3">SKILLS</a>
<a href="#bm4">PROJECTS</a>
<a href="#bm5">CONTACTS</a>

</div> 
<div className="summary">
<h1 id="bm1">PROFILE SUMMARY</h1>
<p>Highly motivated and detail-oriented web development enthusiastic, eager to learn and grow with a dynamic
team. Currently acquiring skills in HTML, CSS, JavaScript, Angular, and React, with a strong focus on responsive design
principles, version control, and testing frameworks. Passionate about developing strong logical, analytical, and
communication skills to articulate ideas clearly and collaborate effectively. Key Skills: Frontend development: Learning
HTML, CSS, JavaScript, Angular, and React, Responsive design principles: Familiarizing myself with adaptive user interfaces,
Version control: Gaining experience with Git, Testing frameworks: Exploring Jest, Mocha, Jasmine, etc. Communication and
teamwork: Developing strong logical, analytical, and communication skills.</p>


</div>

<div className="skills">
    <h1 id="bm3">SKILLS</h1>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>BOOTSTRAP</li>
<li>JavaScript</li>
<li>NODEJS</li>
<li>REACTJS</li>
<li>MYSQL</li>

</ul>



</div>

<div className="education">
<h1 id="bm2">EDUCATION</h1>
<p>B. Tech in ELECTRONICS AND COMMUNICATION ENGINEERING	           -    Percentage:80 
   <br></br>SRM INSTITUTE OF SCIENCE AND TECHNOLOGY                         -       JUNE 2020 – APRIL 2024                                                         JUNE 2020 – APRIL 2024

</p>


</div>

<div className="projects">
<h1 id="bm4">PROJECTS</h1>
<p><h1>SMART FARMING USING IOT</h1>:
•	Done a project to identify plant growth with the help of soil sensors, moisture sensors, humidity sensors.
•	This project helps farmers to decrease the labour, and they can get high yield with low cost of investment
•	Achieved accuracy in predictions with 98% and accuracy with90%, we used different type of technologies using
•	IOT and developed this project.

  <h1>HANGMAN GAME</h1>
•	Technologies Used: HTML, CSS, BOOTSTRAP, JAVASCRIPT
•	Description: Developed a responsive hangman game with frontend skills (HTML, CSS., BOOTSTRAP, JAVASCRIPT, Hangman Game is all about Guess the word by suggesting letters. Each incorrect guess will bring the hangman one step closer to being complete, Get ready to play the classic game of Hangman! Think you can guess the word before the hangman is complete? Take a guess by suggesting a letter. Be careful, though - each incorrect guess will bring the hangman to life.
</p>

</div>

<div style={{backgroundColor:"yellow"}}>
<h1 id="bm5">CONTACT INFORMATION</h1>

<p style={{fontSize:"20px",paddingLeft:"20px",display:"flex",justifyContent:"center"}}>VENKATA YASWANTH BABU GUTLAPALLI</p>
<p style={{fontSize:"20px",paddingLeft:"20px",display:"flex",justifyContent:"center"}}><a href="">MOBILE-NO:7729038830</a></p>
<p style={{fontSize:"20px",paddingLeft:"20px",display:"flex",justifyContent:"center"}}><a href="">MAIL-venkatgutl@gmail.com</a></p>
<p style={{fontSize:"20px",paddingLeft:"20px",display:"flex",justifyContent:"center"}}><a href="">GITHUB-https://github.com/</a></p>

<p style={{fontSize:"20px",paddingLeft:"20px",display:"flex",justifyContent:"center"}}><a href="">LINKDIN-www.linkedin.com/in/venkata-yaswanth-babu-gutlapalli-2aa437304</a></p>



</div>

</>
    )
}

export default Portfolio