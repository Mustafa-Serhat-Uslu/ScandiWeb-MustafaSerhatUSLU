import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  DownArrowContainer,
  SwitcherIconContainer,
} from "./switcher-icon.styles";

import { ReactComponent as DownArrowSvg } from "../../../assets/CurrencySwitcherArrow.svg";

import { toggleSwitcherHidden } from "../../../redux/switcher/switcher.actions";
import { selectCurrency } from "../../../redux/switcher/switcher.selectors";

class SwitcherIcon extends React.Component {
  render() {
    return (
      <SwitcherIconContainer onClick={this.props.toggleSwitcherHidden}>
        <span>{this.props.siteCurrency.symbol}</span>
        <DownArrowContainer>
          <DownArrowSvg />
        </DownArrowContainer>
      </SwitcherIconContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleSwitcherHidden: () => dispatch(toggleSwitcherHidden()),
});

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency,
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitcherIcon);
