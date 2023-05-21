import Link from "next/link";

const LoginForgottenPasswordLink = ({ restorePasswordLink, className }) => {
  return ( 
    <Link 
      className={className}
      href={restorePasswordLink}
    >
      Забыли пароль?
    </Link>
   );
}
 
export default LoginForgottenPasswordLink;