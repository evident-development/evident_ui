import { EComponentsGroupId } from "@/documentation/types/enums/componentsGroupId";

// https://shortunique.id/

export type IComponentsData = {
  [key in EComponentsGroupId]?: {
    example: string;
    tableData: any;
    code: string;
  }[];
};

const ComponentsData: IComponentsData = {
  buttons: [
    {
      example: "plainbutton",
      tableData: [
        {
          row: [
            {
              title: "Accept prop",
              id: "k1CwSW",
            },
            { title: "Type", id: "ylVh2W" },
            { title: "Requiretty", id: "PDjLQR" },
            { title: "Default prop", id: "P19T9L" },
            {
              title: "Description",
              id: "5Yt4dN",
            },
          ],
          id: "BFxdaG",
        },
        {
          row: [
            {
              title: "label",
              id: "Zb2LMK",
            },
            { title: "string", id: "6TgBR9" },
            { title: "required", id: "CzwF9V" },
            { title: "-", id: "EFkSCs" },
            {
              title: "Defines the name of the button",
              id: "nbQzte",
            },
          ],
          id: "nwnjy1",
        },
        {
          row: [
            {
              title: "onClick",
              id: "oTRuDc",
            },
            {
              title: "(event: React.SyntheticEvent<HTMLElement>) => void",
              id: "4Bo39z",
            },
            { title: "not required", id: "xlkFGo" },
            { title: "-", id: "Ttfr5p9" },
            {
              title: "Defines a click event",
              id: "eGL82k",
            },
          ],
          id: "RJQn1F",
        },
        {
          row: [
            {
              title: "kind",
              id: "iiTLFP",
            },
            {
              title: `'default' | 'success' | 'disable' | 'warning' | 'danger'`,
              id: "jeIS7A",
            },
            { title: "not required", id: "5STfMo" },
            { title: "-", id: "Tlfo5p9" },
            {
              title: "Defines the theme of the button",
              id: "UsbvUl",
            },
          ],
          id: "2PL4NY",
        },
        {
          row: [
            {
              title: "look",
              id: "f3D6zY",
            },
            {
              title: `'textonly' | 'filled' | 'withborder'`,
              id: "7D2tK4",
            },
            { title: "not required", id: "hq6kw5" },
            { title: "-", id: "lPpCLp" },
            {
              title: "defines the general appearance of the button",
              id: "1G3ovx",
            },
          ],
          id: "O3BAwD",
        },
        {
          row: [
            {
              title: "size",
              id: "KBlAkC",
            },
            {
              title: `'big' | 'middle' | 'small' | 'tiny'`,
              id: "izpBVy",
            },
            { title: "not required", id: "hq6kw5" },
            { title: "-", id: "Etmr5pn" },
            {
              title: "Defines the size of the button",
              id: "Y5Gvmy",
            },
          ],
          id: "gjpQTR",
        },
      ],
      code: `<PlainButton
  id="plain_button_textonly"
  size="big"
  label="PlainButton"
  look="textonly"
  kind="default"
/>`,
    },
  ],
  inputs: [
    {
      example: "input",
      tableData: [],
      code: "some 2222",
    },
  ],
  cards: [
    {
      example: "plainbutton",
      tableData: [],
      code: "some code",
    },
  ],
};

export const getComponentsInfo = (key: EComponentsGroupId) => {
  return ComponentsData[key];
};
