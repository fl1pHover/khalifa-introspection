import Navbar from "@/component/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="base-container">{children}</div>
    </div>
  );
}
