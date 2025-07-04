import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BotMessageSquare, Home, Trophy, User } from "lucide-react"
import { Link, useParams } from "react-router-dom";

export type StudentPage = 'home'  | 'chatBot' | 'profile' | 'ranking';

interface StudentsNavigationProps {
  activePage: StudentPage;
}

export default function StudentsNavigation({ activePage }: StudentsNavigationProps) {
  const { classCode } = useParams<{ classCode: string }>();

  return (
    <div className="fixed bottom-0 left-0 w-full border-t bg-background">
      <div className="flex justify-center p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="px-2 sm:px-4">
              <NavigationMenuLink asChild className={`flex h-12 w-12 items-center justify-center cursor-pointer sm:h-16 sm:w-16
                                                ${activePage === 'chatBot' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to={`/students/${classCode}/chatbot/`}>
                  <BotMessageSquare className="h-6 w-6 sm:h-8 sm:w-8" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-2 sm:px-4">
              <NavigationMenuLink asChild className={`flex h-12 w-12 items-center justify-center cursor-pointer sm:h-16 sm:w-16
                                                ${activePage === 'home' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to={`/students/${classCode}`}>
                  <Home className="h-6 w-6 sm:h-8 sm:w-8" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-2 sm:px-4">
              <NavigationMenuLink asChild className={`flex h-12 w-12 items-center justify-center cursor-pointer sm:h-16 sm:w-16
                                                ${activePage === 'ranking' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to={`/students/${classCode}/ranking`}>
                  <Trophy className="h-6 w-6 sm:h-8 sm:w-8" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-2 sm:px-4">
              <NavigationMenuLink asChild className={`flex h-12 w-12 items-center justify-center cursor-pointer sm:h-16 sm:w-16
                                                ${activePage === 'profile' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to={`/students/${classCode}/profile`}>
                  <User className="h-6 w-6 sm:h-8 sm:w-8" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
