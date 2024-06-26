import * as React from "react";

const UserContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "login": {
      localStorage.setItem("userId", action.id);
      localStorage.setItem("token", action.token);
      localStorage.setItem("userData", action.userData);
      return {
        ...state,
        userId: action.id,
        userData: action.userData,
        error: null,
        token: action.token,
      };
    }
    case "logout": {
      localStorage.removeItem("userId");
      localStorage.removeItem("userData");
      return {
        ...state,
        userId: null,
        userData: null,
        error: null,
        token: null,
      };
    }
    case "loadUserData": {
      return {
        ...state,
        userData: action.userData,
        userId: state.userId,
      };
    }
    case "nonetwork": {
      return { ...state, error: "No Network Connection" };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, {
    userId: localStorage.getItem("userId") || "",
    userData: localStorage.getItem("userData") || "",
    error: null,
    token: localStorage.getItem("token") || "",
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider, useUser };
