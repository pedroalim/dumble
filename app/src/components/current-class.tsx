import { ChevronLeft} from "lucide-react"
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface CurrentClassProps {
  userType: 'teacher' | 'student';
  acronym: string;
  title: string;
  code: string;
}

export default function CurrentClass({ acronym, title, code, userType }: CurrentClassProps) {
  return (
    <Link to={`/${userType}s/classes`}>
        <div className="fixed top-0 left-0 right-0 z-50 bg-background p-4 pb-0">
            <div className="w-full max-w-2xl mx-auto border-2 dark:border-gray-800 white:border-gray-400 rounded-xl p-2 cursor-pointer flex items-center gap-4">
                <ChevronLeft className="h-5 w-5 text-gray-500" />
                <div className="flex-grow">
                    <p>{title}</p>
                    <p className="text-gray-600">{code}</p>
                </div>
                <Avatar className="w-12 h-12">
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarFallback className="bg-amber-500 text-white">{acronym}</AvatarFallback>
                </Avatar>
            </div>
        </div>
    </Link>
  );
}
