import { ExampleSections, DocInfoW } from "./style";
import { ComponentW } from "./style";
import {
  Button,
  Card,
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
import { Input } from "@/ui-kit/Inputs";

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
                  case EComponentsGroupId.Cards:
                    return (
                      <Card
                        key={cmp.id}
                        header="Card Header"
                        subHeader="Card sub-header"
                        body={
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "100%",
                              gap: "12px",
                              margin: "24px 0",
                            }}
                          >
                            <Input
                              label="Login"
                              // message="Evident message"
                              placeholder="type to search"
                            />
                            <Input
                              label="Password"
                              // message="Evident message"
                              placeholder="type to search"
                            />
                          </div>
                        }
                        footer={
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                              width: "100%",
                            }}
                          >
                            <Button
                              label={"Card Button"}
                              size={"big"}
                              kind={"default"}
                              look={"withborder"}
                              id={"cardbtn1"}
                              stretched
                            />
                            <Button
                              label={"Card Button"}
                              size={"big"}
                              kind={"success"}
                              look={"withborder"}
                              id={"cardbtn2"}
                              stretched
                            />
                          </div>
                        }
                      />
                    );
                  case EComponentsGroupId.Inputs:
                    return (
                      <Input
                        label="Evident input"
                        message="Evident message"
                        placeholder="type to search"
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
