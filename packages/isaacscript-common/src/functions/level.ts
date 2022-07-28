import { DoorSlot } from "isaac-typescript-definitions";
import { game } from "../cachedClasses";
import { getEnumValues } from "./enums";
import { isDoorSlotValidAtGridIndexForRedRoom } from "./levelGrid";
import { getNumRooms, getRoomsInGrid } from "./rooms";

export function fillLevelWithRedRooms(): void {
  const level = game.GetLevel();

  let numRoomsInGrid: int;
  do {
    const roomsInGrid = getRoomsInGrid();
    numRoomsInGrid = roomsInGrid.length;

    for (const roomDescriptor of roomsInGrid) {
      for (const doorSlot of getEnumValues(DoorSlot)) {
        if (
          isDoorSlotValidAtGridIndexForRedRoom(
            doorSlot,
            roomDescriptor.GridIndex,
          )
        ) {
          level.MakeRedRoomDoor(roomDescriptor.GridIndex, doorSlot);
        }
      }
    }
  } while (numRoomsInGrid !== getNumRooms());
}
