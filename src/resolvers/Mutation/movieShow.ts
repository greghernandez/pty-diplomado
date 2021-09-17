import { MovieShowCreateInput, MovieShowWhereUniqueInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  /**
   * Create movie show
   */
  createMovieShow: (parent, { data }: { data: MovieShowCreateInput}, ctx: Context) => ctx.prisma.createMovieShow(data),
   
  /**
   * Update movie show
   */
  updateMovieShow: (parent, args, ctx: Context) => ctx.prisma.updateMovieShow(args),

  /**
   * Delete movie show
   */
  deleteMovieShow: (parent, args: { where: MovieShowWhereUniqueInput }, ctx: Context) => {
    return ctx.prisma.deleteMovieShow({ id: args.where.id })
  }
}