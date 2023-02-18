import { Page, Layout, Card, Stack, Button } from "@shopify/polaris";
import Search from "./Search";
import ControlRoom from "./ControlRoom";
const Cori = () => {
  return (
    <Page fullWidth>
      <div className="topBar">
        <div className="leftSide">
          <Search className="searchField" />
        </div>

        <div className="rightSide">
          <Button primary>Add Action +</Button>
        </div>
      </div>

      <div className="mainConetnt">
        <ControlRoom />
      </div>


    </Page >
  );
};
export default Cori;
