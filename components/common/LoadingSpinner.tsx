import { CircularProgress } from "@mui/material";

type LoadingSpinnerProps = {
  size?: number;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 40 }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <CircularProgress size={size} />
    </div>
  );
};

export default LoadingSpinner;
