import { ReactElement } from "react";
import { Spin } from "../base";

function Loading(props: any): ReactElement {
  return <Spin {...props} />;
}

export default Loading;
