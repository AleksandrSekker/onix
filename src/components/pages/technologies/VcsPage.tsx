import React from "react";
import { useSelector } from "react-redux";
import { selectCheck } from "../../../redux/checkedSlice";
import styled from "../../../scss/ComonentDetail.module.scss";

export const VcsPage = () => {
  const checked = useSelector(selectCheck);
  const vcs = "VCS";
  return (
    <section className={checked ? styled.dark : ""}>
      <div className='container'>
        <h1 className={styled.title}>{vcs}</h1>
        <p className={styled.content}>
          In software engineering, version control (also known as revision
          control, source control, or source code management) is a class of
          systems responsible for managing changes to computer programs,
          documents, large web sites, or other collections of information.
          Version control is a component of software configuration
          management.[1] Changes are usually identified by a number or letter
          code, termed the 'revision number', 'revision level', or simply
          'revision'. For example, an initial set of files is 'revision 1'. When
          the first change is made, the resulting set is 'revision 2', and so
          on. Each revision is associated with a timestamp and the person making
          the change. Revisions can be compared, restored, and with some types
          of files, merged. The need for a logical way to organize and control
          revisions has existed for almost as long as writing has existed, but
          revision control became much more important, and complicated, when the
          era of computing began. The numbering of book editions and of
          specification revisions are examples that date back to the print-only
          era. Today, the most capable (as well as complex) revision control
          systems are those used in software development, where a team of people
          may concurrently make changes to the same files. Version control
          systems (VCS) are most commonly run as stand-alone applications, but
          revision control is also embedded in various types of software such as
          word processors and spreadsheets, collaborative web docs[2] and in
          various content management systems, e.g., Wikipedia's page history.
          Revision control allows for the ability to revert a document to a
          previous revision, which is critical for allowing editors to track
          each other's edits, correct mistakes, and defend against vandalism and
          spamming in wikis.
        </p>
      </div>
    </section>
  );
};