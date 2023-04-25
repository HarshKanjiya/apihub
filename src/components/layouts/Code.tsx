"use client";
import { FC, useEffect, useState } from "react";
import { Language, defaultProps } from "prism-react-renderer";
import { useTheme } from "next-themes";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import Highlight from "prism-react-renderer";

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animationDelay?: number;
  animation?: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  show,
  language,
  animation,
  animationDelay,
}) => {
  const [text, setText] = useState(animation ? "" : code);
  const { theme: appTheme } = useTheme();

  useEffect(() => {
    if (show && animation) {
      let i = 0;
      setTimeout(() => {
        const intervalID = setInterval(() => {
          setText(code.slice(0, i));
          i += 1;
          if (i > code.length) {
            clearInterval(intervalID);
          }
        }, 15);
        return () => clearInterval(intervalID);
      }, animationDelay || 150);
    }
  }, [animationDelay, animation, code, show]);

  const lines = text.split(/\r\n|\r|\n/).length;

  const theme = appTheme === "light" ? lightTheme : darkTheme;

  return (
    <Highlight {...defaultProps} code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            " transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar"
          }
          style={{
            maxHeight: show ? lines * 24 : 0,
            opacity: show ? 1 : 0,
          }}
        >
          {tokens.map((line, i) => {
            // eslint-disable-next-line no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: i });

            return (
              <div key={`line-${i}`} style={{ position: "relative" }} {...rest}>
                {line.map((token, i) => {
                  // eslint-disable-next-line no-unused-vars
                  const { key, ...props } = getTokenProps({ token, i });
                  return <span key={i} {...props}></span>;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

Code.displayName = "Code";
export default Code;
