import React from "react";
import styled from "../scss/FirstSection.module.scss";
import { useSelector } from "react-redux";
import { selectCheck } from "../redux/checkedSlice";
import { useSpring, animated } from "react-spring";
import styles from "../scss/FirstSection.module.scss";
export const FirstSection = () => {
  const checked = useSelector(selectCheck);
  const styleProps = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  const title = "Internship project (current stage fuctionality)";

  return (
    <section className={`${checked ? styled.dark : ""}`}>
      <animated.div style={styleProps}>
        <div className='container' style={styleProps}>
          <h1 className={styled.title}>{title}</h1>
          <div className={styles.flex}>
            <div>
              <p>Rest Country.</p>
              <p>User able to:</p>
              <p> See all countries from the API on the homepage</p>
              <p>Search for a country using an input field</p>
              <p>
                Click on a country to see more detailed information on a
                separate page
              </p>
            </div>
            <div>
              <p>Pomodoro App</p>
              <p>User able to:</p>
              <p> See all task from the API</p>
              <p>Add and delete task to db</p>
              <p>Start or stop timer</p>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};
