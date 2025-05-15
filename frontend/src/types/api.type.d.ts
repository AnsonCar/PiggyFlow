interface TokenObtainPairOutputSchema {
  username: string;
  refresh: string;
  access: string;
}

interface TokenObtainPairInputSchema {
  password: string;
  username: string;
}

interface TokenRefreshOutputSchema {
  refresh: string;
  access: string | null;
}

interface TokenRefreshInputSchema {
  refresh: string;
}

interface Schema {
}

interface TokenVerifyInputSchema {
  token: string;
}

interface GroupOut {
  id: number;
  name: string;
}

interface UserList {
  data: UserOut[];
}

interface UserOut {
  id: number;
  uuid: string;
  username: string;
  email: string;
  groups: GroupOut[];
}

interface UserIn {
  username: string;
  password: string;
}

interface UserPut {
  username: string;
}

interface UserPutPassword {
  password: string;
}

interface UserGroup {
  id: number;
}

interface GroupList {
  data: GroupOut[];
}

interface GroupIn {
  name: string;
}

interface GroupPut {
  name: string;
}

