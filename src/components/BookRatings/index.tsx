import { Text } from '../Typograph'
import { UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'

export const BookRatings = () => {
  const handleRate = () => {
    console.log('avaliar')
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link href="" withoutIcon onClick={handleRate} text="Avaliar" />
      </header>

      <section>
        {Array.from({ length: 5 }).map((_, i) => (
          <UserRatingCard
            key={i}
            rating={{
              rate: 2,
              user: {
                name: 'julio',
                avatar_url: '',
              },
              created_at: new Date(),
              description:
                'dbsksmncsdhskj            jjjjjjjj            jjjjjjjjjjjoiiiiii         iiiiiisssssssssssss',
            }}
          />
        ))}
      </section>
    </Container>
  )
}
