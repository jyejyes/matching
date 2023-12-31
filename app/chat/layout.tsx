type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return <div className="w-full h-[100%] relative">{children}</div>;
}
