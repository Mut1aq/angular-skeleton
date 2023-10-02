import { Role } from '../../enums/role.enum';

export interface DecodedToken {
  sub: string;
  role: Role;
  iat: number;
  exp: number;
  [key: string]: string | Role | number;
}
