import React, { useState, useEffect } from "react";
import "../Componnets/Videoform.css";

const VideoForm = ({ formVideoGet, editVideo, updateVideo }) => {
  const data = {
    gdp: "",
    name: "",
    population: "",
  };

  const [formVideo, setFromVideo] = useState(data);

  const handleVideoChange = (e) => {
    setFromVideo({ ...formVideo, [e.target.name]: e.target.value });
  };
  const handlformClick = (e) => {
    e.preventDefault();

    if (editVideo) {
      updateVideo(formVideo);
    } else {
      formVideoGet(formVideo);
      // setFromVideo(data);
    }
  };

  useEffect(() => {
    setFromVideo(editVideo);
  }, [editVideo]);

  return (
    <div className="video_form">
      <form>
        <input
          type="text"
          placeholder="Country Name"
          name="name"
          onChange={handleVideoChange}
          value={formVideo.name}
        />
        <input
          type="text"
          placeholder="Country Population"
          name="population"
          onChange={handleVideoChange}
          value={formVideo.population}
        />
        <input
          type="text"
          placeholder="GDP"
          name="gdp"
          onChange={handleVideoChange}
          value={formVideo.gdp}
        />
        <button className="btn" onClick={handlformClick}>
          {editVideo ? "Edit" : "ADD"}
        </button>
        {/* <button onClick={handleUpdate}>Updarwe</button> */}
      </form>
    </div>
  );
};

export default VideoForm;
