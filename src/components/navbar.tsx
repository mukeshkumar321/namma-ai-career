import React from "react";
import {
  ChevronDownIcon,
  FileTextIcon,
  GraduationCapIcon,
  LayoutDashboard,
  PenBoxIcon,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme";
import Link from "next/link";
import { Pacifico } from "next/font/google";

const storyScript = Pacifico({ subsets: ["latin"], weight: "400" });

const tools = [
  { href: "/resume-builder", icon: FileTextIcon, label: "Resume Builder" },
  { href: "/cover-letter", icon: PenBoxIcon, label: "Cover Letter" },
  { href: "/interview", icon: GraduationCapIcon, label: "Interview Prep" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/50 backdrop-blur-sm shadow-sm">
      <nav
        role="navigation"
        className="container mx-auto flex items-center justify-between px-4 py-4"
      >
        {/* Brand */}
        <Link
          href="/"
          className={`${storyScript.className} font-bold text-3xl md:text-4xl bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent`}
        >
          namma AI
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-x-4">
          <ThemeToggle />

          <Button asChild size="lg" className="flex items-center gap-2">
            <Link href="/dashboard">
              <LayoutDashboard aria-hidden="true" /> Dashboard
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                aria-label="Open growth tools menu"
                className="flex items-center gap-2"
              >
                <StarsIcon aria-hidden="true" />
                Growth Tools
                <ChevronDownIcon aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={4}>
              {tools.map((tool, idx) => (
                <React.Fragment key={tool.href}>
                  {idx > 0 && <DropdownMenuSeparator />}
                  <DropdownMenuItem asChild>
                    <Link
                      href={tool.href}
                      className="flex w-full items-center gap-2"
                    >
                      <tool.icon aria-hidden="true" /> {tool.label}
                    </Link>
                  </DropdownMenuItem>
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
