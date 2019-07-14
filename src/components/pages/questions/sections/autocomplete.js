
import React, { Component } from "react";
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const suggestions = [
  { label: 'Accord Mortgages' },
  { label: 'Airdrie Savings Bank' },
  { label: 'Aldermore Bank' },
  { label: 'Bank of China (UK)' },
  { label: 'Bank of Ireland (UK)' },
  { label: 'Barclays' },
  { label: 'Bath Building Solciety' },
  { label: 'Beverley Building Solciety' },
  { label: 'Bluestone' },
  { label: 'BM Solutions' },
  { label: 'Buckinghamshire Building Solciety' },
  { label: 'Build Loan' },
  { label: 'Cambridge Building Solciety' },
  { label: 'Chelsea Building Society' },
  { label: 'Chorley Building Solciety' },
  { label: 'Clydesdale Bank' },
  { label: 'CoventryBuilding Solciety (Godiva)' },
  { label: 'Darlington Building Solciety' },
  { label: 'Dudley Building Society' },
  { label: 'Ecology Building Solciety' },
  { label: 'First Direct' },
  { label: 'Fleet Mortgages' },
  { label: 'Foundation Home Loans' },
  { label: 'Furness Building Solciety' },
  { label: 'Halifax' },
  { label: 'Hanley Economic Building Solciety' },
  { label: 'Hinkley & Rugby Build Solciety' },
  { label: 'Holmsdale Building Solciety' },
  { label: 'HSBC' },
  { label: 'Ipswich Building Society' },
  { label: 'Kensington Mortgage Company Limited' },
  { label: 'Kent Reliance' },
  { label: 'Land Bay' },
  { label: 'Leeds Building Society' },
  { label: 'Leek United Building Society' },
  { label: 'Lloyds Bank' },
  { label: 'Loughborough Building Society' },
  { label: 'Magellan Homeloans' },
  { label: 'Mansfield Building Society' },
  { label: 'Market Harborough Building Society' },
  { label: 'Marsden Building Society' },
  { label: 'Masthaven Bank' },
  { label: 'Melton Mowbray Building Society' },
  { label: 'Metro Bank' },
  { label: 'Monmouthshire Building Society' },
  { label: 'Mortgage trust' },
  { label: 'Nationwide Building Society' },
  { label: 'NatWest intermediary solutions' },
  { label: 'New Street' },
  { label: 'Newbury Building Society' },
  { label: 'Newcastle Building Society' },
  { label: 'Norwich & Peterborough Building Society' },
  { label: 'Nottingham Building Society' },
  { label: 'Paragon mortgages' },
  { label: 'Pepper homeloans' },
  { label: 'Platform' },
  { label: 'Post Office' },
  { label: 'Precise mortgages' },
  { label: 'Principality Building Society' },
  { label: 'Progressive Building Society' },
  { label: 'RBS' },
  { label: 'Saffron Building Society' },
  { label: 'Santander' },
  { label: 'Scottish Widows bank' },
  { label: 'Secure Trust' },
  { label: 'Shawbrook Bank Ltd' },
  { label: 'Skipton Building Society' },
  { label: 'Stafford Railway Building Society' },
  { label: 'Swansea Building Society' },
  { label: 'Teacher Building Society' },
  { label: 'Tesco Bank' },
  { label: 'TFC Homeloans' },
  { label: 'The Co-op' },
  { label: 'The Family Building Society' },
  { label: 'The Mortgage Lender' },
  { label: 'The Mortgage Works (TMW)' },
  { label: 'Tipton Building Society' },
  { label: 'Together' },
  { label: 'TSB Bank' },
  { label: 'Ulster Bank' },
  { label: 'United Trust Bank' },
  { label: 'Vernon' },
  { label: 'Vida Homeloans' },
  { label: 'Virgin Money' },
  { label: 'West Bromwich Building Society' },
  { label: 'Yorkshire Bank' },
  { label: 'Yorkshire Building Society' }
  ];
function renderInput(inputProps, value) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(value, { showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

class Autocomplete extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value
  }

  componentDidMount(props) {
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    let input = document.getElementById('downshift-simple-input')


    input.style.padding =  '6px 12px'
    input.style['font-size'] = '16px'
    input.style.border = ' 1px solid #ccc'
    input.style['border-radius'] = '4px';
    input.style.width = '250px'

    nativeInputValueSetter.call(input, this.props.values.lender);

    var ev2 = new Event('input', { bubbles: true});
    input.dispatchEvent(ev2);

    setTimeout(function() {
      let elem = document.querySelector('#downshift-simple-item-0')
      if (elem) elem.click()
    }, 100)
  }

  useStyles() {
    return makeStyles(theme => ({
      root: {
        flexGrow: 1,
        height: 250,
      },
      container: {
        flexGrow: 1,
        position: 'relative',
      },
      paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
      },
      chip: {
        margin: theme.spacing(0.5, 0.25),
      },
      divider: {
        height: theme.spacing(2),
      },
    }));
  }

 // onClick = (e) =>  {
 //    console.log('here');
 //    console.log(e.target);
 //    //return (e) => this.props.handleChange('lender',e)
 // }

  render(){
    const classes = this.useStyles();

    return (

      <div className={classes.root}>
        <Downshift id="downshift-simple">
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            highlightedIndex,
            inputValue,
            isOpen,
            selectedItem,
          }) => {
            const { onBlur, onFocus, ...inputProps } = getInputProps({
              placeholder: `If so, please select the lender here`,
              onChange: this.props.handleChange('lender')

            });

            return (
              <div className={classes.container}>
                {renderInput({
                  fullWidth: true,
                  classes,

                  InputLabelProps: getLabelProps({ shrink: true }),
                  InputProps: { onBlur, onFocus },
                  inputProps,
                })}

                <div {...getMenuProps()}>
                  {isOpen ? (
                    <Paper className={classes.paper} square>
                      {getSuggestions(inputValue).map((suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({ item: suggestion.label }),
                          highlightedIndex,
                          selectedItem,
                        }),
                      )}
                    </Paper>
                  ) : null}
                </div>
              </div>
            );
          }}
        </Downshift>
      </div>
    );
  }
}
export default Autocomplete;
