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
            <NavigationMenuItem className="px-4">
              <NavigationMenuLink asChild className={`flex h-16 w-16 items-center justify-center cursor-pointer
                                                ${activePage === 'chatBot' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to={`/students/${classCode}/chatbot/`}>
                  <BotMessageSquare />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-4">
              <NavigationMenuLink asChild className={`flex h-16 w-16 items-center justify-center cursor-pointer
                                                ${activePage === 'home' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to={`/students/${classCode}`}>
                  <Home />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-4">
              <NavigationMenuLink asChild className={`flex h-16 w-16 items-center justify-center cursor-pointer
                                                ${activePage === 'ranking' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to={`/students/${classCode}/ranking`}>
                  <Trophy />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-4">
              <NavigationMenuLink asChild className={`flex h-16 w-16 items-center justify-center cursor-pointer
                                                ${activePage === 'profile' ? 'border-2 rounded-2xl border-violet-400' : ''}`}>
                <Link to={`/students/${classCode}/profile`}>
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
