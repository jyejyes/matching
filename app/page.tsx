import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>
        next(app dir) + zustand + typesciprt + tailwindcss + pnpm +
        tanstack-query + 서버 컴포넌트 쓰려는 노력하는 프로젝트
      </p>

      <Link href="/signup">로그인 링크</Link>
    </div>
  );
}
