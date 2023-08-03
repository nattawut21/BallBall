import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const buttonStyle = {
  backgroundColor: "RoyalBlue",
  color: "white",
  border: "none",
  borderRadius: "4px",
  padding: "4px 8px",
  margin: "0 1px"
};

export default function Button({ children, onClick }: ButtonProps): JSX.Element {
  // hover effect
  const onHover = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = "Navy";
  };
  const onHoverEnd = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = "RoyalBlue";
  };

  // click effect
  const onMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = "RoyalBlue";
  };
  const onMouseUp = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = "Navy";
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {children}
    </button>
  );
}
