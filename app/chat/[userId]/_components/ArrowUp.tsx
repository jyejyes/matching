import clsx from "clsx";

export const ArrowUp = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "cursor-pointer w-6 h-6 rounded-full",
          disabled ? "bg-white" : "bg-pointBlue2"
        )}
      >
        <g id="icon_arrow_up_24">
          <path
            id="Vector 3"
            d="M17 11L12 6L7 11"
            className={disabled ? "stroke-gray4" : "stroke-white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector 4"
            d="M12 18V6"
            className={disabled ? "stroke-gray4" : "stroke-white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </button>
  );
};
