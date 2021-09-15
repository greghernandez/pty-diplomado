import { GenreCreateInput, GenreWhereUniqueInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  /**
   * Create a new genre
   */ 
  createGenre: (parent, { data }: { data: GenreCreateInput}, ctx: Context) => {
    return ctx.prisma.createGenre(data)
  },

  /**
   * Update a genre
   */
  updateGenre: (parent, args, ctx: Context) => ctx.prisma.updateGenre(args),

  /**
   * Delete a genre
   */
  deleteGenre (parent, args: { where: GenreWhereUniqueInput } , ctx: Context) {
    return ctx.prisma.deleteGenre({ id: args.where.id})
  }
}