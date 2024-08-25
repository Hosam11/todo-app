import { MouseEvent, TouchEvent, useState } from "react";

const useContextMenu = (visible: boolean, x: number, y: number) => {
  const [contextMenu, setContextMenu] = useState({
    visible: visible,
    x: x,
    y: y,
  });
  const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleTouchHold = (event: TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    const touch = event.touches[0];
    setContextMenu({
      visible: true,
      x: touch.clientX,
      y: touch.clientY,
    });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({
      ...contextMenu,
      visible: false,
    });
  };

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`);
    handleCloseContextMenu();
  };

  return {
    contextMenu,
    handleContextMenu,
    handleCloseContextMenu,
    handleAction,
    handleTouchHold
  };
};

export default useContextMenu;
