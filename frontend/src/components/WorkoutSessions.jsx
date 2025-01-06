import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1 className="section-title">Top Workout Sessions</h1>
        <p className="section-description">
          Push your limits and achieve your fitness goals with our expertly curated workout sessions. Whether you're a beginner or a pro, there's something for everyone.
        </p>
        <img src="/img5.jpg" alt="Intense Workout Session" className="workout-image" />
      </div>
      <div className="wrapper">
        <h1 className="section-title">Featured Bootcamps</h1>
        <p className="section-description">
          Join our high-energy bootcamps designed to help you stay motivated and push your boundaries. Each bootcamp is tailored to deliver results in a fun and dynamic environment.
        </p>
        <div className="bootcamps">
          <div className="bootcamp-card">
            <h4>Strength & Conditioning</h4>
            <p>
              Build strength, increase endurance, and challenge your limits with our specially designed strength training bootcamps.
            </p>
          </div>
          <div className="bootcamp-card">
            <h4>HIIT Blast</h4>
            <p>
              Burn calories and improve your cardiovascular health with our high-intensity interval training sessions. Perfect for a quick but effective workout!
            </p>
          </div>
          <div className="bootcamp-card">
            <h4>Yoga & Flexibility</h4>
            <p>
              Enhance your flexibility and mindfulness with our calming yoga sessions. Suitable for all levels of experience.
            </p>
          </div>
          <div className="bootcamp-card">
            <h4>Cardio Core</h4>
            <p>
              Boost your stamina and strengthen your core muscles with our fun and engaging cardio-focused bootcamps.
            </p>
          </div>
          <div className="bootcamp-card">
            <h4>Functional Fitness</h4>
            <p>
              Improve your everyday movements and build a strong foundation with
              our functional fitness bootcamps. Perfect for overall well-being!
            </p>
          </div>
          <div className="bootcamp-card">
            <h4>Outdoor Adventure</h4>
            <p>
              Take your fitness journey outdoors with adventure-based workouts.
              Enjoy the fresh air while improving your strength and stamina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
