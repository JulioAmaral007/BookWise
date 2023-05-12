import { ChartLineUp } from '@phosphor-icons/react'
import { RatingCard } from '../RatingCard'
import { Text } from '../Typograph'
import { PageTitle } from '../ui/PageTitle'
import { Container } from './styles'

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard
            key={i}
            rating={{
              id: 'aa',
              rate: 4,
              user: {
                name: 'Júlio',
                avatar_url:
                  'https://avatars.githubusercontent.com/u/92815712?v=4',
                email: 'jczrpereira100',
                id: 'kdjd',
                created_at: new Date(),
              },
              book: {
                author: 'dsgsd',
                cover_url:
                  'https://avatars.githubusercontent.com/u/92815712?v=4',
                id: 'fvgdf',
                name: 'fbd',
                summary:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aliquid architecto et recusandae dolorem voluptatum nostrum, non dicta iure! Distinctio molestiae quisquam numquam nam autem, soluta temporibus porro sint aliquam nobis ratione dolore eaque minus inventore voluptas vitae corrupti ex enim quibusdam sapiente tempore? Quis obcaecati temporibus natus autem recusandae, mollitia delectus blanditiis iste rerum ad nemo, hic ea consequuntur dolore dolor necessitatibus impedit fugiat quasi reiciendis voluptatem nostrum excepturi aut corrupti id. Esse iste nesciunt sed qui sequi, alias voluptates aliquid, earum maxime dolor quisquam quaerat soluta similique rerum sapiente commodi sunt perferendis aspernatur dolorum, ipsa distinctio! Magni repudiandae, necessitatibus, tenetur deleniti distinctio, amet consequatur quod odio neque veritatis eligendi laudantium fuga illum pariatur ad aliquid cum. Praesentium nesciunt odit quaerat obcaecati eaque? A nesciunt similique fuga, numquam dolorem exercitationem, voluptatum ipsam tempora magni doloribus, id iure illum reprehenderit in reiciendis corrupti ratione esse commodi officia perspiciatis corporis. Excepturi amet corporis sequi eius voluptates repudiandae deserunt officia aut quae minima laboriosam similique voluptatum illo cum ea sunt alias, dignissimos sed aspernatur vero eos fuga? Impedit ab eligendi hic iusto fuga suscipit dicta rem quos porro pariatur corporis officia libero laboriosam, sapiente dolor cumque ad quam odit recusandae repellendus reprehenderit.',
                total_pages: 189,
              },
              created_at: new Date(),
            }}
          />
        ))}
      </section>
    </Container>
  )
}
