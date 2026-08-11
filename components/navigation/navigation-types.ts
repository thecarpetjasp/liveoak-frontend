import { Dispatch, SetStateAction } from "react";

export interface MenuStateProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
