import "./CRT.scss";
import Typer from "../Typer/Typer";
import BlinkingCursor from "../Typer/BlinkingCursor";

let phrases = ["web developer.", "designer.", "photographer."];
const lines = [
  "stuart@Website ~ % npm run dev",
  "stuart@Website ~ % whoami",
  "> my name is stuart little!",
];

const CRT = () => {
  return (
    <section className="crt-container">
      <div className="shell">
        <div className="crt">
          {lines.map((line) => {
            return <p className="crt-text">{line}</p>;
          })}
          <p className="crt-text">
            {"stuart@Website ~ % I am a "}
            <Typer
              phrases={phrases}
              typeSpeed="100"
              eraseSpeed="50"
              startingIndex="0"
            ></Typer>
            <BlinkingCursor />
          </p>
          <div className="scanline"></div>
        </div>
      </div>
    </section>
  );
};
export default CRT;
