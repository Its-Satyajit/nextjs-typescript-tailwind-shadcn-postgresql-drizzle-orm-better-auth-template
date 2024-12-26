import { z } from "zod";

export const Route = {
  name: "ApiAuthAll",
  params: z.object({
    all: z.string().array(),
  }),
};
