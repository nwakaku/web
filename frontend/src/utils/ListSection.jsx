import React from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from "@/icons/HomeIcon";
import { Separator } from "@/components/ui/separator";
import { PiBookBookmarkDuotone } from "react-icons/pi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

const ListSection = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-row justify-between h-screen w-full my-3 ">
      {/* menu items */}
      <ul className="flex flex-col grow">
        <li>
          <Link
            href="/"
            className={`flex gap-4 justify-start items-center py-5 px-1 cursor-pointer hover:text-blue ${
              pathname === "/" ? "bg-[#f7fafc] text-blue" : ""
            }`}
          >
            <HomeIcon />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link
            href="/Bookmark"
            className={`flex gap-4 items-center cursor-pointer py-5 px-1 hover:text-blue ${
              pathname === "/Bookmark" ? "bg-[#f7fafc] text-blue" : ""
            }`}
          >
            <PiBookBookmarkDuotone size={20} />
            <p>BookMarked</p>
          </Link>
        </li>
        <li>
          <Link
            href="/Sessions"
            className={`flex gap-4 items-center py-5 px-1 cursor-pointer ${
              pathname === "/Sessions" ? "bg-[#f7fafc] text-blue" : ""
            } hover:text-blue`}
          >
            <BsJournalBookmarkFill size={20} />
            <p>Sessions</p>
          </Link>
        </li>
        <li>
          <Link
            href="/setting"
            className={`flex gap-4 justify-start items-center py-5 px-1 cursor-pointer hover:text-blue ${
              pathname === "/setting" ? "bg-[#f7fafc] text-blue" : ""
            }`}
          >
            <IoMdSettings size={20} />
            <p>Settings</p>
          </Link>
        </li>
        <Separator orientation="horizontal" />

        <li>
          <Link
            href="/Manager"
            className={`flex gap-4 justify-start items-center py-5 px-1 cursor-pointer hover:text-blue ${
              pathname === "/Manager" ? "bg-[#f7fafc] text-blue" : ""
            }`}
          >
            <CgProfile size={20} />
            <p>Manager</p>
          </Link>
        </li>
        <li class="flex gap-4 items-center">
          <Link
            href="/Help"
            className={`flex gap-4 justify-start items-center py-5 px-1 cursor-pointer hover:text-blue ${
              pathname === "/Help" ? "bg-[#f7fafc] text-blue" : ""
            }`}
          >
            <IoMdHelpCircleOutline size={20} />
            <p>Help</p>
          </Link>
        </li>
        <li class="flex gap-4 items-center">
          <Link
            href="/FeedBack"
            className={`flex gap-4 justify-start items-center py-5 px-1 cursor-pointer hover:text-blue ${
              pathname === "/FeedBack" ? "bg-[#f7fafc] text-blue" : ""
            }`}
          >
            <MdOutlineFeedback size={20} />
            <p>Send FeedBack</p>
          </Link>
        </li>
      </ul>

      <Separator orientation="vertical" className="grow-0 mx-2" />
    </div>
  );
};

export default ListSection;
