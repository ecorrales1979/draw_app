import { useDispatch, useSelector } from "react-redux";

import './style.css';
import { setStrokeColor } from "../../actions";
import { currentStrokeSelector } from "../../reducers/rootReducer";

interface Props {
  color: string;
}

export const ColorItem = ({ color }: Props) => {
  const currentStroke = useSelector(currentStrokeSelector);
  const dispatch = useDispatch();

  const handleColorChange = () => {
    dispatch(setStrokeColor(color));
  }

  const classesList = ['color']

  if (color === currentStroke.color) {
    classesList.push('selected');
  }

  return (
    <div
      onClick={handleColorChange}
      className={classesList.join(' ')}
      style={{ backgroundColor: color }}
    />
  )
};
