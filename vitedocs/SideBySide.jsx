export const SideBySide = ({
  left,
  right,
  leftHeader,
  rightHeader,
  leftStyle,
  rightStyle,
  style
}) => {
  return (
    <div className="flex" style={style}>
      <div className="side-by-side--left" style={leftStyle}>
        {leftHeader ? leftHeader : null}
        {left}
      </div>
      <div className="side-by-side--right" style={leftStyle}>
        {rightHeader ? rightHeader : null}
        {right}
      </div>
    </div>
  );
};
