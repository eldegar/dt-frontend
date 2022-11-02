import { axiosInstance } from "./xhr";
import { AxiosResponse } from "axios";
import { Driver } from "../types/driver";

export async function getDrivers(): Promise<AxiosResponse<Driver[]>> {
  return axiosInstance().get("/drivers");
}

export async function driverOvertake(
  id: number
): Promise<AxiosResponse<Driver[]>> {
  return axiosInstance().post(`/drivers/${id}/overtake`);
}
