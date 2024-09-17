import React from "react";
import { useSelector } from "react-redux";
import { PostStatus, selectAll } from "../slices/CrudifSlice";
import Timelayout from "./Time";
import { Link } from "react-router-dom";

function Home() {
  const allPost = useSelector(selectAll);
  const postStatus = useSelector(PostStatus);

  if (postStatus === "pending") {
    return (
      <div className="min-h-screen w-full top-2 flex items-center justify-center">
        <p className=" text-4xl">Loading..</p>
      </div>
    );
  }

  return (
    <>
      <div className="mr-5 flex items-center justify-center w-full h-full">
        <div className="grid grid-cols-3 gap-4">
          {allPost &&
            allPost.map((item) => (
              <div
                key={item._id}
                className="bg-blue-200 h-full w-full rounded ml-2 p-4 hover:scale-105 transition-transform"
              >
                <h2 className="text-2xl mb-2">
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </h2>
                <p className="mb-2">{item.body}</p>
                <Timelayout time={item.createdAt || item.updatedAt} />
                <br />
                <Link
                  to={`/viewpost/${item._id}`}
                  className="underline x hover:text-orange-300"
                >
                  View Post
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
