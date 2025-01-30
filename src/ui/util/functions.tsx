import React from "react";

export function emailToId(str: string) {
  const lastAtIndex = str.lastIndexOf('@');
  if (lastAtIndex !== -1) {
    return str.substring(0, lastAtIndex); 
  } else {
    return str;
  }
}

export function renderWithLineBreaks(str: string): JSX.Element {
  const lines = str.split('\n');
  return (
    <p>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
}