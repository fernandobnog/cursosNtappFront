import { Cliente } from "./cliente";

export type AuthenticationRequest = {
  username: string;
  password: string;
}

export type UserCache = {
  id: number;
  email: string;
  profile: string;
}

export type User = {
  id: number;
  cliente: Cliente;
  password: string;
  profile: Profile;
}

export type Profile = {
  id: number;
  name: string;
  roles: Role[];
}

export type Role = {
  id: number;
  name: string;
}

