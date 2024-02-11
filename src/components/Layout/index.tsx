import Aside from "./Aside";
import Header from "./Header";
import { FlexBox } from "../../styles/globalStyles";

const Layout = () => {
  return (
    <FlexBox>
      <Aside />
      <Header />
    </FlexBox>
  );
};

export default Layout;
