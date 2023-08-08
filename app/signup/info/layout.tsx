type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return <div className="p-4 h-[100%]">{children}</div>;
}
