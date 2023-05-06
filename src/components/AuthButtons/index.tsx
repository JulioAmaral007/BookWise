import Image from 'next/image'
import { AuthButton, Container } from './styles'

export function AuthButtons() {
  return (
    <Container>
      <AuthButton>
        <Image
          src="/images/icons/google.svg"
          alt="Logo Google"
          width={30}
          height={30}
        />
        Entrar com Google
      </AuthButton>
      <AuthButton>
        <Image
          src="/images/icons/github.svg"
          alt="Logo Github"
          width={30}
          height={30}
        />
        Entrar com Github
      </AuthButton>
      <AuthButton>
        <Image
          src="/images/icons/rocket.svg"
          alt="Icon Rocket"
          width={30}
          height={30}
        />
        Entrar como Visitante
      </AuthButton>
    </Container>
  )
}
