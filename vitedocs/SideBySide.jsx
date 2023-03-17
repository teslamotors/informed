export const SideBySide = ({ left, right }) => {
  return (
    <div className="flex">
      <div style={{ maxWidth: '250px' }}>{left}</div>
      <div style={{ width: '100%' }}>{right}</div>
    </div>
  );
};
