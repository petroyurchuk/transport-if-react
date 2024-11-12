type TitleProps = {
  tag: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  styles: string;
};

const Title: React.FC<TitleProps> = ({ tag, children, styles }) => {
  const Tag = tag;
  return <Tag className={styles}>{children}</Tag>;
};
export default Title;
