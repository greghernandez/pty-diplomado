import { MovieCreateInput, MovieShowWhereUniqueInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  /**
   * Create a new movie
   */
  createMovie: (parent, { data }: { data: MovieCreateInput}, ctx: Context) => {
    console.log(data)
    return ctx.prisma.createMovie(data)
  },

  /**
   * Update a movie
   */
  updateMovie: (parent, args, ctx: Context) => ctx.prisma.updateMovie(args),

  /**
   * Delete a movie
   */
  deleteMovie: (parent, args: { where: MovieShowWhereUniqueInput }, ctx: Context) => {
    return ctx.prisma.deleteMovie({ id: args.where.id })
  }
}