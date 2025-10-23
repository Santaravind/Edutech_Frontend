import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ForensicIFrame() {
  const navigate = useNavigate();
  const [lockedVideos, setLockedVideos] = useState({});

  const handalDoubt = (e) => {
    e.preventDefault();
    navigate("/frameDoubt");
  };

  const handalNotes=()=>{
    toast.success("Commint very soon !!!")
  }
  const videos = [
    {
      id: 1,
      title: "lecture #1",
      youtubeId: "JJoLx2LOOMo",
      url: "https://www.youtube.com/embed/JJoLx2LOOMo",
    },
    {
      id: 2,
      title: "Lecture #2",
      youtubeId: "bdcWLxX9MzU",
      url: "https://www.youtube.com/embed/bdcWLxX9MzU",
    },
    {
      id: 3,
      title: "lecture #3 comming soon !!!",
      youtubeId: "tgbNymZ7vqY",
      url: "",
      //   url: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
  ];

  const toggleLock = (videoId) => {
    setLockedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

  const LockedPlaceholder = ({ title }) => (
    <div className="flex flex-col items-center justify-center h-80 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center p-5">
      <div className="text-4xl mb-4">🔒</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="opacity-90 text-sm">
        This video is currently locked. Click unlock to view.
      </p>
    </div>
  );

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Forensic Science Course Video
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center p-2 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">
                {video.title}
              </h3>
              <button
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 hover:scale-105 ${
                  lockedVideos[video.id]
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
                onClick={() => toggleLock(video.id)}
              >
                {lockedVideos[video.id] ? "🔒 Lock" : "🔓 Unlock"}
              </button>
            </div>

            <div className="bg-black">
              {lockedVideos[video.id] ? (
                <LockedPlaceholder title={video.title} />
              ) : (
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  className="w-full h-80"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
             
            </div>
             <div className="flex gap-10 justify-between mt-1 mb-2">
                <div className="ml-4">
                  <h1
                    className="text-center text-1xl font-bold p-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 cursor-pointer "
                    onClick={handalDoubt}
                  >
                    Doubt Class
                  </h1>
                </div>
                <div className="mr-4">
               <h1
                    className="text-center text-1xl font-bold p-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 cursor-pointer "
                    onClick={handalNotes}>
                      Notes</h1>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForensicIFrame;
