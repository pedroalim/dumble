import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Files, Home, Trophy, User } from "lucide-react"
import { Link } from "react-router-dom";

export type TeacherPage = 'home'  | 'files' | 'profile' | 'ranking';

interface TeachersNavigationProps {
  activePage: TeacherPage;
}

export default function TeachersNavigation({ activePage }: TeachersNavigationProps) {

  return (
    <div className="fixed bottom-0 left-0 w-full border-t bg-background">
      <div className="flex justify-center p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="px-4">
              <NavigationMenuLink asChild className={`flex h-16 w-16 items-center justify-center cursor-pointer
                                                ${activePage === 'files' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to="/teachers/files">
                  <Files />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-4">
              <NavigationMenuLink asChild className={`flex h-16 w-16 items-center justify-center cursor-pointer
                                                ${activePage === 'home' ? 'border-2 rounded-2xl border-violet-400' : ''}`} >
                <Link to="/teachers/">
                  <Home />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-4">
              <NavigationMenuLink asChild className={`flex h-16 w-16 items-center justify-center cursor-pointer
                                                ${activePage === 'ranking' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to="/teachers/ranking">
                  <Trophy />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-4">
              <NavigationMenuLink asChild className={`flex h-16 w-16 items-center justify-center cursor-pointer
                                                ${activePage === 'profile' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to="/teachers/profile">
                  <User />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
