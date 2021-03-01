import React from 'react';
import styled from '../scss/FirstSection.module.scss';
import { useSelector } from 'react-redux';
import { selectCheck } from '../redux/checkedSlice';
import { useSpring, animated } from 'react-spring';
interface Props {}

export const FirstSection = (props: Props) => {
  const checked = useSelector(selectCheck);
  const styleProps = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  const title = 'Internship project';

  return (
    <section className={`${checked ? styled.dark : ''}`}>
      <animated.div style={styleProps}>
        <div className="container" style={styleProps}>
          <h1 className={styled.title}>{title}</h1>
        </div>
      </animated.div>
    </section>
  );
};
