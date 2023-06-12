import { Auth } from "./auth.interface";

// ? User interface va a externder de la interface de Auth
export interface User extends Auth { 
  name: string;
  description: string;
}