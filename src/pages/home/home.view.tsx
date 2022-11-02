import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

const HomePage = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link
        className="text-4xl text-primary-600 hover:text-primary-900"
        to="/drivers"
      >
        Go To Drivers!
      </Link>
    </div>
  );
};
export default HomePage;
