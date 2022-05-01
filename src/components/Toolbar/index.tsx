import './index.css';
import { ToolbarItem, Divider } from "../ToolbarItem";

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <ToolbarItem name="New" />
      <ToolbarItem name="Save" />
      <Divider />
      <ToolbarItem name="Undo" />
      <Divider />
      <ToolbarItem name="Colors" />
      <Divider />
      <ToolbarItem name="Help" />
    </div>
  )
};
