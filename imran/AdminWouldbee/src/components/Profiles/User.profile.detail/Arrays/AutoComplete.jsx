import React, { useState } from "react";

function AutoComplete(props) {
  const { name, value, arrayData, disabled } = props;
  const [display, setDisplay] = useState(false);
  const [boxValue, setBoxValue] = useState(value);
  const arr = arrayData;

  const [suggestions, setSuggestions] = useState([]);

  const handlehange = (e) => {
    props.onChange(e);
    const val = e.target.value;
    const regex = new RegExp(`^${val}`, "i");
    const suggestion = arr.sort().filter((v) => regex.test(v));
    setSuggestions([...suggestion]);
    setBoxValue(val);
    
    setDisplay(prevValue=> !prevValue);
  };

  const handleClick = (e) => {
    setBoxValue(e.target.innerHTML);
    props.onChange({
      target: {
        name: name,
        value: e.target.innerHTML,
      },
    });
    setDisplay(prevValue=> !prevValue);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0 || boxValue === "") {
      return null;
    }
    return (
      <ul>
        {suggestions.map((v, i) => (
          <li onClick={handleClick} key={i}>
            {v}
          </li>
        ))}
      </ul>
    );
  };

  return (
    
    <div>
      <input
      className="text-capitalize w-100"
        type="text"
        value={value}
        onChange={handlehange}
        disabled={disabled}
        name={name}
        id={name}
        autoComplete="off"
      />
      {
        display ?
        renderSuggestions()
        : null
      }
      
      
      
    </div>
  );
}

export default AutoComplete;
