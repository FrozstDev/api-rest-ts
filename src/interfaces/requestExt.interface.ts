import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

//? Extendemos el Request para añadir una nueva interfaz con user?
export interface RequestExt extends Request {
  user?: JwtPayload | { id: string }
}