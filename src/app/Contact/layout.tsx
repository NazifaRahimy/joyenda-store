import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ",
  description: "Get in touch with Joyenda support or send us your feedback.",
};

export default function ContactLayout({
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
