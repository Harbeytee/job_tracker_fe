import NavBar from "@/app/components/nav-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-2.5 h-screen bg-neutral-50 dark:bg-black-950 p-4">
      <NavBar />
      <aside className="mt-16 md:p-8 lg:mt-0 rounded-xl w-full lg:w-[80%] md:bg-background md:shadow-custom-gray dark:bg-black-400 overflow-y-auto hover:overflow-y-scroll">
        {children}
      </aside>
    </div>
  );
}
