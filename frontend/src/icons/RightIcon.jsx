import React from "react";
export const RightIcon = ({
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
      width={size || width || 16}
      height={size || height || 16}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.739992 9.28C0.549992 9.28 0.359993 9.21 0.209993 9.06C-0.0800073 8.77 -0.0800073 8.29 0.209993 8L3.20999 5L0.209993 2C-0.0800073 1.71 -0.0800073 1.23 0.209993 0.940004C0.499993 0.650004 0.979993 0.650004 1.26999 0.940004L4.79999 4.47C5.08999 4.76 5.08999 5.24 4.79999 5.53L1.26999 9.06C1.11999 9.21 0.929992 9.28 0.739992 9.28Z"
        fill="#3C3C43"
        fill-opacity="0.6"
      />
    </svg>
  );
};
