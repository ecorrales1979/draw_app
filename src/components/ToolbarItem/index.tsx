import './style.css'

interface Props {
  name: string;
}

export const ToolbarItem = ({ name }: Props) => {
  return (
    <div className="toolbar-item">{name}</div>
  )
};

export const Divider = () => {
  return (
    <div className="divider"></div>
  )
};
