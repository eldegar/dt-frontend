import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { normalizeCls } from "../../utility/helper";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  label?: string;
  icon?: () => JSX.Element;
  iconAfterLabel?: boolean;
  className?: string;
}

const Button = ({
  label,
  children,
  icon,
  className,
  iconAfterLabel,
  ...props
}: Props): JSX.Element => {
  return (
    <button
      className={normalizeCls`inline-block rounded-lg bg-primary-700 px-8 py-2 font-sans text-white transition-colors hover:bg-primary-600 hover:text-white ${
        className || ""
      }`}
      type="button"
      {...props}
    >
      {icon ? (
        <span className="flex items-center justify-center space-x-2">
          {children}
          {!iconAfterLabel && icon()}
          {label && <span>{label}</span>}
          {iconAfterLabel && icon()}
        </span>
      ) : (
        label && (
          <span className="flex items-center justify-center space-x-2">
            {children}
            <span>{label}</span>
          </span>
        )
      )}
    </button>
  );
};
export default Button;
