import { CSSProperties } from "react";

export interface IMarqueeLogo {
  url: string;
  size: {
    width: CSSProperties["width"];
    height: CSSProperties["height"];
  };
}
