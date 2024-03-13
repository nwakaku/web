import React from "react";
export const BookmarkIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 25}
      height={size || height || 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M21.5 7V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V7C3.5 4 5 2 8.5 2H16.5C20 2 21.5 4 21.5 7Z"
        fill="#292D32"
      />
      <path
        d="M16 2V9.85999C16 10.3 15.48 10.52 15.16 10.23L12.84 8.09C12.65 7.91 12.35 7.91 12.16 8.09L9.84003 10.23C9.52003 10.53 9 10.3 9 9.85999V2H16Z"
        fill="#292D32"
      />
      <path
        d="M18 14.75H13.75C13.34 14.75 13 14.41 13 14C13 13.59 13.34 13.25 13.75 13.25H18C18.41 13.25 18.75 13.59 18.75 14C18.75 14.41 18.41 14.75 18 14.75Z"
        fill="#292D32"
      />
      <path
        d="M18 18.75H9.5C9.09 18.75 8.75 18.41 8.75 18C8.75 17.59 9.09 17.25 9.5 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
