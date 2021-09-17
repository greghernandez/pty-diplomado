import { MovieShowWhereUniqueInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  /**
   * Movie show resolver
   */
   movieShow: (parent, args: { where: MovieShowWhereUniqueInput }, ctx: Context) => ctx.prisma.movieShow({ id: args.where.id }),

   /**
    * Movie show list resolver
    */
   movieShows: (parent, args, ctx: Context) => ctx.prisma.movieShows(args)
}