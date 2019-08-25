import { Vector2 } from "../../vector";
import { Shape, LineShape } from "./shapes";

export interface Body {
  pos: Vector2;
  shape_: Shape;
  receiveMask: number;
  parent?: any;
}

export interface StaticBody {
  pos: Vector2;
  shape_: LineShape;
  receiveMask: number;
  parent_?: any;
}

export interface DynamicBodyDefinition extends Body {
  vel: Vector2;
  friction: number;
  hitMask: number;
}

export interface DynamicBody extends DynamicBodyDefinition {
  contactPoints: Vector2[];
}

export interface Colision {
  hitter: DynamicBody;
  receiver: Body;
  point: Vector2;
  penetration: Vector2;
}
