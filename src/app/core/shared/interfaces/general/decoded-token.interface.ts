import { Role } from '../../enums/role.enum';

export interface DecodedToken {
  sub: string;
  role: Role;
}
