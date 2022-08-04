import type { IIdentifier } from "../_utils/identifier";

export function identifier(id: string): (target: Function) => void {
  return (target: object) => {
    (<IIdentifier>(<any>target).prototype).__identifier = id;
  };
}
