import { z, ZodSchema } from "zod";

export const SuccessResponseSchema = z.object({
  code: z.number(),
  message: z.string().nullish(),
  data: z.unknown(),
});

export const ErrorResponseSchema = z.object({
  code: z.number(),
  message: z.string().nullish(),
});

//응답 data에 넣을 값
export const TotalResponseSchema = <T extends ZodSchema>(
  responseDataSchema: T
) =>
  z.union([
    SuccessResponseSchema.extend({ data: responseDataSchema }),
    ErrorResponseSchema,
  ]);
