/* eslint-disable jsx-a11y/anchor-is-valid */
import { Stack, Avatar, Icon } from "@shopify/polaris";
import { CustomersMajor } from "@shopify/polaris-icons";
import ClosePanel from "../logos/ClosePanel";

import {
  ExternalMinor
} from '@shopify/polaris-icons';

const Header = () => {
  return (
    <div className="header">
      <a href={"/"} target={"_blank"} rel="noreferrer" >
        <Icon className="headerIcon"
          source={ExternalMinor}
        />
      </a>
      <ClosePanel />
    </div>
  );
};
export default Header;
