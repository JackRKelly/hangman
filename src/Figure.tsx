import { FC } from "react";

interface Props {
  incorrectCount: number;
}

export const Figure: FC<Props> = ({ incorrectCount }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220.81 233.32"
    >
      <line className="cls-1" x1="5" y1="228.32" x2="155.2" y2="228.32" />
      <line className="cls-1" x1="80.1" y1="5" x2="184.84" y2="5" />
      <line className="cls-1" x1="184.84" y1="5" x2="184.84" y2="29.51" />
      <line className="cls-1" x1="80.1" y1="5" x2="80.1" y2="228.32" />
      <circle
        className={`cls-2 ${incorrectCount >= 1 ? "shown" : ""}`}
        cx="184.84"
        cy="53.99"
        r="17.79"
      />
      <line
        className={`cls-2 ${incorrectCount >= 2 ? "shown" : ""}`}
        x1="184.84"
        y1="71.78"
        x2="184.84"
        y2="161.13"
      />
      <line
        className={`cls-2 ${incorrectCount >= 3 ? "shown" : ""}`}
        x1="218.04"
        y1="107.77"
        x2="184.84"
        y2="86.42"
      />
      <line
        className={`cls-2 ${incorrectCount >= 4 ? "shown" : ""}`}
        x1="151.64"
        y1="106.58"
        x2="184.84"
        y2="86.42"
      />
      <line
        className={`cls-2 ${incorrectCount >= 5 ? "shown" : ""}`}
        x1="155.2"
        y1="186.82"
        x2="184.84"
        y2="161.13"
      />
      <line
        className={`cls-2 ${incorrectCount >= 6 ? "shown" : ""}`}
        x1="215.25"
        y1="186.7"
        x2="184.84"
        y2="161.13"
      />
    </svg>
  );
};
