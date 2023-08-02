import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className="max-w-[1544px] mx-auto w-full px-10 transition-all max-lg:px-6 overflow-hidden max-md:px-4">
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
