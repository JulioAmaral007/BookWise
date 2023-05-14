import { Text } from '../Typograph'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
}

export const BookRatings = ({ ratings }: BookRatingsProps) => {
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
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
