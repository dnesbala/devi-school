import React from "react";

import NoticeCard from "../NoticeCard/NoticeCard";
import { Heading } from "../../globalStyles";
import { notices } from "../../data/notices";
import { NoticeContainer } from "./Notices.elements";

const Notices = () => {
  return (
    <>
      <Heading>Notices</Heading>
      <NoticeContainer>
        {notices.map((notice, i) => (
          <NoticeCard key={i} title={notice.title} image={notice.image} />
        ))}
      </NoticeContainer>
    </>
  );
};

export default Notices;
