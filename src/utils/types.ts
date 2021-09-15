import { Prisma, prisma, User } from "../generated/prisma-client";

export interface Context {
  prisma: Prisma;
  request: any;
  user: User;
}