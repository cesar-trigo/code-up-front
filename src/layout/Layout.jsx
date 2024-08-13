import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
