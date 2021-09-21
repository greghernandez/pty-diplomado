import { TicketWhereUniqueInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  /**
   * Get a ticket by id
   */
  ticket: (parent, args: { where: TicketWhereUniqueInput }, ctx: Context) => ctx.prisma.ticket({ id: args.where.id }),
  
  /**
   * Get all tickets
   */
  tickets: (parent, args, ctx: Context) => ctx.prisma.tickets(args),
}