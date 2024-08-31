import { FC, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeBlockW } from "./style";
import { CopyIconW } from "./style/CopyIconW";
import { CopyIconBtn } from "./style/CopyIconBtn";
import { vs2015, vs } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  codeContent: string;
  allowCopy?: boolean;
}
export const CodeBlock: FC<CodeBlockProps> = (props) => {
  const { codeContent } = props;
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 3000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <CodeBlockW>
      <SyntaxHighlighter
        showLineNumbers
        customStyle={{ fontSize: "16px" }}
        style={vs}
      >
        {codeContent}
      </SyntaxHighlighter>

      <CopyIconW>
        <CopyToClipboard text={codeContent} onCopy={() => setIsCopied(true)}>
          <CopyIconBtn className="material-icons" $copied={isCopied}>
            {isCopied ? "check" : "content_copy"}
          </CopyIconBtn>
        </CopyToClipboard>
      </CopyIconW>
    </CodeBlockW>
  );
};
