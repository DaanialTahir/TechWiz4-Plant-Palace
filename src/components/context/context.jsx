import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
const ContextProvier = ({ children }) => {
  const [cartLength, setCartLength] = useState(0);
  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cartLength))
 
  },[])




  return (
    <AuthContext.Provider value={{ cartLength, setCartLength }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvier;


