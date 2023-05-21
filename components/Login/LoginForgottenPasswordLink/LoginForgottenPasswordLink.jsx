"use client"
import { Link } from '@chakra-ui/react'

const LoginForgottenPasswordLink = ({ restorePasswordLink }) => {
  return ( 
    <Link 
      className="text-white underline text-sm font-medium"
      href={restorePasswordLink}
    >
      Забыли пароль?
    </Link>
   );
}
 
export default LoginForgottenPasswordLink;