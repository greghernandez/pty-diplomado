import { GenreWhereUniqueInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  /**
   * Genre resolver
   */
  genre: (parent, args: { where: GenreWhereUniqueInput }, ctx: Context) => ctx.prisma.genre({ id: args.where.id }),

  /**
   * Genres resolver
   */
  genres: (parent, args, ctx: Context) => ctx.prisma.genres(args)
}