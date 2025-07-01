import TeachersNavigation from "@/components/teachers-navigation";

export default function TeachersProfile() {

  return (
    <div>

      <div className="min-h-screen flex items-center justify-center pb-24">
        <h1 className="text-4xl font-bold mb-4">Perfil do Professor</h1>
      </div>

      <TeachersNavigation activePage="profile" />
    </div>
  )
}
