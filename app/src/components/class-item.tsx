import { ChevronRight} from "lucide-react"
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface ClassItemProps {
  userType: 'teacher' | 'student';
  acronym: string;
  title: string;
  code: string;
}

export default function ClassItem({ acronym, title, code, userType }: ClassItemProps) {
  return (
    <Link to={`/${userType}s/${code}`}>
        <div className="w-full max-w-2xl border-2 dark:border-gray-800 white:border-gray-400 rounded-xl p-2 cursor-pointer flex items-center gap-4 mb-2">
        <Avatar className="w-12 h-12">
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback className="bg-amber-500 text-white">{acronym}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
            <p>{title}</p>
            <p className="text-gray-600">{code}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-500" />
        </div>
    </Link>
  );
}
