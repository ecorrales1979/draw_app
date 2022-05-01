import { useDispatch } from 'react-redux';

import './index.css';
import { ToolbarItem, Divider } from "../ToolbarItem";
import { openColorPanel } from '../../actions'

export const Toolbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="toolbar">
      <ToolbarItem name="New" />
      <ToolbarItem name="Save" />
      <Divider />
      <ToolbarItem name="Undo" />
      <Divider />
      <ToolbarItem name="Colors" action={() => dispatch(openColorPanel())} />
      <Divider />
      <ToolbarItem name="Help" />
    </div>
  )
};
