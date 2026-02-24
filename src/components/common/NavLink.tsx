interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick ? (e) => onClick(e, href) : undefined}
      className={`hover:text-blue-500 transition-colors ${
        isActive ? 'text-blue-500' : ''
      }`}
    >
      {children}
    </a>
  );
};