import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy ",
  description: "Read Joyenda's privacy policy and learn how we protect your data.",
};

export default function PrivacyLayout({
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
