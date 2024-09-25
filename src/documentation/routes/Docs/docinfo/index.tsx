import { ExampleSections, DocInfoW } from "./style";
import { ComponentW } from "./style";
import {
  Button,
  IBtnKind,
  IBtnLook,
  IBtnSize,
  PlainTable,
  Topbar,
} from "@/ui-kit";
import { useAppSelector } from "@/documentation/actions/redux";
import { getComponentdata, getComponentsInfo } from "@/documentation/services";
import { CodeBlock } from "@/documentation/components";
import { EComponentsGroupId } from "@/documentation/types/enums/componentsGroupId";

export const DocInfo = () => {
  const { componentsGroupId } = useAppSelector(
    (state) => state.componentsGroupId
  );
  const currentComponentsStack = getComponentsInfo(componentsGroupId);

  return (
    <DocInfoW>
      {currentComponentsStack.map((item) => {
        const componentData = getComponentdata(item.component);
        return (
          <ComponentW key={item.example}>
            <ExampleSections $flex>
              {componentData.map((cmp) => {
                switch (item.component) {
                  case EComponentsGroupId.Buttons:
                    return (
                      <Button
                        key={cmp.id}
                        id={cmp.id}
                        label={cmp.label}
                        size={cmp.size as IBtnSize}
                        kind={cmp.kind as IBtnKind}
                        look={cmp.look as IBtnLook}
                      />
                    );
                  case EComponentsGroupId.Navigation:
                    return (
                      <Topbar
                        key={cmp.id}
                        logo={cmp.logo}
                        isSignPanel={cmp.isSignPanel}
                      />
                    );
                  default:
                    return <></>;
                }
              })}
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
