import { EComponentsGroupId } from "@/documentation/types/enums/componentsGroupId";
import { SyntheticEvent } from "react";

export interface ILeftBarStorage {
  id: string;
  label: string;
  onClick(e: React.SyntheticEvent<Element, Event>): void;
  isActive: boolean;
}
export interface ILeftBarStorageParams {
  setComponentsGroupId: (p: EComponentsGroupId) => void;
  componentsGroupId: EComponentsGroupId;
}
export const leftBarStorage = (
  params: ILeftBarStorageParams
): ILeftBarStorage[] => {
  const { setComponentsGroupId, componentsGroupId } = params;
  return [
    {
      id: "buttons",
      label: "Buttons",
      onClick(e: SyntheticEvent) {
        setComponentsGroupId(e.currentTarget.id as EComponentsGroupId);
      },
      isActive: EComponentsGroupId.Buttons === componentsGroupId,
    },
    {
      id: "inputs",
      label: "Inputs",
      onClick(e: SyntheticEvent) {
        setComponentsGroupId(e.currentTarget.id as EComponentsGroupId);
      },
      isActive: EComponentsGroupId.Inputs === componentsGroupId,
    },
  ];
};
