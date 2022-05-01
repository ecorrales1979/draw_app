import './style.css'

interface Props {
  name: string;
  action?: () => ({type: string});
}

export const ToolbarItem = ({ name, action }: Props) => {
  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (action) action();
  }

  return (
    <div className="toolbar-item" onClick={handleClick}>{name}</div>
  )
};

export const Divider = () => {
  return (
    <div className="divider"></div>
  )
};
