import classNames from "classnames";
import { forwardRef } from "react";
import { TextFieldProps } from "./text-box.types";

// Component definition with forwardRef
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      helper,
      errorMessage,
      variant = "ghost",
      name,
      className = "",
      ...rest // capture additional props for input
    },
    ref // ref is passed as the second argument
  ) => {
    const hasError = !!error;
    const Variant = hasError ? "error" : variant;
    const classes = classNames("textbox w-full", className, {
      [`textbox-${Variant}`]: Variant,
    });

    return (
      <div className="h-[104px]">
        {label && (
          <label
            htmlFor={name}
            className="block mb-[8px] text-[13px] text-Gray-2"
          >
            {label}
          </label>
        )}
        <input {...rest} ref={ref} className={classes} />
        {hasError && (
          <p className="mt-[8px] text-[11px] font-normal text-Error leading-[20px]">
            {errorMessage}
          </p>
        )}
        {!hasError && <p className="mt-[8px] text-xs text-Gray-7">{helper}</p>}
      </div>
    );
  }
);

export default TextField;
