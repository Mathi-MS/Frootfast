import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const OutletContext = createContext<any>(null);

export const OutletProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedOutlet, setSelectedOutlet] = useState("");

  useEffect(() => {
    const savedOutlet = Cookies.get("selectedOutlet");
    if (savedOutlet) setSelectedOutlet(savedOutlet);
  }, []);

  useEffect(() => {
    if (selectedOutlet) {
      Cookies.set("selectedOutlet", selectedOutlet, { expires: 7 });
    }
  }, [selectedOutlet]);

  return (
    <OutletContext.Provider value={{ selectedOutlet, setSelectedOutlet }}>
      {children}
    </OutletContext.Provider>
  );
};

export const useOutlet = () => useContext(OutletContext);
