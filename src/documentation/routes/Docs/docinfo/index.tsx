import { ExampleSections, DocInfoW } from "./style";
import { ComponentW } from "./style";
import { Button } from "@/ui-kit";
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
              <Button
                id="plain_button_withborder"
                size="big"
                label="Button"
                look="withborder"
                kind="default"
              />
              <Button
                id="plain_button_withborder"
                size="big"
                label="Button"
                look="withborder"
                kind="success"
              />
              <Button
                id="plain_button_withborder"
                size="big"
                label="Button"
                look="withborder"
                kind="warning"
              />
              <Button
                id="plain_button_withborder"
                size="big"
                label="Button"
                look="withborder"
                kind="danger"
              />
              <Button
                id="plain_button_withborder"
                size="big"
                label="Button"
                look="withborder"
                kind="disable"
              />
              <Button
                id="plain_button_withborder"
                size="big"
                label="Button"
                look="withborder"
                kind="transparent"
              />
              <Button
                id="plain_button_withborder"
                size="big"
                label="Button"
                look="withborder"
                kind="filled"
              />
              <Button
                id="plain_button_withborder"
                size="big"
                label="Button"
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
