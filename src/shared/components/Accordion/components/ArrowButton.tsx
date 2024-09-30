import { FC } from "react";

import * as Styled from "./styles";

interface ArrowButtonProps {
  onClick(): void;
  isOpen: boolean;
}

export const ArrowButton: FC<ArrowButtonProps> = (props) => {
  const { onClick, isOpen } = props;

  return (
    <Styled.Arrow onClick={onClick} isOpen={isOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <path
          d="M4.35522 7.1665C4.35522 7.0165 4.41356 6.87484 4.53022 6.7665C4.75522 6.5665 5.09689 6.58317 5.29689 6.79984L10.0805 12.1075L14.7055 6.76648C14.9055 6.54148 15.2471 6.53315 15.4721 6.73315C15.6888 6.93315 15.7055 7.27482 15.5055 7.49982L10.5138 13.2491C10.2805 13.5074 9.88047 13.5074 9.64714 13.2491L4.49689 7.53317C4.39689 7.42484 4.35522 7.29984 4.35522 7.1665Z"
          fill="#717681"
        />
      </svg>
    </Styled.Arrow>
  );
};
