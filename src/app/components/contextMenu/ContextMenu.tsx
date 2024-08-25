import React from 'react';
import styles from './ContextMenu.module.css';

interface ContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  onClose: () => void;
  onAction: (action: string) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, visible, onClose, onAction }) => {
  if (!visible) return null;

  return (
    <div
      className={styles.contextMenu}
      style={{ top: y, left: x }}
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={() => onAction('edit')}>Edit</button>
      <button onClick={() => onAction('delete')}>Delete</button>
    </div>
  );
};

export default ContextMenu;
