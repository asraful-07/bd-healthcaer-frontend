import React from "react";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-amber-600 p-6 text-2xl text-white mb-4">Navbar</div>
      <div className="min-h-[calc(100vh-232px)]">{children}</div>
      <div>Footer</div>
    </>
  );
}
