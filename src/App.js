import React, { useState } from "react";
import Video from "./Componnets/Video";
import data from "./Componnets/Data";
import "./App.css";
import VideoForm from "./Componnets/VideoForm";

const App = () => {
  const [addVideos, setAddVideos] = useState(data);
  const [editVideo, setEditVideo] = useState("");

  const handleAddVideos = () => {
    setAddVideos([
      ...addVideos,
      {
        id: Math.floor(Math.random() + addVideos.length + 1),
        name: "China",
        population: "100M",
        gdp: 50,
      },
    ]);
  };
  const formVideoGet = (video) => {
    console.log(video);
    setAddVideos([...addVideos, { ...video, id: addVideos.length + 1 }]);
  };

  const videoEdit = (getvideo) => {
    setEditVideo(getvideo);
  };

  const updateVideo = (video) => {
    const index = addVideos.findIndex((dataarray) => dataarray.id === video.id);
    const newVideos = [...addVideos];
    newVideos.splice(index, 1, video);
    setAddVideos(newVideos);
    
  };

  return (
    <>
      <VideoForm
        formVideoGet={formVideoGet}
        editVideo={editVideo}
        updateVideo={updateVideo}
      ></VideoForm>

      <div className="app_flex">
        {addVideos.map((item) => (
          <Video
            key={item.id}
            name={item.name}
            population={item.population}
            gdp={item.gdp}
            id={item.id}
            addVideos={addVideos}
            setAddVideos={setAddVideos}
            videoEdit={videoEdit}
          ></Video>
        ))}
      </div>
      <button onClick={handleAddVideos}>Add Videos</button>
    </>
  );
};

export default App;
