import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Joyenda, our mission and team.",
};

export default function AboutLayout({
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
