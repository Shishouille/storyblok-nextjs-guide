import DynamicComponent from "../DynamicComponent";

const Layout = ({ layout, children }) => {
  const header = layout.header.length && layout.header[0];
  const footer = layout.footer.length && layout.footer[0];
  return (
    <div className="h-screen flex flex-col">
      <DynamicComponent blok={header} />
      <main className="flex-1">{children}</main>
      <DynamicComponent blok={footer} />
    </div>
  );
};

export default Layout;
