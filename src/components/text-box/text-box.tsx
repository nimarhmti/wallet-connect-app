import classNames from "classnames";
import { forwardRef } from "react";
import { TextFieldProps } from "./text-box.types";

// Component definition with forwardRef
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      name,
      className = "",
      ...rest // capture additional props for input
    },
    ref // ref is passed as the second argument
  ) => {
    const classes = classNames("text-box", className);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={name}
            className="block mb-[8px] text-[13px] text-Gray-6"
          >
            {label}
          </label>
        )}
        <input {...rest} ref={ref} className={classes} />
      </div>
    );
  }
);

export default TextField;
