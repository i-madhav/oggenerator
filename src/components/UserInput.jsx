import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();

  const handleData = () => {
    if (!title || !content || !image || !logo) return alert("Fields should not be empty");
    navigate("/preview", { state: { title, content, image, logo } });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-2xl border border-black rounded-md space-y-4 w-[80%] md:w-[50%] p-4">
        <div className="flex flex-col items-start space-y-1">
          <label className="text-xl font-semibold">Title</label>
          <input
            type="text"
            placeholder="Me very good dev!!"
            className="outline-none border border-gray-400 p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start space-y-3">
          <label className="text-xl font-semibold">Content</label>
          <input
            type="text"
            placeholder="I want to become intern at MEDIAL"
            className="outline-none border border-gray-400 p-2 w-full"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start space-y-3">
          <label className="text-xl font-semibold">Image Url</label>
          <input
            type="text"
            placeholder="MEDIALIntern.png / Link"
            className="outline-none border border-gray-400 p-2 w-full"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start space-y-3">
          <label className="text-xl font-semibold">Logo Url</label>
          <input
            type="text"
            placeholder="Shrek.png / Link"
            className="outline-none border border-gray-400 p-2 w-full"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
        </div>
        <div className="pt-5">
          <button className="bg-black text-white p-2 rounded-md w-full" onClick={handleData}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
