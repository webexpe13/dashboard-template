import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { User, Menu } from "lucide-react";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen overflow-hidden flex flex-nowrap relative">
      <aside className="w-[300px] h-full flex-shrink-0 hidden lg:block border-r">
        <ScrollArea className="h-full w-full flex-1">Sidebar</ScrollArea>
      </aside>
      <div className="h-full w-full flex-1 relative">
        <header className="sticky top-0 flex justify-between py-3 items-center gap-4 border-b bg-background px-4 lg:px-6  bg-white">
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Orders
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Orders
              </Link>
            </nav>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full border-2 border-gray-700 p-1">
                <User className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <ScrollArea className="h-full w-full flex-1 relative p-4">
          {children}
        </ScrollArea>
      </div>
    </main>
  );
};

export default DashboardLayout;
