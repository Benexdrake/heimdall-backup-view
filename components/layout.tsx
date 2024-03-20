import Navbar from "./navbar";

export default function Layout(props: any) {

  const children = props.children;

  return (
    <div>
      <div className="main">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}