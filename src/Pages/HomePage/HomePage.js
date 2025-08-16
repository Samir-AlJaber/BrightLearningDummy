import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main">
      <section className="style">
        <h1>Bright learning, a guidance for students</h1>
        <p>
          Search and find the perfect lessons for your corresponding classes and enlightening your learning journey
        </p>
        <div className="class-btn">
          <button className="class68-btn">Class 6-8</button>
          <button className="class910-btn">Class 9-10</button>
          <button className="class1112-btn">Class 11-12</button>
        </div>
      </section>

      <section className="topics">
        <h2>Courses and topics</h2>
        <h3>Starting your academic journey, enrich your learning core</h3>
        <p>
          Bright learning gives you a complete guidance according to your class and courses, providing video tutorials, 
          notes and expert admin guidance
        </p>
        <div className="topic-select">
          <div className="select">
            <h4>Which topic is in your mind?</h4>
            <p>
              Look for your subjects, topics and guidance according to your class 
              with necessaary notes and tutorials
            </p>
          </div>
          <div className="choose">
            <h4>Not satisfied?Contact admin</h4>
            <p>
              Communicate with admins directly through our integrated Q&A system. Timely response,
              ask questions, and stay updated.
            </p>
          </div>
          <div className="select">
            <h4>See what others think about us</h4>
            <p>
              Read reviews and ratings from other students to make informed decisions. Share
              your own experiences to help others.
            </p>
          </div>
        </div>
      </section>

      <section className="final-btn">
        <h2>Want to Enlarge Your Learning Journey?</h2>
        <p>
          Start your learning journey with bright learning and widen your world 
          of knowledge to succeed in your academic career. Never stop learning
        </p>
        <button className="start-btn">Let's Begin</button>
      </section>
    </div>
  );
};

export default HomePage;