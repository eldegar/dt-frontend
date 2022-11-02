import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { getDrivers } from "../../lib/drivers";
import { axiosInstance } from "../../lib/xhr";

type Props = {
  children?: ReactNode;
};

const DriversPage = ({ children }: Props) => {
  const { data, isLoading, refetch } = useQuery(
    ["drivers"],
    () => getDrivers(),
    {
      staleTime: 1000 * 60 * 20,
    }
  );
  if (isLoading) {
    return <div>Loading..</div>;
  }
  return (
    <>
      <h1>Drivers</h1>
      <div>
        {data?.data.map((driver) => (
          <div key={driver.id}>
            <img
              width={200}
              src={`${import.meta.env.VITE_API}${driver.imgUrl}`}
            ></img>
            <p>First Name: {driver.firstname}</p>
            <p>Last Name: {driver.lastname}</p>
            <p>Country: {driver.country} </p>
            <p>Code: {driver.code} </p>
            <p>Place: {driver.place} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DriversPage;
