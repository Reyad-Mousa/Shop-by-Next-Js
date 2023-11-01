"use client";
import { useContext } from "react";
import style from "./DarkMode.module.css";
import { ThemContext } from "@/context/ThemContext";

export const DarkMode = () => {
  const { mode, toggle } = useContext(ThemContext);
  return (
    <div className={style.container} onClick={toggle}>
      <div className={style.icon}>🌝</div>
      <div className={style.icon}>🌚</div>
      <div
        className={style.switcher}
        style={mode === "light" ? { left: "3px" } : { right: "2px" }}
      />
    </div>
  );
};
