import React from "react";
import styled from "./scss/ComonentDetail.module.scss";
import { useSelector } from "react-redux";
import { selectCheck } from "../../redux/checkedSlice";

export const GitPage = () => {
  const checked = useSelector(selectCheck);
  const git = "Git";
  return (
    <section className={checked ? styled.dark : ""}>
      <div className='container'>
        <h1 className={styled.title}>{git}</h1>
        <p className={styled.content}>
          Git (/ɡɪt/)[7] is a distributed version-control system for tracking
          changes in any set of files, originally designed for coordinating work
          among programmers cooperating on source code during software
          development.[8] Its goals include speed, data integrity, and support
          for distributed, non-linear workflows[clarification
          needed].[9][10][11] Git was created by Linus Torvalds in 2005 for
          development of the Linux kernel, with other kernel developers
          contributing to its initial development.[12] Since 2005, Junio Hamano
          has been the core maintainer. As with most other distributed
          version-control systems, and unlike most client–server systems, every
          Git directory on every computer is a full-fledged repository with
          complete history and full version-tracking abilities, independent of
          network access or a central server.[13] Git is free and open-source
          software distributed under GNU General Public License Version 2.
        </p>
      </div>
    </section>
  );
};
