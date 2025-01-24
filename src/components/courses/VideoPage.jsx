import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import topic_videos_1 from "./topic_videos_1.json";
import topic_videos_2 from "./topic_videos_2.json";
import topic_videos_3 from "./topic_videos_3.json";
import topic_videos_4 from "./topic_videos_4.json";
import topic_videos_5 from "./topic_videos_5.json";
import topic_videos_6 from "./topic_videos_6.json";
// Assuming these are your courses
const courses = [
    { title: "Web Development", data: topic_videos_1 },
    { title: "Mobile Development", data: topic_videos_2 },
    { title: "Data Structures", data: topic_videos_3 },
    { title: "Machine Learning", data: topic_videos_4 },
    { title: "Object Oriented Programming", data: topic_videos_5 },
    { title: "Artificial Intelligence", data: topic_videos_6 },
];

const VideoPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const course = courses[id - 1]; // Adjust to 0-based index for array access
    if (course) {
      setData(course.data); // Directly use the imported JSON data
    }
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Topics for {courses[id - 1].title} <a href="http://127.0.0.1:8080/get_recommendation" className="primary-btn" >Summary</a>  <a href="http://127.0.0.1:8000/" className="primary-btn cursor-pointer" >Doubts</a>    <a href="http://127.0.0.1:5000/"  className="primary-btn cursor-pointer">   Quiz</a></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((topic, index) => {
          // Extract YouTube video ID from URL
          const videoId = topic.url.split("v=")[1]?.split("&")[0]; // Extracts the video ID
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <div
              key={index}
              className="cursor-pointer flex flex-col items-center justify-center"
              onClick={() => window.open(topic.url, "_blank")} // Open the URL in a new tab
            >
              {/* Display the YouTube thumbnail */}
              <img
                src={thumbnailUrl}
                alt={topic.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              
              <h2 className="text-center text-lg font-semibold">{index+1} {topic.topic}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoPage;
