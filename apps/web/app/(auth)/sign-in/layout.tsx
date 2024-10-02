import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-dvh items-center">
      <div className="w-full flex-grow flex justify-center items-center">
        <div className="w-auto lg:grid grid-cols-2 gap-20">
          <div className="hidden lg:block my-auto">
            <Image width={400} height={400} src="/image.png" alt="login-hero" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
