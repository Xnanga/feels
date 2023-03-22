import * as React from 'react';

const AddPlusCircle = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 12h4m0 0h4m-4 0v4m0-4V8m0 13a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
      stroke={props.colorHex}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AddPlusCircle;
