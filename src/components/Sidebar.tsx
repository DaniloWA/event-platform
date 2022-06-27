import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: publishedAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      slug
      title
      availableAt
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                <Lesson 
                    title="Aula 01"
                    slug="aula-01"
                    availableAt={new Date()}
                    type="class"
                /> 

            </div>
        </aside>
    )
}