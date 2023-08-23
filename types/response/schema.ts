import { z, ZodSchema } from "zod";

export const SuccessResponseSchema = z.object({
  code: z.number(),
  message: z.string().nullish(),
  data: z.unknown(),
});

export type SuccessResponseSchema<T = unknown> = {
  code: number;
  msg?: string | undefined | null;
  data: T;
};

export const ErrorResponseSchema = z.object({
  code: z.number(),
  message: z.string().nullish(),
});

export type ErrorResponseSchema = z.infer<typeof ErrorResponseSchema>;

//응답 data에 넣을 값

export const TotalResponseSchema = <T extends ZodSchema>(
  responseDataSchema: T
) =>
  z.union([
    SuccessResponseSchema.extend({ data: responseDataSchema }),
    ErrorResponseSchema,
  ]);

export const isSuccessResponse = (
  res: unknown
): res is SuccessResponseSchema => {
  return SuccessResponseSchema.safeParse(res).success;
};

export const isErrorResponse = (res: unknown): res is ErrorResponseSchema => {
  return ErrorResponseSchema.safeParse(res).success;
};
