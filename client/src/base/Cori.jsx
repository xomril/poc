import { Page, Layout, Card, Stack, Button } from "@shopify/polaris";
import Search from "./Search";
import SelectCustomer from "./SelectCustomer";
import SelectStage from "./SelectStage"
import SelectPlayBook from "./SelectPlayBook"
import SelectPriority from "./SelectPriority";
import SelectDueDate from "./SelectDueDate";
import SortBy from "./SortBy";
const Cori = () => {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Layout>
            <Layout.Section oneThird>
              <div className="topCard">
                <div className="title">TO DO</div>
                <div className="cardValue"></div>
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="topCard">
                <div className="title">COMLETED</div>
                <div className="cardValue"></div>
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="topCard rightSide">
                <div className="title">MY RANKING</div>
                <div className="cardValue"></div>
              </div>
            </Layout.Section>
          </Layout>
        </Layout.Section>

        <Layout.Section>
          <Layout>
            <Layout.Section>
              <Layout>
              <Layout.Section>
              <div className="toolbar">
                <Stack wrap={false}>
                  <Search />
                 <div style={{width: '20px'}}>&nbsp;</div>
                  <SelectCustomer />
                  <SelectStage />
                  <SelectPlayBook/>
                  <SelectPriority/>
                  <SelectDueDate/>
                  <div style={{width: '40px'}}>&nbsp;</div>
                  <SortBy/>
                </Stack>
                 
              </div>
                </Layout.Section>
                
              <Layout.Section oneThird>
                <div style={{ textAlign: "right"}}>
                <Button primary style={{ backgroundColor: "#3c42ec", color: "#fff"}}>Add Task +</Button>;
                </div>
                
                </Layout.Section>
              </Layout>
              
            </Layout.Section>
            <Layout.Section>
              <Card title="Online store dashboard" sectioned>
                <p>View a summary of your online store’s performance.</p>
              </Card>
            </Layout.Section>
          </Layout>
        </Layout.Section>
      </Layout>
    </Page>
  );
};
export default Cori;
