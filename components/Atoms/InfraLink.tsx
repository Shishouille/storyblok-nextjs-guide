import NextLink from "next/link";

interface IProps {
  href: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const InfraLink = ({ href, className, children, title, ...props }: IProps) => {
  return (
    <NextLink href={href}>
      <a title={title} {...props} className={className}>
        {children}
      </a>
    </NextLink>
  );
};

export default InfraLink;
