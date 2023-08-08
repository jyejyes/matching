import "#/styles/globals.css";
import { Metadata } from "next";
import LibraryWrapper from "#/app/_components/LibraryWrapper";

export const metadata: Metadata = {
  title: {
    default: "10days project",
    template: "%s | Next.js App Router",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="h-[100%]">
      <body className="flex-center bg-gray7 h-full">
        <LibraryWrapper>
          <div className="bg-white min-w-[320px] w-full max-w-[400px] h-[100%] overflow-x-hidden">
            <div id="modal-root" />
            {children}
          </div>
        </LibraryWrapper>
      </body>
    </html>
  );
}
