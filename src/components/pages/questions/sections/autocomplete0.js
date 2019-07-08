import React, { Component } from "react";
import { Input } from "reactstrap";
import $ from "jquery";

export class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  static defaultProperty = {
    suggestions: []
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onChange = e => {


    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // filteredSuggestions.forEach( x =>  {
    //   $(`li:contains(${x})`).hover( () => console.log($(this)))
    // })


    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
this.props.handleChange('lender')
    //this.props.handleChange('lender')
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    $('li').css('backgroundColor', 'transparent')
    $(`li:contains(${filteredSuggestions[activeSuggestion]})`).css('backgroundColor', 'yellow')

    if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        else if (e.keyCode === 38) {
          if (activeSuggestion === -1) {
            return;
          }

          this.setState({  showSuggestions: true,  activeSuggestion: activeSuggestion - 1 , userInput: filteredSuggestions[activeSuggestion]});
        }
        else if (e.keyCode === 40) {
          if ( activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }

          this.setState({ showSuggestions: true, activeSuggestion: (activeSuggestion === -1) ? 0 : activeSuggestion + 1 , userInput: filteredSuggestions[ (activeSuggestion === -1) ? 0 : activeSuggestion]});

        }
        this.props.handleChange('lender')

  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    const { handleChange } = this.props;
    const { values } = this.props;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions" style={{ listStyle: "none" , width: '80%'}}>
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <li key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions!</em>
          </div>
        );
      }
    }
    return (

      <React.Fragment>

        <Input
          type="text"
          placeholder="Select lender"
          autoComplete="off"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={(values.lender === '') ? userInput : values.lender}
          style={{ marginRight: "110px", width: "320px" }}
        />
        {suggestionsListComponent}
      </React.Fragment>
    );
  }
}
export default Autocomplete;
