import React from "react";
import styled from "./scss/ComonentDetail.module.scss";
import { useSelector } from "react-redux";
import { selectCheck } from "../../redux/checkedSlice";

export const NpmPage = () => {
  const checked = useSelector(selectCheck);
  const npm = "Package manager, npm";
  return (
    <section className={checked ? styled.dark : ""}>
      <div className='container'>
        <h1 className={styled.title}>{npm}</h1>
        <p className={styled.content}>
          A package manager or package-management system is a collection of
          software tools that automates the process of installing, upgrading,
          configuring, and removing computer programs for a computer's operating
          system in a consistent manner.[1] A package manager deals with
          packages, distributions of software and data in archive files.
          Packages contain metadata, such as the software's name, description of
          its purpose, version number, vendor, checksum (preferably a
          cryptographic hash function), and a list of dependencies necessary for
          the software to run properly. Upon installation, metadata is stored in
          a local package database. Package managers typically maintain a
          database of software dependencies and version information to prevent
          software mismatches and missing prerequisites. They work closely with
          software repositories, binary repository managers, and app stores.
          Package managers are designed to eliminate the need for manual
          installs and updates. This can be particularly useful for large
          enterprises whose operating systems are typically consisting of
          hundreds or even tens of thousands of distinct software packages.[2].
          Npm (originally short for Node Package Manager)[4] is a package
          manager for the JavaScript programming language. npm, Inc. is a
          subsidiary of GitHub, an American multinational corporation that
          provides hosting for software development and version control with the
          usage of Git. It is the default package manager for the JavaScript
          runtime environment Node.js. It consists of a command line client,
          also called npm, and an online database of public and paid-for private
          packages, called the npm registry. The registry is accessed via the
          client, and the available packages can be browsed and searched via the
          npm website. The package manager and the registry are managed by npm,
          Inc.
        </p>
      </div>
    </section>
  );
};
