import React, { useRef, useState } from "react";
import comments from "./comments";
import Comment from "./ui/Comment";
import InputBox from "../ui/InputBox";

const CommentBox = () => {
  const [cmnts, setCmnts] = useState(comments);
  const commentContainer = useRef(null);

  return (
    <div className="flex flex-col p-5 w-full gap-3">
      <div
        className="flex-grow w-full flex flex-col gap-6 items-start overflow-y-auto"
        ref={commentContainer}
      >
        {cmnts.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
      </div>
      <InputBox placeholder="Write a comment" setInput={setCmnts} />
    </div>
  );
};

export default CommentBox;
