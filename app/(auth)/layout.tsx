import Toggle from "@/components/Toggle";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}{" "}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/digital-money.avif"
            alt="Auth image"
            width={500}
            height={1000}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
      <div className="top-0 absolute">
        <Toggle />
      </div>
    </main>
  );
}
