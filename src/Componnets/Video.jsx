import React, { useState } from "react";
import "../Componnets/Video.css";

const Video = ({
  name,
  population,
  gdp,
  id,
  addVideos,
  setAddVideos,
  videoEdit,
}) => {
  const [edit, setEdit] = useState(addVideos);

  const handleVideoDel = (id) => {
    setAddVideos(addVideos.filter((item) => item.id !== id));
    console.log(id);
  };

  const handleVideoEdit = (id) => {
    console.log(id);
    // setEdit(edit.find((data) => data.id === id));
    console.log(edit.find((data) => data.id === id));
    videoEdit(edit.find((data) => data.id === id));
  };

  return (
    <div className="video">
      <button onClick={() => handleVideoDel(id)}>Delete</button>
      <button onClick={() => handleVideoEdit(id)}>Edit</button>
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      <h3> {name} </h3>
      <div className="video_flex">
        <h3> Population {population} </h3>
        <h3>GDP {gdp} </h3>
      </div>
    </div>
  );
};

export default Video;
