import BookmarkCard from "@/utils/BookmarkCard";
import ListSection from "@/utils/ListSection";

import React from "react";
import { BookmarkEmpty } from "./emptystate/bookmarkEmpty";
import { isUserValid } from "../../../backend/src/pocketbase";

const Bookmarks = () => {
  return (
    <>
      <div className="h-screen relative flex flex-row  py-1 overflow-contain">
        <div className="hidden md:inline w-1/4 ">
          <ListSection />
        </div>
        <div className=" w-full md:w-3/4 flex flex-col px-1 overflow-y-auto custom-scrollbar">
          <div className="p-4 ">
            <h2 className="text-base font-bold">BookMark</h2>
          </div>
          {isUserValid ? (
            <BookmarkCard />
          ) : (
            <div className="flex justify-center items-center h-full">
              {/* Render BookmarkEmpty when no bookmarks exist */}
              <BookmarkEmpty />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
