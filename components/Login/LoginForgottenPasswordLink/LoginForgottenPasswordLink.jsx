import Link from "next/link";

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