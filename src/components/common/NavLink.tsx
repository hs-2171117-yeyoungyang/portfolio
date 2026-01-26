interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

export const NavLink = ({ href, children, isActive }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`hover:text-blue-500 transition-colors ${
        isActive ? 'text-blue-500' : ''
      }`}
    >
      {children}
    </a>
  );
};