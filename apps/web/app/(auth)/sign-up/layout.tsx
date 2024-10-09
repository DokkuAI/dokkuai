import Sidebar from "./ui/Sidebar";
import Slider from "./ui/Slider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full  min-h-dvh">
      <Sidebar />
      <div className="flex flex-col w-full pt-6 mb:pt-2 lg:pb-4">
        <div className="w-full flex flex-grow justify-center items-center">
          {children}
        </div>
        <Slider />
      </div>
    </div>
  );
}
