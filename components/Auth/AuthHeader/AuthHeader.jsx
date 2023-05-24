import AuthLink from "../AuthLink/AuthLink";

const AuthHeader = () => {
  
  

  return ( 
    <ul 
      className="pt-[25px] flex m-auto justify-between w-[220px]
      lg:pt-[96px] lg:w-[360px]"
    >
      <AuthLink path="/login">Вход</AuthLink>
      <AuthLink path="/register">Регистрация</AuthLink>
    </ul>
  
   );
}
 
export default AuthHeader;