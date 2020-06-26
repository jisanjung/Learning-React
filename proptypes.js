// proptypes are a good practice to make sure that your props are using the same data type as you declared
// you want to do this in the component that uses the passed prop

// first, import Proptypes
import PropTypes from "prop-types";

// second, on the bottom of the page, define your prop datatypes
Item.propTypes = {
    val: PropTypes.string.isRequired // can be object, array, number, etc
};