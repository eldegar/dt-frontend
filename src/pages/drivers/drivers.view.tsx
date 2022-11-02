import { useQuery } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import Button from "../../components/button";
import DriverCard from "../../components/driver-card";
import { driverMultipleOvertake, getDrivers } from "../../lib/drivers";
import { axiosInstance } from "../../lib/xhr";
import { FaCaretUp } from "react-icons/fa";
import SwapDrivers from "../../components/swap-drivers";

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

  const handleOvertake = async (e: React.MouseEvent, driverId: number) => {
    e.preventDefault();
    await axiosInstance().post(`/drivers/${driverId}/overtake`);
    refetch();
  };

  if (isLoading) {
    return (
      <div className="text-center flex items-center justify-center w-full h-screen">
        <span className="text-4xl">Loading..</span>
      </div>
    );
  }

  return (
    <>
      <h1 className="container text-8xl mb-16 text-center">Drivers</h1>
      <div className="container">
        {data?.data.map((driver, driverIndex) => (
          <div
            className="mb-8 flex justify-center items-center"
            key={driver.id}
          >
            <div>
              <DriverCard {...driver}></DriverCard>
              <div className="flex mt-2">
                {driver.place > 1 && (
                  <Button
                    iconAfterLabel
                    icon={() => <FaCaretUp className="text-xl"></FaCaretUp>}
                    onClick={(e) => handleOvertake(e, driver.id)}
                    label="Overtake"
                  ></Button>
                )}
                <SwapDrivers
                  currentIndex={driverIndex}
                  onChange={async (e) => {
                    await driverMultipleOvertake(
                      driverIndex,
                      parseInt(e.target.value)
                    );
                    refetch();
                  }}
                  driversCount={data.data.length}
                ></SwapDrivers>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DriversPage;
