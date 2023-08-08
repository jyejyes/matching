type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return <div className="h-full">{children}</div>;
}
