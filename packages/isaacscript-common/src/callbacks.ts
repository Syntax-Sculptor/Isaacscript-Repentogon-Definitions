import { PostAmbushFinished } from "./classes/callbacks/PostAmbushFinished";
import { PostAmbushStarted } from "./classes/callbacks/PostAmbushStarted";
import { PostBombExploded } from "./classes/callbacks/PostBombExploded";
import { PostBombInitLate } from "./classes/callbacks/PostBombInitLate";
import { PostBoneSwing } from "./classes/callbacks/PostBoneSwing";
import { PostCollectibleEmpty } from "./classes/callbacks/PostCollectibleEmpty";
import { PostCollectibleInitFirst } from "./classes/callbacks/PostCollectibleInitFirst";
import { PostCursedTeleport } from "./classes/callbacks/PostCursedTeleport";
import { PostCustomRevive } from "./classes/callbacks/PostCustomRevive";
import { PostDiceRoomActivated } from "./classes/callbacks/PostDiceRoomActivated";
import { PostDoorRender } from "./classes/callbacks/PostDoorRender";
import { PostDoorUpdate } from "./classes/callbacks/PostDoorUpdate";
import { PostEffectInitLate } from "./classes/callbacks/PostEffectInitLate";
import { PostEffectStateChanged } from "./classes/callbacks/PostEffectStateChanged";
import { PostEsauJr } from "./classes/callbacks/PostEsauJr";
import { PostFamiliarInitLate } from "./classes/callbacks/PostFamiliarInitLate";
import { PostFamiliarStateChanged } from "./classes/callbacks/PostFamiliarStateChanged";
import { PostFirstEsauJr } from "./classes/callbacks/PostFirstEsauJr";
import { PostFirstFlip } from "./classes/callbacks/PostFirstFlip";
import { PostFlip } from "./classes/callbacks/PostFlip";
import { PostGameStartedReordered } from "./classes/callbacks/PostGameStartedReordered";
import { PostGameStartedReorderedLast } from "./classes/callbacks/PostGameStartedReorderedLast";
import { PostGreedModeWave } from "./classes/callbacks/PostGreedModeWave";
import { PostGridEntityBroken } from "./classes/callbacks/PostGridEntityBroken";
import { PostGridEntityCollision } from "./classes/callbacks/PostGridEntityCollision";
import { PostGridEntityCustomBroken } from "./classes/callbacks/PostGridEntityCustomBroken";
import { PostGridEntityCustomCollision } from "./classes/callbacks/PostGridEntityCustomCollision";
import { PostGridEntityCustomInit } from "./classes/callbacks/PostGridEntityCustomInit";
import { PostGridEntityCustomRemove } from "./classes/callbacks/PostGridEntityCustomRemove";
import { PostGridEntityCustomRender } from "./classes/callbacks/PostGridEntityCustomRender";
import { PostGridEntityCustomStateChanged } from "./classes/callbacks/PostGridEntityCustomStateChanged";
import { PostGridEntityCustomUpdate } from "./classes/callbacks/PostGridEntityCustomUpdate";
import { PostGridEntityInit } from "./classes/callbacks/PostGridEntityInit";
import { PostGridEntityRemove } from "./classes/callbacks/PostGridEntityRemove";
import { PostGridEntityRender } from "./classes/callbacks/PostGridEntityRender";
import { PostGridEntityStateChanged } from "./classes/callbacks/PostGridEntityStateChanged";
import { PostGridEntityUpdate } from "./classes/callbacks/PostGridEntityUpdate";
import { PostHolyMantleRemoved } from "./classes/callbacks/PostHolyMantleRemoved";
import { PostItemDischarge } from "./classes/callbacks/PostItemDischarge";
import { PostKnifeInitLate } from "./classes/callbacks/PostKnifeInitLate";
import { PostNewLevelReordered } from "./classes/callbacks/PostNewLevelReordered";
import { PostNewRoomEarly } from "./classes/callbacks/PostNewRoomEarly";
import { PostNewRoomReordered } from "./classes/callbacks/PostNewRoomReordered";
import { PostPEffectUpdateReordered } from "./classes/callbacks/PostPEffectUpdateReordered";
import { PostPitRender } from "./classes/callbacks/PostPitRender";
import { PostPlayerFatalDamage } from "./classes/callbacks/PostPlayerFatalDamage";
import { PostPlayerRenderReordered } from "./classes/callbacks/PostPlayerRenderReordered";
import { PostPlayerUpdateReordered } from "./classes/callbacks/PostPlayerUpdateReordered";
import { PostRoomClearChanged } from "./classes/callbacks/PostRoomClearChanged";
import { PostSpikesRender } from "./classes/callbacks/PostSpikesRender";
import { PreBerserkDeath } from "./classes/callbacks/PreBerserkDeath";
import { PreCustomRevive } from "./classes/callbacks/PreCustomRevive";
import { ModCallbackCustom2 } from "./enums/ModCallbackCustom2";
import { getEnumValues } from "./functions/enums";
import { newObjectWithEnumKeys } from "./functions/utils";

const MOD_CALLBACK_CUSTOM_TO_CLASS = newObjectWithEnumKeys(ModCallbackCustom2, {
  [ModCallbackCustom2.POST_AMBUSH_FINISHED]: PostAmbushFinished,
  [ModCallbackCustom2.POST_AMBUSH_STARTED]: PostAmbushStarted,
  [ModCallbackCustom2.POST_BOMB_EXPLODED]: PostBombExploded,
  [ModCallbackCustom2.POST_BOMB_INIT_LATE]: PostBombInitLate,
  [ModCallbackCustom2.POST_BONE_SWING]: PostBoneSwing,
  [ModCallbackCustom2.POST_COLLECTIBLE_EMPTY]: PostCollectibleEmpty,
  [ModCallbackCustom2.POST_COLLECTIBLE_INIT_FIRST]: PostCollectibleInitFirst,
  [ModCallbackCustom2.POST_CURSED_TELEPORT]: PostCursedTeleport,
  [ModCallbackCustom2.POST_CUSTOM_REVIVE]: PostCustomRevive,
  [ModCallbackCustom2.POST_DICE_ROOM_ACTIVATED]: PostDiceRoomActivated,
  [ModCallbackCustom2.POST_DOOR_RENDER]: PostDoorRender,
  [ModCallbackCustom2.POST_DOOR_UPDATE]: PostDoorUpdate,
  [ModCallbackCustom2.POST_EFFECT_INIT_LATE]: PostEffectInitLate,
  [ModCallbackCustom2.POST_EFFECT_STATE_CHANGED]: PostEffectStateChanged,
  [ModCallbackCustom2.POST_ESAU_JR]: PostEsauJr,
  [ModCallbackCustom2.POST_FAMILIAR_INIT_LATE]: PostFamiliarInitLate,
  [ModCallbackCustom2.POST_FAMILIAR_STATE_CHANGED]: PostFamiliarStateChanged,
  [ModCallbackCustom2.POST_FIRST_FLIP]: PostFirstFlip,
  [ModCallbackCustom2.POST_FIRST_ESAU_JR]: PostFirstEsauJr,
  [ModCallbackCustom2.POST_FLIP]: PostFlip,
  [ModCallbackCustom2.POST_GAME_STARTED_REORDERED]: PostGameStartedReordered,
  [ModCallbackCustom2.POST_GAME_STARTED_REORDERED_LAST]:
    PostGameStartedReorderedLast,
  [ModCallbackCustom2.POST_GREED_MODE_WAVE]: PostGreedModeWave,
  [ModCallbackCustom2.POST_GRID_ENTITY_BROKEN]: PostGridEntityBroken,
  [ModCallbackCustom2.POST_GRID_ENTITY_COLLISION]: PostGridEntityCollision,
  [ModCallbackCustom2.POST_GRID_ENTITY_CUSTOM_BROKEN]:
    PostGridEntityCustomBroken,
  [ModCallbackCustom2.POST_GRID_ENTITY_CUSTOM_COLLISION]:
    PostGridEntityCustomCollision,
  [ModCallbackCustom2.POST_GRID_ENTITY_CUSTOM_INIT]: PostGridEntityCustomInit,
  [ModCallbackCustom2.POST_GRID_ENTITY_CUSTOM_REMOVE]:
    PostGridEntityCustomRemove,
  [ModCallbackCustom2.POST_GRID_ENTITY_CUSTOM_RENDER]:
    PostGridEntityCustomRender,
  [ModCallbackCustom2.POST_GRID_ENTITY_CUSTOM_STATE_CHANGED]:
    PostGridEntityCustomStateChanged,
  [ModCallbackCustom2.POST_GRID_ENTITY_CUSTOM_UPDATE]:
    PostGridEntityCustomUpdate,
  [ModCallbackCustom2.POST_GRID_ENTITY_INIT]: PostGridEntityInit,
  [ModCallbackCustom2.POST_GRID_ENTITY_REMOVE]: PostGridEntityRemove,
  [ModCallbackCustom2.POST_GRID_ENTITY_RENDER]: PostGridEntityRender,
  [ModCallbackCustom2.POST_GRID_ENTITY_STATE_CHANGED]:
    PostGridEntityStateChanged,
  [ModCallbackCustom2.POST_GRID_ENTITY_UPDATE]: PostGridEntityUpdate,
  [ModCallbackCustom2.POST_HOLY_MANTLE_REMOVED]: PostHolyMantleRemoved,
  [ModCallbackCustom2.POST_ITEM_DISCHARGE]: PostItemDischarge,

  // ----------------

  [ModCallbackCustom2.POST_KNIFE_INIT_LATE]: PostKnifeInitLate,
  [ModCallbackCustom2.POST_NEW_LEVEL_REORDERED]: PostNewLevelReordered,
  [ModCallbackCustom2.POST_NEW_ROOM_EARLY]: PostNewRoomEarly,
  [ModCallbackCustom2.POST_NEW_ROOM_REORDERED]: PostNewRoomReordered,
  [ModCallbackCustom2.POST_PEFFECT_UPDATE_REORDERED]:
    PostPEffectUpdateReordered,
  [ModCallbackCustom2.POST_PIT_RENDER]: PostPitRender,
  [ModCallbackCustom2.POST_PLAYER_FATAL_DAMAGE]: PostPlayerFatalDamage,
  [ModCallbackCustom2.POST_PLAYER_RENDER_REORDERED]: PostPlayerRenderReordered,
  [ModCallbackCustom2.POST_PLAYER_UPDATE_REORDERED]: PostPlayerUpdateReordered,
  [ModCallbackCustom2.POST_ROOM_CLEAR_CHANGED]: PostRoomClearChanged,
  [ModCallbackCustom2.POST_SPIKES_RENDER]: PostSpikesRender,
  [ModCallbackCustom2.PRE_BERSERK_DEATH]: PreBerserkDeath,
  [ModCallbackCustom2.PRE_CUSTOM_REVIVE]: PreCustomRevive,
} as const);

export type ModCallbackCustomToClass = {
  readonly [key in keyof typeof MOD_CALLBACK_CUSTOM_TO_CLASS]: InstanceType<
    typeof MOD_CALLBACK_CUSTOM_TO_CLASS[key]
  >;
};

export function getCallbacks(): ModCallbackCustomToClass {
  const instantiatedClasses: Record<number, unknown> = {};

  for (const modCallbackCustom of getEnumValues(ModCallbackCustom2)) {
    const constructor = MOD_CALLBACK_CUSTOM_TO_CLASS[modCallbackCustom];
    instantiatedClasses[modCallbackCustom] = new constructor();
  }

  return instantiatedClasses as unknown as ModCallbackCustomToClass;
}
