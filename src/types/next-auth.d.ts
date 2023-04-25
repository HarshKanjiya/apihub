// eslint-disable no-unused-vars

import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type userID = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: userID;
  }
}

declare module "next-auth" {
    interface Session{
        user: User & {
            id:userID
        }
    }
}