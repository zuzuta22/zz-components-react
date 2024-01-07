"use client";

import { useState, useCallback } from "react";

const useToggleHamburger = (initialState: boolean): [boolean, () => void] => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(initialState);

  const toggleIsHumbergerOpen = useCallback(() => {
    setIsHamburgerOpen((previousState) => !previousState)
  },[]);

  return [
    isHamburgerOpen,
    toggleIsHumbergerOpen,
  ];
};

export default useToggleHamburger;