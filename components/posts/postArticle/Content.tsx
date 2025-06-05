import type React from "react";
interface ContentProps {
  content: string;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      style={{ lineHeight: "1.6", fontSize: "1.1rem" }}
    />
  );
};

export default Content;
