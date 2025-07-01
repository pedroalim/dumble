import StudentsNavigation from "@/components/students-navigation";

export default function StudentsProfile() {

  return (
    <div>

      <div className="min-h-screen flex items-center justify-center pb-24">
        <h1 className="text-4xl font-bold mb-4">Perfil do Estudante</h1>
      </div>

      <StudentsNavigation activePage="profile"/>
    </div>
  )
}
