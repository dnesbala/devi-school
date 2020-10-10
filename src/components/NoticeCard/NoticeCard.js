import React from "react";

import noticePin from "../../images/notice_pin.png";
import noImage from "../../images/no_image.png";
import { Button } from "../../globalStyles";
import {
  Card,
  NoticePin,
  NoticeText,
  NoticeImage,
  NoticeTitle,
} from "./NoticeCard.elements";

const NoticeCard = ({ title, image }) => {
  return (
    <Card>
      <NoticePin src={noticePin} />
      <NoticeText>Notice</NoticeText>
      <NoticeImage src={image} />
      <NoticeTitle>{title}</NoticeTitle>
      <Button>Read More</Button>
    </Card>
  );
};

NoticeCard.defaultProps = {
  image: noImage,
};

export default NoticeCard;
