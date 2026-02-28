/**
 * hokage-chess — Data-driven chess content strategy platform
 * Part of the organvm eight-organ system (ORGAN-III: Commerce).
 */

export const VERSION = "0.1.0";

export function main(): void {
  console.log(`hokage-chess v${VERSION}`);
}

export * from "./content-strategy";
export * from "./analytics";
export * from "./growth";
export * from "./narrative";
