import { ControllerIndex } from "isaac-typescript-definitions";
import { CustomStage } from "../../interfaces/CustomStage";
import { UIStreakAnimation } from "./customStageConstants";

const v = {
  run: {
    currentCustomStage: null as CustomStage | null,

    /** Whether we are on e.g. Caves 1 or Caves 2. */
    firstFloor: true,

    showingBossVersusScreen: false,

    /** Values are the render frame that the controller first pressed the map button. */
    controllerIndexPushingMapRenderFrame: new Map<ControllerIndex, int>(),

    topStreakTextStartedRenderFrame: null as int | null,

    /**
     * We track text information manually rather than following a sprite to work around the
     * following errors in the "log.txt":
     *
     * [ASSERT] - PushRenderTarget: stack overflow!
     */
    topStreakText: {
      animation: UIStreakAnimation.NONE,
      frame: 0,
      pauseFrame: false,
    },

    /**
     * We track text information manually rather than following a sprite to work around the
     * following errors in the "log.txt":
     *
     * [ASSERT] - PushRenderTarget: stack overflow!
     */
    bottomStreakText: {
      animation: UIStreakAnimation.NONE,
      frame: 0,
      pauseFrame: false,
    },
  },

  room: {
    showingShadows: false,
  },
};
export default v;

/** Indexed by custom stage name. */
export const customStagesMap = new Map<string, CustomStage>();

/** Indexed by room variant. */
export const customStageCachedRoomData = new Map<int, Readonly<RoomConfig>>();

/** Indexed by entity ID. */
export const customBossPNGPaths = new Map<
  string,
  [namePNGPath: string, portraitPNGPath: string]
>();
