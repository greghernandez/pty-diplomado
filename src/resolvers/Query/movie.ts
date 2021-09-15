import { MovieWhereUniqueInput } from "../../generated/prisma-client"
import { Context } from "../../utils"

export default {
  /**
   * Movies resolver
   */
  movies: (parent, args, ctx: Context) => ctx.prisma.movies(args),
  
  /**
   * Movie resolver
   */
  movie: (parent, args: { where: MovieWhereUniqueInput }, ctx: Context) => {
    return ctx.prisma.movie({ id: args.where.id, title: args.where.title })
  }
}