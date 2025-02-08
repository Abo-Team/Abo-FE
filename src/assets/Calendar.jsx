import { colors } from '../theme';

export const Calendar = ({ isPath, onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 18.7C0 20.57 1.365 22 3.15 22H17.85C19.635 22 21 20.57 21 18.7V9.9H0V18.7ZM17.85 2.2H15.75V1.1C15.75 0.44 15.33 0 14.7 0C14.07 0 13.65 0.44 13.65 1.1V2.2H7.35V1.1C7.35 0.44 6.93 0 6.3 0C5.67 0 5.25 0.44 5.25 1.1V2.2H3.15C1.365 2.2 0 3.63 0 5.5V7.7H21V5.5C21 3.63 19.635 2.2 17.85 2.2Z"
        fill={isPath ? colors.main[300] : colors.main[200]}
      />
    </svg>
  );
};
