import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../scss/Header.module.scss";
import { Link } from "react-router-dom";
import { switching, selectCheck } from "../redux/checkedSlice";
import { motion } from "framer-motion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  const [isActive, setisActive] = useState(false);
  const [navfalse, setnavfalse] = useState(false);
  const [isHover, toggleHover] = React.useState(false);
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  const itemMenuAnimate = {
    hover: { scale: 1.2, originX: 0, transition: { duration: 1 } },
  };
  const checked = useSelector(selectCheck);
  const dispatch = useDispatch();
  const hamburgerHandler = () => {
    isActive ? setisActive(false) : setisActive(true);
    navfalse ? setnavfalse(false) : setnavfalse(true);
  };

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const home: String = "Home";
  const versionControl: String = "Version Control";
  const git: String = "Git";
  const node: String = "Node";
  const npm: String = "Npm";
  const html: String = "HTML";
  const css: String = "CSS";
  const array: String = "Array Biography";

  return (
    <>
      <header className={checked ? styles.dark : ""}>
        <div className={styles.header__container}>
          <div className={styles.container__for__logo__and__switch}>
            <Link to='/onix' className={styles.link__decoration}>
              <p className={styles.logo}>{home}</p>
            </Link>

            <div>
              <label className={styles.switch}>
                <input
                  type='checkbox'
                  checked={checked}
                  onChange={() => dispatch(switching())}
                />
                <span className={`${styles.slider} ${styles.round}`}></span>
              </label>
            </div>
          </div>
          <div className={styles.navigation__content}>
            <motion.div
              className='menu-item'
              onHoverStart={toggleHoverMenu}
              onHoverEnd={toggleHoverMenu}>
              <p>
                Technologies <FontAwesomeIcon icon={faChevronDown} />
              </p>
              <motion.div
                initial='exit'
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}>
                <div>
                  <Link to='/vcs' className={styles.link__decoration}>
                    <motion.p variants={itemMenuAnimate} whileHover='hover'>
                      {versionControl}
                    </motion.p>
                  </Link>
                  <Link to='/git' className={styles.link__decoration}>
                    <motion.p variants={itemMenuAnimate} whileHover='hover'>
                      {git}
                    </motion.p>
                  </Link>
                  <Link to='/node' className={styles.link__decoration}>
                    <motion.p variants={itemMenuAnimate} whileHover='hover'>
                      {node}
                    </motion.p>
                  </Link>
                  <Link to='/npm' className={styles.link__decoration}>
                    <motion.p variants={itemMenuAnimate} whileHover='hover'>
                      {npm}
                    </motion.p>
                  </Link>
                  <Link to='/html' className={styles.link__decoration}>
                    <motion.p variants={itemMenuAnimate} whileHover='hover'>
                      {html}
                    </motion.p>
                  </Link>
                  <Link to='/css' className={styles.link__decoration}>
                    <motion.p variants={itemMenuAnimate} whileHover='hover'>
                      {css}
                    </motion.p>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            <Link to='/array' className={styles.link__decoration}>
              <motion.p variants={itemMenuAnimate} whileHover='hover'>
                {array}
              </motion.p>
            </Link>
          </div>
          <div
            className={`${styles.hamburger}
           ${isActive ? styles.open : ""}
           `}
            onClick={hamburgerHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          className={`${styles.navcontent__vertical} ${
            navfalse ? styles.nav__false : ""
          } ${checked ? styles.dark : ""}`}>
          <Link to='/vcs' className={styles.link__decoration}>
            <p>{versionControl}</p>
          </Link>
          <Link to='/git' className={styles.link__decoration}>
            <p>{git}</p>
          </Link>
          <Link to='/node' className={styles.link__decoration}>
            <p>{node}</p>
          </Link>
          <Link to='/npm' className={styles.link__decoration}>
            <p>{npm}</p>
          </Link>
          <Link to='/html' className={styles.link__decoration}>
            <p>{html}</p>
          </Link>
          <Link to='/css' className={styles.link__decoration}>
            <p>{css}</p>
          </Link>
          <Link to='/array' className={styles.link__decoration}>
            <p>{array}</p>
          </Link>
        </div>
      </header>
    </>
  );
};
