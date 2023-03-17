export const SideBySide = ({ left, right, leftHeader, rightHeader }) => {
  return (
    <div className="flex">
      <div style={{ maxWidth: '250px' }}>
        {leftHeader ? leftHeader : null}
        {left}
      </div>
      <div style={{ width: '100%' }}>
        {rightHeader ? rightHeader : null}
        {right}
      </div>
    </div>
  );
};
