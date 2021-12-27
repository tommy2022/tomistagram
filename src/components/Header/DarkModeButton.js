import React from "react";
import { useColorMode, useColorModeValue, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import "./DarkModeButton.css";

export default function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  const buttonBackground = useColorModeValue("black", "white");
  const iconBackground = useColorModeValue("white", "black");

  const isEnabled = colorMode === "dark";
  return (
    <Tooltip label="Toggle Dark Mode">
      <label className="toggle-wrapper" htmlFor="toggle">
        <div
          className={`toggle ${isEnabled ? "enabled" : "disabled"}`}
          style={{ background: buttonBackground }}
        >
          <div className="icons">
            <MoonIcon color={iconBackground} />
            <SunIcon color={iconBackground} />
          </div>
          <input id="toggle" onClick={toggleColorMode} />
        </div>
      </label>
    </Tooltip>
  );
}
