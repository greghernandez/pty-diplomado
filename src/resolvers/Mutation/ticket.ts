import { TicketCreateInput, TicketWhereUniqueInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  /**
   * Create a new ticket
   */
   createTicket: (parent, { data }: { data: TicketCreateInput}, ctx: Context) => {
    return ctx.prisma.createTicket(data)
  },

  /**
   * Update a ticket
   */
  updateTicket: (parent, args, ctx: Context) => ctx.prisma.updateTicket(args),

  /**
   * Delete a ticket
   */
  deleteTicket (parent, args: { where: TicketWhereUniqueInput } , ctx: Context) {
    return ctx.prisma.deleteTicket({ id: args.where.id })
  }
}