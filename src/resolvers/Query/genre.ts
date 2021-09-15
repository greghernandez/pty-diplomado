import { Context } from "../../utils";

export default {
  /**
   * Genres resolver
   */
  genres: (parent, args, ctx: Context) => ctx.prisma.genres(args)
}