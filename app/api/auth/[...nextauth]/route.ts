import NextAuth, { NextAuthOptions, User } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const kakaoProvider = KakaoProvider({
  clientId: process.env.NEXT_PUBLIC_KAKAO_KEY ?? "",
  clientSecret: process.env.NEXT_PUBLIC_SECRET_KAKAO_KEY ?? "",
});

const handler: NextAuthOptions = NextAuth({
  providers: [kakaoProvider],
  callbacks: {
    async jwt({ token, account, user }) {
      // 초기 로그인시 User 정보를 가공해 반환
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at,
          refreshToken: account.refresh_token,
          user,
        };
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user as User;

      session.accessToken = token.accessToken;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
