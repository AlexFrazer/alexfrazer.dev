export default function Link({ children, href }) {
  return <children.type {...children.props} href={href} />;
}
