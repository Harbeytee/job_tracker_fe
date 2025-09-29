import NavBar from "@/app/components/nav-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-2.5 h-screen bg-white dark:bg-black-950 p-4">
      <NavBar />
      <aside className="mt-16 lg:mt-0 rounded-xl w-full lg:w-[80%] lg:bg-neutral-300 dark:bg-black-400">
        {children}
      </aside>
    </div>
  );
}
