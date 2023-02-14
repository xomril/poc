import { Stack, Avatar, Icon } from "@shopify/polaris";
import { CustomersMajor } from "@shopify/polaris-icons";
const Header = () => {
  return (
    <div className="header">
      <Stack>
        <Stack.Item fill></Stack.Item>
        <Stack.Item>
        <div className="selected"></div>
          <div className="wrapper">
            <div className="headerSection">Control Room</div>
          </div>
        </Stack.Item>
        <Stack.Item>
        <div className="not_selected"></div>
           
          <div className="wrapper">
             <div className="headerSection">
            <Icon source={CustomersMajor} color="subdued"  />
            Cusomers
            </div>
          </div>
        </Stack.Item>

        <Stack.Item>
        <div className="not_selected"></div>
          <div className="wrapper">
            <div className="headerSection">Insight</div>
          </div>
        </Stack.Item>
        <Stack.Item>
        <div className="not_selected"></div>
          <div className="wrapper">
            <div className="headerSection">
              <Avatar customer name="Farrah" />
            </div>
          </div>
        </Stack.Item>
        
      </Stack>
    </div>
  );
};
export default Header;
