import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites",
  description: "Your favorite items saved in Joyenda.",
};

export default function FavoritesLayout({
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
