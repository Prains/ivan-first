import IsolatedAuthLink from "../IsolatedAuthLink/IsolatedAuthLink";

const AuthHeader = () => {
  
  

  return ( 
    <ul 
      className="pt-[25px] flex m-auto justify-between w-[220px]
      lg:pt-[96px] lg:w-[360px]"
    >
      <IsolatedAuthLink path="/login">Вход</IsolatedAuthLink>
      <IsolatedAuthLink path="/register">Регистрация</IsolatedAuthLink>
    </ul>
  
   );
}
 
export default AuthHeader;