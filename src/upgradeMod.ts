import { customReviveCallbacksInit } from "./callbacks/customRevive";
import { itemPickupCallbacksInit } from "./callbacks/itemPickup";
import { postBombInitLateCallbackInit } from "./callbacks/postBombInitLate";
import { postCursedTeleportCallbackInit } from "./callbacks/postCursedTeleport";
import { postEffectInitLateCallbackInit } from "./callbacks/postEffectInitLate";
import { postEsauJrCallbacksInit } from "./callbacks/postEsauJr";
import { postFamiliarInitLateCallbackInit } from "./callbacks/postFamiliarInitLate";
import { postFlipCallbacksInit } from "./callbacks/postFlip";
import { postGridEntityCallbacksInit } from "./callbacks/postGridEntity";
import { postKnifeInitLateCallbackInit } from "./callbacks/postKnifeInitLate";
import { postLaserInitLateCallbackInit } from "./callbacks/postLaserInitLate";
import { postNPCInitLateCallbackInit } from "./callbacks/postNPCInitLate";
import { postPickupCollectCallbackInit } from "./callbacks/postPickupCollect";
import { postPickupInitLateCallbackInit } from "./callbacks/postPickupInitLate";
import { postPlayerChangeHealthCallbackInit } from "./callbacks/postPlayerChangeHealth";
import { postPlayerChangeTypeCallbackInit } from "./callbacks/postPlayerChangeType";
import { postPlayerFatalDamageCallbackInit } from "./callbacks/postPlayerFatalDamage";
import { postPlayerInitLateCallbackInit } from "./callbacks/postPlayerInitLate";
import { postPlayerReorderedCallbacksInit } from "./callbacks/postPlayerReordered";
import { postProjectileInitLateCallbackInit } from "./callbacks/postProjectileInitLate";
import { postPurchaseCallbackInit } from "./callbacks/postPurchase";
import { postSacrificeCallbackInit } from "./callbacks/postSacrifice";
import { postSlotInitUpdateCallbacksInit } from "./callbacks/postSlotInitUpdate";
import { postSlotRenderBrokenCallbacksInit } from "./callbacks/postSlotRenderBroken";
import { postTearInitLateCallbackInit } from "./callbacks/postTearInitLate";
import { postTransformationCallbackInit } from "./callbacks/postTransformation";
import { reorderedCallbacksInit } from "./callbacks/reorderedCallbacks";
import { deployJSONRoomInit } from "./features/deployJSONRoom";
import { disableInputsInit } from "./features/disableInputs";
import { forgottenSwitchInit } from "./features/forgottenSwitch";
import { getCollectibleItemPoolTypeInit } from "./features/getCollectibleItemPoolType";
import { preventCollectibleRotateInit } from "./features/preventCollectibleRotate";
import { runInNFramesInit } from "./features/runInNFrames";
import { saveDataManagerInit } from "./features/saveDataManager/main";
import { sirenHelpersInit } from "./features/sirenHelpers";
import { areFeaturesInitialized, setFeaturesInitialized } from "./initialized";
import { ModUpgraded } from "./types/ModUpgraded";

/**
 * Use this function to enable the custom features and callbacks provided by `isaacscript-common`.
 *
 * Example:
 * ```
 * const modVanilla = RegisterMod("My Mod", 1);
 * const mod = upgradeMod(modVanilla);
 *
 * // Subscribe to vanilla callbacks
 * mod.AddCallback(ModCallbacks.MC_POST_UPDATE, postUpdate);
 *
 * // Subscribe to custom callbacks
 * mod.AddCallbackCustom(ModCallbacksCustom.MC_POST_ITEM_PICKUP, postItemPickup);
 * ```
 *
 * For a list of all custom callbacks, check out the
 * [Function Signatures](https://isaacscript.github.io/docs/function-signatures#custom-callbacks).
 *
 * @param mod The mod object returned by the `RegisterMod()` function.
 * @param verbose Enables verbose logging for the purposes of crash troubleshooting.
 * Defaults to false.
 * @returns The upgraded mod object.
 * @category Custom Callbacks
 */
export function upgradeMod(mod: Mod, verbose = false): ModUpgraded {
  const modUpgraded = new ModUpgraded(mod, verbose);

  if (!areFeaturesInitialized()) {
    setFeaturesInitialized();

    saveDataManagerInit(modUpgraded);
    initCustomCallbacks(modUpgraded);
    initFeatures(modUpgraded);
  }

  return modUpgraded;
}

function initCustomCallbacks(mod: ModUpgraded) {
  reorderedCallbacksInit(mod);
  postPlayerReorderedCallbacksInit(mod);
  postPlayerInitLateCallbackInit(mod); // 1
  postTearInitLateCallbackInit(mod); // 2
  postFamiliarInitLateCallbackInit(mod); // 3
  postBombInitLateCallbackInit(mod); // 4
  postPickupInitLateCallbackInit(mod); // 5
  postLaserInitLateCallbackInit(mod); // 7
  postKnifeInitLateCallbackInit(mod); // 8
  postProjectileInitLateCallbackInit(mod); // 9
  postNPCInitLateCallbackInit(mod);
  postEffectInitLateCallbackInit(mod); // 1000
  postPickupCollectCallbackInit(mod);
  itemPickupCallbacksInit(mod);
  postPlayerChangeTypeCallbackInit(mod);
  postPlayerChangeHealthCallbackInit(mod);
  postPlayerFatalDamageCallbackInit(mod);
  customReviveCallbacksInit(mod);
  postFlipCallbacksInit(mod);
  postEsauJrCallbacksInit(mod);
  postTransformationCallbackInit(mod);
  postPurchaseCallbackInit(mod);
  postSacrificeCallbackInit(mod);
  postCursedTeleportCallbackInit(mod);
  postSlotInitUpdateCallbacksInit(mod);
  postSlotRenderBrokenCallbacksInit(mod);
  postGridEntityCallbacksInit(mod);
}

function initFeatures(mod: ModUpgraded) {
  deployJSONRoomInit(mod);
  disableInputsInit(mod);
  forgottenSwitchInit(mod);
  getCollectibleItemPoolTypeInit(mod);
  preventCollectibleRotateInit(mod);
  runInNFramesInit(mod);
  sirenHelpersInit(mod);
}
