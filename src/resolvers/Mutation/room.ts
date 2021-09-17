import { RoomCreateInput, RoomWhereUniqueInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  /**
   * Create a new room
   */
  createRoom: (parent, { data } : { data: RoomCreateInput }, ctx: Context) => {
    return ctx.prisma.createRoom(data)
  },

  /**
   * Update a room
   */
  updateRoom: (parent, args, ctx: Context) => ctx.prisma.updateRoom(args),

  /**
   * Delete a room
   */
  deleteRoom: (parent, args: { where: RoomWhereUniqueInput }, ctx: Context) => {
    return ctx.prisma.deleteRoom({ id: args.where.id })
  }
}