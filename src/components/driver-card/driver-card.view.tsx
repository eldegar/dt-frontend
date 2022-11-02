import { Driver } from "../../types/driver";

interface Props extends Driver {}

const DriverCard = (props: Props) => {
  return (
    <div className="flex relative">
      <img
        className="mr-3 w-36"
        src={`${import.meta.env.VITE_API}${props.imgUrl}`}
      ></img>
      <div className="w-56">
        <p>First Name: {props.firstname}</p>
        <p>Last Name: {props.lastname}</p>
        <p>Country: {props.country} </p>
        <p>Code: {props.code} </p>
      </div>
      <div className="absolute top-0 left-0 text-xl font-semibold">
        {props.place}
      </div>
    </div>
  );
};
export default DriverCard;
