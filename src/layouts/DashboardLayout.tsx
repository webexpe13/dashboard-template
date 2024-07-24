import { ScrollArea } from "@/components/ui/scroll-area";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen overflow-hidden flex flex-nowrap">
      <aside className="w-[300px] h-full flex-shrink-0">
        <ScrollArea className="h-full w-full flex-1">Sidebar</ScrollArea>
      </aside>
      <ScrollArea className="h-full w-full flex-1">{children}</ScrollArea>
    </main>
  );
};

export default DashboardLayout;
