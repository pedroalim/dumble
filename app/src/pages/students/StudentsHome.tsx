import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Home } from "lucide-react"

export default function StudentsHome() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Home Students</h1>

        <div>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuLink>
                    <Home className="w-9 h-9" />
                </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
    </div>
  )
}
