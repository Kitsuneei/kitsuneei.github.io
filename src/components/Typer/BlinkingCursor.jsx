import { useEffect, useState } from "react";
import "./BlinkingCursor.scss";

const BlinkingCursor = (blinkRate = 250) => {
  //   const [cursor, setCursor] = useState("");

  //   useEffect(() => {
  //     const timeout = setTimeout(
  //       setCursor((c) => {
  //         return c !== "|" ? "|" : "";
  //       }),
  //       blinkRate
  //     );

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }, [cursor]);
  return <span className="blink">|</span>;
};
export default BlinkingCursor;
