export interface EnvArgs<T> {
  mode: string;
  env: T;
}

export enum EModes {
  Dev = "development",
  Prod = "production",
}

export interface IPaths {
  componentsSource: string;
  devSource: string;
  prodSource: string;
  outSource: string;
  templateSource: string;
}
