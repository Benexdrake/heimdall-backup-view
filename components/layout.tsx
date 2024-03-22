import Navbar from "./navbar/navbar";

export default function Layout(props: any) {

  const children = props.children;

  return (
    <div>
        <Navbar />
      <div className="main">
        <main>{children}</main>
      </div>
    </div>
  );
}