export default function Container({ children, addClassName }) {
  return <div className={"container relative" + addClassName}>{children}</div>;
}
