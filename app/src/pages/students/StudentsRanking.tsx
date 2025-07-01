import StudentsNavigation from "@/components/students-navigation";

export default function StudentsRanking() {

  return (
    <div>

      <div className="min-h-screen flex items-center justify-center pb-24">
        <h1 className="text-4xl font-bold mb-4">Ranking dos Estudantes</h1>
      </div>

      <StudentsNavigation activePage="ranking" />
    </div>
  )
}
