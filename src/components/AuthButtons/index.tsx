import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AuthButton, Container } from './styles'

type AuthButtonsProps = {
  callbackUrl?: string
}

export const AuthButtons = ({ callbackUrl = '/' }: AuthButtonsProps) => {
  const router = useRouter()
  const handleSingIn = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl)
      return
    }
    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <Container>
      <AuthButton onClick={() => handleSingIn('google')}>
        <Image
          src="/images/icons/google.svg"
          alt="Logo Google"
          width={30}
          height={30}
        />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSingIn('github')}>
        <Image
          src="/images/icons/github.svg"
          alt="Logo Github"
          width={30}
          height={30}
        />
        Entrar com Github
      </AuthButton>
      <AuthButton onClick={() => handleSingIn()}>
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
