import React from "react";
import professor from "../images/professor.svg";
import roadToKnowledge from "../images/road_to_knowledge.svg";

export const schoolInfoSection = {
  title: "Welcome To",
  heading: "Devi Secondary School",
  subHeading: "Better Place For Quality Education",
  buttonText: "Know More",
  image: professor,
};

export const admissionInfoSection = {
  heading: "Admission Open!!",
  subHeading: "New intake for +2 students || 2077",
  buttonText: "Fill Form",
  image: roadToKnowledge,
};

export const programmes = [
  {
    name: "PlayGround",
    description: "For Kids",
  },
  {
    name: "Grade 1 to Grade 10",
    description: (
      <>
        <p>Grade 1 to Grade 10</p>
        <li>English Medium</li> <li>Nepali Medium</li>
      </>
    ),
  },
  {
    name: "Grade 12",
    description: (
      <>
        <p>Grade 11 and 12</p>
        <li>Commerce</li>
        <li>Education</li>
        <li>Humanities</li>
      </>
    ),
  },
];
