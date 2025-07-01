import TeachersNavigation from "@/components/teachers-navigation";

export default function TeachersHome() {

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Home Teachers</h1>
      </div>
      
      <TeachersNavigation activePage="home" />
    </div>
  )
}
