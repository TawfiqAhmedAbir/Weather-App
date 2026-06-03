export default function PressableCard({
  children,
  className = '',
  onClick,
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      type={Tag === 'button' ? 'button' : undefined}
      onClick={onClick}
      className={`transition-transform duration-150 active:scale-[0.97] hover:scale-[0.98] ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
