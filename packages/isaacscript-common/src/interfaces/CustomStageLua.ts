/**
 * This is the format of a custom stage in the "isaacscript" section of the "tsconfig.json" file.
 *
 * The contents of this interface are used to create a "tsconfig-isaacscript-section-schema.json"
 * schema with the "ts-json-schema-generator" library.
 *
 * The contents of this interface are validated at run-time against the schema using the Ajv
 * library.
 *
 * The `CustomStageLua` interface extends this, adding room metadata.
 */

// ts-prune-ignore-next
export type CustomStageTSConfig = Readonly<{
  /** The name of the custom stage. Mandatory. */
  name: string;

  /**
   * Path to the XML file that contains the rooms for the custom stage (created with Basement
   * Renovator). Mandatory.
   */
  xmlPath: string;

  /** An arbitrarily chosen prefix in the range of 101-999. Mandatory. */
  roomVariantPrefix: number;

  /**
   * An integer between 2 and 13, corresponding to the `LevelStage` enum. This is the number of the
   * stage that will be warped to and used as a basis for the stage by the level generation
   * algorithm. Mandatory.
   *
   * (It is not possible to use Basement 1 as a base due to conflicts with the `Game.SetStage`
   * method.)
   */
  baseStage: number;

  /**
   * An integer between 0 and 5, corresponding to the `StageType` enum. This is the number of the
   * stage type that will be warped to and used as a basis for the stage by the level generation
   * algorithm. Mandatory.
   */
  baseStageType: number;

  /**
   * Optional. An object containing the paths to the backdrop graphics for the stage. (A backdrop is
   * the graphics for the walls and floor.) If not specified, the graphics for Basement will be
   * used.
   */
  backdrop?: Readonly<{
    /**
     * The beginning of the path that leads to the backdrop graphics. For example:
     *
     * ```sh
     * gfx/backdrop/revelations/revelations_
     * ```
     */
    prefix: string;

    /**
     * The end of the path that leads to the backdrop graphics. In most cases, this will be ".png".
     */
    suffix: string;

    /**
     * An array of strings that represent the graphic files that are used for the floors in narrow
     * rooms. (The "n" stands for "narrow").
     *
     * You must have at least one string in this array, but you can specify more than one to
     * randomly add extra variety (like the vanilla stages do).
     *
     * For an example of this, see the vanilla file "resources/gfx/backdrop/01_basement_nfloor.png".
     */
    nFloors: readonly string[];

    /**
     * An array of strings that represent the graphic files that are used for the floors in L rooms.
     *
     * You must have at least one string in this array, but you can specify more than one to
     * randomly add extra variety (like the vanilla stages do).
     *
     * For an example of this, see the vanilla file "resources/gfx/backdrop/01_lbasementfloor.png".
     */
    lFloors: readonly string[];

    /**
     * An array of strings that represent the graphic files for the stage's walls.
     *
     * You must have at least one string in this array, but you can specify more than one to
     * randomly add extra variety (like the vanilla stages do).
     *
     * For an example of this, see the vanilla file "resources/gfx/backdrop/01_basement.png". (In
     * the vanilla file, they concatenate all four variations together into one PNG file. However,
     * for the custom stages feature, you must separate each wall variation into a separate file.)
     */
    walls: readonly string[];

    /**
     * An array of strings that represent the graphic files for the stage's corners. You must have
     * at least one string in this array, but you can specify more than one to randomly add extra
     * variety (like the vanilla stages do).
     *
     * For an example of this, see the vanilla file "resources/gfx/backdrop/01_basement.png". (In
     * the vanilla file, they concatenate both variations together into one PNG file and put it in
     * the top right hand corner. The corners are shown in the top right hand corner of the file,
     * with two different variations concatenated together. However, for the custom stages feature,
     * you must separate each corner variation into a separate file (and put it in a different file
     * from the walls).
     */
    corners: readonly string[];
  }>;

  /**
   * Optional. The path to the spritesheet that contains the graphics of the decorations for the
   * floor.
   *
   * If not specified, the vanilla Basement decorations spritesheet will be used. For reference,
   * this is located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
   * Rebirth\resources\gfx\grid\props_01_basement.png`
   */
  decorationsPNGPath?: string;

  /**
   * Optional. The path to the spritesheet that contains the graphics of the rocks/blocks/urns for
   * the floor.
   *
   * If specified, it is assumed that you have your own custom rock alt type, and all vanilla
   * rewards/enemies that spawn from urns will be automatically removed. Use the
   * `POST_GRID_ENTITY_BROKEN` callback to make your own custom rewards. Or, if you want to emulate
   * a vanilla urn/mushroom/skull/polyp/bucket, use the `spawnRockAltReward` helper function.
   *
   * If not specified, the vanilla Basement rocks spritesheet will be used. For reference, this is
   * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
   * Rebirth\resources-dlc3\gfx\grid\rocks_basement.png`
   */
  rocksPNGPath?: string;

  /**
   * Optional. The path to the spritesheet that contains the graphics of the pits for the floor.
   *
   * If not specified, the vanilla Basement pits spritesheet will be used. For reference, this is
   * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
   * Rebirth\resources\gfx\grid\grid_pit.png`
   */
  pitsPNGPath?: string;

  /** Optional. A collection of paths that contain graphics for the doors of the floor. */
  doorPNGPaths?: Readonly<{
    /**
     * Optional. The path to the spritesheet that contains the graphics of the normal doors for the
     * floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_01_normaldoor.png`
     */
    normal?: string; // RoomType.DEFAULT (1)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the Treasure Room doors
     * for the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_02_treasureroomdoor.png`
     */
    treasureRoom?: string; // RoomType.TREASURE (4)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the Boss Room doors for
     * the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_10_bossroomdoor.png`
     */
    bossRoom?: string; // RoomType.BOSS (5)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the Secret Room and Super
     * Secret Room doors for the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_08_holeinwall.png`
     */
    secretRoom?: string; // RoomType.SECRET (7) and RoomType.SUPER_SECRET (8)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the arcade doors for the
     * floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_05_arcaderoomdoor.png`
     */
    arcade?: string; // RoomType.ARCADE (9)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the Curse Room doors for
     * the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_04_selfsacrificeroomdoor.png`
     */
    curseRoom?: string; // RoomType.CURSE (10)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the normal Challenge Room
     * doors for the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_03_ambushroomdoor.png`
     */
    normalChallengeRoom?: string; // RoomType.CHALLENGE (11)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the Boss Challenge Room
     * doors for the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_09_bossambushroomdoor.png`
     */
    bossChallengeRoom?: string; // RoomType.CHALLENGE (11)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the Devil Room doors for
     * the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_07_devilroomdoor.png`
     */
    devilRoom?: string; // RoomType.DEVIL (14)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the Angel Room doors for
     * the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_07_holyroomdoor.png`
     */
    angelRoom?: string; // RoomType.ANGEL (15)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the Boss Rush doors for
     * the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_15_bossrushdoor.png`
     */
    bossRush?: string; // RoomType.BOSS_RUSH (17)

    /**
     * Optional. The path to the spritesheet that contains the graphics of the Chest Room doors for
     * the floor.
     *
     * If not specified, the vanilla Basement door spritesheet will be used. For reference, this is
     * located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac
     * Rebirth\resources\gfx\grid\door_02b_chestroomdoor.png`
     */
    chestRoom?: string; // RoomType.CHEST (20)
  }>;

  /** Optional. A collection of colors used in the boss "versus" screen. */
  versusScreen?: Readonly<{
    /**
     * Optional. An object representing the color to use for the background of the boss "versus"
     * screen. If not specified, the color for Basement 1 will be used.
     *
     * For a list of the colors that correspond to the vanilla stages, see
     * `versusScreenBackgroundColors.ts`.
     */
    backgroundColor?: Readonly<{
      r: number;
      g: number;
      b: number;
    }>;

    /**
     * Optional. An object representing the color to use for the dirt spots in the boss "versus"
     * screen. (There are two dirt spots; one for the player and one for the boss.) If not
     * specified, the color for Basement 1 will be used.
     *
     * For a list of the colors that correspond to the vanilla stages, see
     * `versusScreenDirtSpotColors.ts`.
     */
    dirtSpotColor?: Readonly<{
      r: number;
      g: number;
      b: number;
    }>;
  }>;
}>;

/**
 * An object that represents a custom stage. The "metadata.lua" file contains an array of these
 * objects. Besides the room metadata, the data is the same as what is specified inside the
 * "tsconfig.json" file.
 *
 * The `CustomStage` interface extends this, adding more data.
 */
export interface CustomStageLua extends CustomStageTSConfig {
  readonly roomsMetadata: readonly CustomStageRoomMetadata[];
}

/**
 * Metadata about a custom stage room. Each custom stage object contains an array with metadata for
 * each room.
 */
export type CustomStageRoomMetadata = Readonly<{
  type: number;
  variant: number;
  subType: number;
  shape: number;
  doorSlotFlags: number;
  weight: number;
}>;
