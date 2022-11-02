import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const HomePage = ({ children }: Props) => {
  return <div>Kezdőlap</div>;
};
export default HomePage;
