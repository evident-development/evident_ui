import { EComponentsGroupId } from "@/documentation/types/enums/componentsGroupId";
import { IPlainTableProps } from "@/ui-kit/Tables/types";

// https://shortunique.id/

export type IComponentsData = {
  [key in EComponentsGroupId]?: {
    example: string;
    tableData: any;
    code: string;
    component?: EComponentsGroupId;
  }[];
};

const ComponentCard: IComponentsData = {
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
      code: `<Button
  id="plain_button_textonly"
  size="big"
  label="Button"
  look="textonly"
  kind="default"
/>`,
      component: EComponentsGroupId.Buttons,
    },
  ],
  inputs: [
    {
      example: "input",
      tableData: [],
      code: "some code",
    },
  ],
  navigation: [
    {
      example: "topbar",
      tableData: [
        {
          row: [
            {
              title: "Accept prop",
              id: "d1CwpW",
            },
            { title: "Type", id: "ulVl2W" },
            { title: "Requiretty", id: "fDjLQj" },
            { title: "Default prop", id: "k19T0L" },
            {
              title: "Description",
              id: "1Yt2dc",
            },
          ],
          id: "cFxdac",
        },
        {
          row: [
            {
              title: "bgColor",
              id: "Zb2Lad",
            },
            { title: "string", id: "aTgB39" },
            { title: "not required", id: "CzoF9V" },
            { title: "#367EDD", id: "EFkS8s" },
            {
              title: "Defines the background color of topbar",
              id: "nbQzt3",
            },
          ],
          id: "n2njya",
        },
        {
          row: [
            {
              title: "logo",
              id: "Zb2L0d",
            },
            { title: "ReactNode", id: "a6gB39" },
            { title: "not required", id: "Cz2F2V" },
            { title: "-", id: "1e0Sqs" },
            {
              title: "Defines the logo in left side of topbar",
              id: "neQet3",
            },
          ],
          id: "nqnjyw",
        },
        {
          row: [
            {
              title: "isSignPanel",
              id: "Z1200d",
            },
            { title: "boolean", id: "a6qB39" },
            { title: "not required", id: "qz2F2V" },
            { title: "false", id: "1e0Sqq" },
            {
              title:
                "Defines the panel(signin and signup buttons) on the right side of topbar",
              id: "neQ1t3",
            },
          ],
          id: "nqnay1",
        },
        {
          row: [
            {
              title: "onSignin",
              id: "e2230d",
            },
            {
              title: "(event?: React.SyntheticEvent<HTMLElement>) => void",
              id: "16qB29",
            },
            { title: "not required", id: "qw2q2V" },
            { title: "-", id: "1e2S1q" },
            {
              title: "Defines onclick function for signin button",
              id: "niQ1t3",
            },
          ],
          id: "1q1ay1",
        },
        {
          row: [
            {
              title: "onSignup",
              id: "e2u3ud",
            },
            {
              title: "(event?: React.SyntheticEvent<HTMLElement>) => void",
              id: "q6wB29",
            },
            { title: "not required", id: "1w2q34" },
            { title: "-", id: "eetS1q" },
            {
              title: "Defines onclick function for signup button",
              id: "oaQ1t3",
            },
          ],
          id: "lqlay1",
        },
        {
          row: [
            {
              title: "navitems",
              id: "e2130d",
            },
            {
              title:
                "NavItem[] /  NavItem { title: string; onClick?: (event?: React.SyntheticEvent<HTMLElement>) => void;}",
              id: "q6w12q",
            },
            { title: "not required", id: "1uaq3B" },
            { title: "-", id: "nehS1q" },
            {
              title: "Defines the links of topbar",
              id: "oaQ1hr",
            },
          ],
          id: "jqlay1",
        },
        {
          row: [
            {
              title: "isSearchPanel",
              id: "e2p30a",
            },
            {
              title: "boolean",
              id: "h6012q",
            },
            { title: "not required", id: "1uaq3B" },
            { title: "-", id: "nsh01q" },
            {
              title: "Defines the searchbar in right side of topbar",
              id: "9lQ1hr",
            },
          ],
          id: "lqlly1",
        },
        {
          row: [
            {
              title: "searchPlaceHolder",
              id: "u2pm0a",
            },
            {
              title: "string",
              id: "d6212q",
            },
            { title: "not required", id: "1uaq3B" },
            { title: "-", id: "ggh01q" },
            {
              title: "Defines the placeholder of searchbar",
              id: "ggQ1hr",
            },
          ],
          id: "lql9y1",
        },
        {
          row: [
            {
              title: "onSearch",
              id: "hajsga",
            },
            {
              title: "(event?: React.SyntheticEvent<HTMLElement>) => void",
              id: "imnash",
            },
            { title: "not required", id: "owujbe" },
            { title: "-", id: "mdjnds" },
            {
              title: "Defines the onchange function for searchbar",
              id: "ujfuqw",
            },
          ],
          id: "lpl9p1",
        },
        {
          row: [
            {
              title: "linksColor",
              id: "njuals",
            },
            {
              title: "string",
              id: "jnjnpp",
            },
            { title: "not required", id: "oajber" },
            { title: "-", id: "mkkkab" },
            {
              title: "Defines the color of links",
              id: "opooqw",
            },
          ],
          id: "ahjsdg",
        },
        {
          row: [
            {
              title: "onLogo",
              id: "1j2als",
            },
            {
              title: "string",
              id: "jqjn2p",
            },
            { title: "not required", id: "lalbei" },
            { title: "-", id: "m0kk8b" },
            {
              title: "Defines the color of links",
              id: "qpmoqw",
            },
          ],
          id: "56jsdg",
        },
      ],
      code: `<Topbar
  key="some key"
  logo={<div>Logo</div>} 
  isSignPanel={true}
/>`,
      component: EComponentsGroupId.Navigation,
    },
  ],
  cards: [
    {
      example: "plaincard",
      tableData: [],
      code: "some code",
      component: EComponentsGroupId.Cards,
    },
  ],
};

export const getComponentsInfo = (key: EComponentsGroupId) => {
  return ComponentCard[key];
};

export const getComponentdata = (key: EComponentsGroupId) => {
  switch (key) {
    case EComponentsGroupId.Buttons:
      return [
        {
          id: "qrNqfP",
          size: "big",
          label: "Button",
          look: "withborder",
          kind: "default",
        },
        {
          id: "OFjvX7",
          size: "big",
          label: "Button",
          look: "withborder",
          kind: "success",
        },
        {
          id: "XpHZB6",
          size: "big",
          label: "Button",
          look: "withborder",
          kind: "warning",
        },
        {
          id: "ILaFea",
          size: "big",
          label: "Button",
          look: "withborder",
          kind: "danger",
        },
        {
          id: "EzNAh8",
          size: "big",
          label: "Button",
          look: "withborder",
          kind: "disable",
        },
        {
          id: "TzuAh0",
          size: "big",
          label: "Button",
          look: "withborder",
          kind: "transparent",
        },
        {
          id: "Ya9ihu",
          size: "big",
          label: "Button",
          look: "withborder",
          kind: "filled",
        },
        {
          id: "K11kht",
          size: "big",
          label: "Button",
          look: "withborder",
          kind: "unfilled",
        },
      ];
    case EComponentsGroupId.Navigation:
      return [
        {
          id: "qrNqfP",
          logo: <div>Logo</div>,
          isSignPanel: true,
        },
      ];
    case EComponentsGroupId.Cards:
      return [{ id: "sjdhjks" }];
    default:
      return [];
  }
};
