import React, { useEffect, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

function AddressDetails(props) {
  // AIzaSyCAuuRbEknVi_INA41zeGvhpJ5eNbv9J6g
  const { style, disabled, city } = props;
  const [address, setAddress] = useState(
    city.name + ", " + city.state.name + ", " + city.state.country.name
  );
  const handleSelect = async (value) => {};
  return (
    <>
      <div className="p-5 col-6">
        <h3>Address</h3>

        <div className="input-container mr-3 mt-3 w-75" style={style}>
          <label htmlFor="city">City, State, Country</label>

          <PlacesAutocomplete
            value={address}
            id="city"
            disabled={disabled}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input w-100",
                    
                  })}
                  disabled={disabled}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </div>
    </>
  );
}

export default AddressDetails;
