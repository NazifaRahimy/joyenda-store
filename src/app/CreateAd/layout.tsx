import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Ad ",
  description: "Create your ad and share it with others on Joyenda.",
};

export default function CreateAdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      {children}
    </section>
  );
}
