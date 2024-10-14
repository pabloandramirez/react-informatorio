import { ComponentProps, ReactNode } from "react";

type HeadingProps = ComponentProps<'header'> & {
    children: ReactNode;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };
  const HEADING_TAGS = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

export default function Heading({ children, as, ...delegated }: HeadingProps) {
    const Tag = HEADING_TAGS[as] ?? 'h1';

    return <Tag {...delegated}>{children}</Tag>;
}