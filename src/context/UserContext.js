import { useState, createContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [balance, setBalance] = useState(0);

  const register = (name, email, password) => {
    setUsers([...users, { name, email, password }]);
  };

  const transaction = (type, amount) => {
    if (type === "Deposit") {
      setBalance(balance + amount);
    } else {
      if (balance > amount) setBalance(balance - amount);
      else return "Amount should be less than balance";
    }
  };

  return (
    <UserContext.Provider value={{ users, register, balance, transaction }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
