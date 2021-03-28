import * as HIIcon from "heroicons-react";

interface IProps {
  glyph: string;
  className?: string;
  size?: number;
}

const Icon = ({ glyph, className, size, ...props }: IProps) => {
  const I = HIIcon[glyph];
  if (!I) {
    return null;
  }
  return <I className={className} size={size} {...props} />;
};

export default Icon;
