import CurrentClass from "@/components/current-class";
import StudentsNavigation from "@/components/students-navigation";
import { useParams } from "react-router";
import { StudentsRankingDataTable } from "../../components/students-ranking-data-table";
import { columns, StudentsRank } from "../../components/students-ranking-columns"
import React from "react";

export default function StudentsRanking() {
    const { classCode } = useParams<{ classCode: string }>();

    const [data, setData] = React.useState<StudentsRank[]>([]);

    React.useEffect(() => {
      async function getData(): Promise<StudentsRank[]> {
        return [
          {
            id: "728ed52f",
            placing: 1,
            avatar: 'https://github.com/Lucas-Pontes-Soares.png',
            name: 'Lucas Pontes Soares',
            rank: "diamond",
            score: 360
          },
          // ...
        ]
      }

      getData().then((data) => {
        setData(data);
      })
    }, [])

  return (
    <div>
      <CurrentClass acronym={`ED`} code={`${classCode}`} title={`Estrutura de Dados`} userType="student"/>
      <div className="container mx-auto mt-24 mb-28 max-w-2xl">
        <StudentsRankingDataTable columns={columns} data={data} />
      </div>
      <StudentsNavigation activePage="ranking" />
    </div>
  )
}
