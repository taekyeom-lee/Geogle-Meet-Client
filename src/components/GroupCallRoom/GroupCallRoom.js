import React from "react";
import ConversationButtons from "../ConversationButtons/ConversationButtons";

import "./GroupCallRoom.css";
import GroupCallVideo from "./GroupCallVideo";

const GroupCallRoom = ({ groupCallStreams }) => {
  return (
    <div className="group_call_room_container">
      <span className="group_call_title">Group Call</span>
      <div className="group_call_videos_container">
        {groupCallStreams.map((streams) => {
          return <GroupCallVideo key={streams.id} stream={streams} />;
        })}
      </div>
      <ConversationButtons />
    </div>
  );
};

export default GroupCallRoom;
