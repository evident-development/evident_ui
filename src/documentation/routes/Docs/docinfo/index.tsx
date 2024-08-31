import { ExampleSections, DocInfoW } from "./style";
import { ComponentW } from "./style";
import { PlainButton } from "@/ui-kit";
import { PlainTable } from "@/ui-kit";
import { useAppSelector } from "@/documentation/actions/redux";
import { getComponentsInfo } from "@/documentation/services";
import { CodeBlock } from "@/documentation/components";

export const DocInfo = () => {
  const { componentsGroupId } = useAppSelector(
    (state) => state.componentsGroupId
  );
  const currentComponentsStack = getComponentsInfo(componentsGroupId);

  return (
    <DocInfoW>
      {currentComponentsStack.map((item) => {
        return (
          <ComponentW key={item.example}>
            <ExampleSections $flex>
              <PlainButton
                id="plain_button_withborder"
                size="big"
                label="PlainButton"
                look="withborder"
                kind="default"
              />
              <PlainButton
                id="plain_button_withborder"
                size="big"
                label="PlainButton"
                look="withborder"
                kind="success"
              />
              <PlainButton
                id="plain_button_withborder"
                size="big"
                label="PlainButton"
                look="withborder"
                kind="warning"
              />
              <PlainButton
                id="plain_button_withborder"
                size="big"
                label="PlainButton"
                look="withborder"
                kind="danger"
              />
              <PlainButton
                id="plain_button_withborder"
                size="big"
                label="PlainButton"
                look="withborder"
                kind="disable"
              />
              <PlainButton
                id="plain_button_withborder"
                size="big"
                label="PlainButton"
                look="withborder"
                kind="transparent"
              />
              <PlainButton
                id="plain_button_withborder"
                size="big"
                label="PlainButton"
                look="withborder"
                kind="filled"
              />
              <PlainButton
                id="plain_button_withborder"
                size="big"
                label="PlainButton"
                look="withborder"
                kind="unfilled"
              />
            </ExampleSections>
            <ExampleSections>
              <PlainTable tableData={item.tableData} />
            </ExampleSections>
            <ExampleSections>
              <CodeBlock codeContent={item.code} />
            </ExampleSections>
          </ComponentW>
        );
      })}
    </DocInfoW>
  );
};
