export enum Align {
  top = "top",
  middle = "middle",
  bottom = "bottom",
  baseline = "baseline",
}

export enum Wrap {
  nowrap = "nowrap",
  wrap = "wrap",
  wrapReverse = "wrap-reverse",
}

export enum JustifyContent {
  start = "start",
  end = "end",
  center = "center",
  around = "around",
  between = "between",
}

export enum Direction {
  row = "row",
  column = "column",
}

export type RowProps = {
  align?: keyof typeof Align;
  justify?: keyof typeof JustifyContent;
  direction?: keyof typeof Direction;
  mb?: number;
  mt?: number;
  cg?: number;
  rg?: number;
  gutter?:
    | number
    | [number, number]
    | [number, number, number]
    | [number, number, number, number];
  wrap?: keyof typeof Wrap;
  width?: string;
};

export type ColProps = {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};
