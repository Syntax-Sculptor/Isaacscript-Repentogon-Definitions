import { ButtonAction, Direction } from "isaac-typescript-definitions";
import { HasAllEnumKeys } from "../types/HasAllEnumKeys";

export const DIRECTION_TO_MOVE_ACTION = {
  [Direction.NO_DIRECTION]: undefined, // -1
  [Direction.LEFT]: ButtonAction.LEFT, // 0
  [Direction.UP]: ButtonAction.UP, // 1
  [Direction.RIGHT]: ButtonAction.RIGHT, // 2
  [Direction.DOWN]: ButtonAction.DOWN, // 3
} as const satisfies HasAllEnumKeys<Direction, ButtonAction | undefined>;
