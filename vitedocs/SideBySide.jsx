export const SideBySide = ({ left, right, leftHeader, rightHeader }) => {
  return (
    <div className="flex">
      <div style={{ maxWidth: '250px' }}>
        {leftHeader ? leftHeader : null}
        {left}
      </div>
      <div className="side-by-side--right">
        {rightHeader ? rightHeader : null}
        {right}
      </div>
    </div>
  );
};
