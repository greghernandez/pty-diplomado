import { MovieCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  createMovie: (parent, { data }: { data: MovieCreateInput}, ctx: Context) => {
    console.log(data)
    return ctx.prisma.createMovie(data)
  },
  // updateMovie: (parent, { id, data }: { id: string, data: MovieCreateInput}, ctx: Context) => {
  //   return ctx.prisma.updateMovie({
  //     data,
  //     where: {
  //       id
  //     }
  //   })
  // }
}