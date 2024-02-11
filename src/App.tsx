import Layout from "./components";
import Aside from "./layouts/Aside";
import { FlexBox } from "./styles/globalStyles";

const app = () => {
  return (
    <FlexBox>
      <Aside />
      <Layout />
    </FlexBox>
  );
};

export default app;
