//회원가입 관련
import { z } from "zod";

export const authUserSchema = {
  id: z.number(),
  name: z.string(),
  email: z.string(),
  image: z.string(),
};

export const tokenSchema = {
  expires: z.string().optional(),
  accessToken: z.string().optional(),

  jwtToken: z.string(),
};

export const signupSchema = {
  skill: z.string(),

  avatarImgName: z.string(),
  avatarImgUrl: z.string(),

  //login
};

export const userSchema = {
  id: z.number(),
  imgUrl: z.string(),
  interest: z.array(z.string()),
  intro: z.string(),
  position: z.enum(["BACK_END", "FRONT_END", "PM_PO", "DESIGNER", ""]),
  skill: z.array(z.string()),
  username: z.string(),
};

export const fromToUserSchema = z.object({
  id: userSchema.id,
  username: userSchema.username,
  position: userSchema.position,
  imgUrl: userSchema.imgUrl,
});

export const TimeSchema = {
  time: z.string(),
};

export const matchSchema = {
  registrationSource: z.string().optional(),
  id: z.number(),
  imgUrl: userSchema.imgUrl,
  interest: userSchema.interest,
  intro: userSchema.intro,
  position: userSchema.position,
  skill: userSchema.skill,
  userProviderId: z.string(),
  username: userSchema.username,
  matchTime: TimeSchema.time,
};
export const matchingLikeSchema = {
  like: z.boolean(),
};

export const ChatSchema = {
  messageRoomId: z.number(),
  createdTime: TimeSchema.time,
};

export const MessageSchema = {
  messageId: z.number(),
  content: z.string(),
  messageWriterId: userSchema.id,
  isRead: z.boolean(),
  messageCreatedTime: TimeSchema.time,
  isNewMessageInRoom: z.boolean(),
};
