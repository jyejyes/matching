"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";

export default function Page() {
  const { push } = useRouter();

  useEffect(() => {
    push(routerPaths.signup());
  }, []);
  return (
    <div>
      <p>tecky</p>

      <Link href="/signup">로그인 링크</Link>
    </div>
  );
}
