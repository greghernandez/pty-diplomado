import { Console } from "console";
import { RoomWhereUniqueInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  /**
   * Rooms Resolver 
   */
  rooms: (parent, args, ctx: Context) => {
    console.log(args)
    ctx.prisma.rooms(args)
  },

  /**
   * Room Resolver
   */
  room: (parent, args: { where: RoomWhereUniqueInput }, ctx: Context) => {
    ctx.prisma.room({ id: args.where.id })
  }
}