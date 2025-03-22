import { PageTitleProps } from "./PageTitle.types";

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="w-full">
      <h1 className="text-[28px] leading-[34px] text-blue-600 font-[600]">
        {title}
      </h1>
      <span className="h-[1px] bg-Gray-3 block mt-[20px] rounded-3xl w-full"></span>
    </div>
  );
}
