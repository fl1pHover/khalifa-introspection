import Navbar from "@/component/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-950 text-white">
      {children}
    </div>
  );
}
