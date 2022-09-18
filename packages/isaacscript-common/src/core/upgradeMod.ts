import { postNewRoomEarlyCallbackInit } from "../callbacks/postNewRoomEarly";
import { ModUpgraded } from "../classes/ModUpgraded";
import { saveDataManagerInit } from "../features/saveDataManager/main";
import {
  areFeaturesInitialized,
  setFeaturesInitialized,
} from "../featuresInitialized";
import { initCustomCallbacks } from "../initCustomCallbacks";
import { initFeatures } from "../initFeatures";
import { patchErrorFunction } from "../patchErrorFunctions";
import { loadShaderCrashFix } from "../shaderCrashFix";

/**
 * Use this function to enable the custom callbacks and other optional features provided by
 * `isaacscript-common`.
 *
 * For example:
 *
 * ```ts
 * const modVanilla = RegisterMod("My Mod", 1);
 * const mod = upgradeMod(modVanilla);
 *
 * // Subscribe to vanilla callbacks.
 * mod.AddCallback(ModCallback.POST_UPDATE, postUpdate);
 *
 * // Subscribe to custom callbacks.
 * mod.AddCallbackCustom(ModCallbackCustom.POST_ITEM_PICKUP, postItemPickup);
 * ```
 *
 * @param modVanilla The mod object returned by the `RegisterMod` function.
 * @param debug Optional. Whether to log additional output when a callback is fired. Default is
 *              false.
 * @param timeThreshold Optional. If provided, will only log callbacks that take longer than the
 *                      specified number of seconds.
 * @returns The upgraded mod object.
 */
export function upgradeMod(
  modVanilla: Mod,
  debug = false,
  timeThreshold?: float,
): ModUpgraded {
  const mod = new ModUpgraded(modVanilla, debug, timeThreshold);

  if (!areFeaturesInitialized()) {
    setFeaturesInitialized();

    patchErrorFunction();
    loadShaderCrashFix(modVanilla);

    // We initialize the `POST_NEW_ROOM_EARLY` callback first since it is used by the save data
    // manager.
    postNewRoomEarlyCallbackInit(mod);

    // We initialized the save data manager second since it is used by the other custom callbacks
    // and features.
    saveDataManagerInit(mod);

    // We initialize custom callbacks next since some features use custom callbacks.
    initCustomCallbacks(mod);

    initFeatures(mod);
  }

  return mod;
}
