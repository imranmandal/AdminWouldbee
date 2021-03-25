import React, { useEffect, useState } from "react";
import AutoComplete from "./Arrays/AutoComplete";
import { Diets } from "./Arrays/diets";
import { heightValueArray } from "./Arrays/height";
import { religionArray } from "./Arrays/social.categories";

function PartnerPreference(props) {
  const { disabled, data, style } = props;
  const {
    ageRange,
    heightRange,
    weightRange,
    religions,
    castes,
    subCastes,
    leaveSelfGotra,
    leaveMothersGotra,
    diets,
    smoke,
    degrees,
    occupations,
    incomeRange,
  } = data;
  console.log(data);

  const ranges = (rang) => {
    if (rang !== null) {
      const len = rang.length;
      const range = rang.substr(1, len - 2);
      const range_array = range.split(",");
      console.log(range);
      return [range_array[0], range_array[1] - 1];
    } else {
      return [rang, rang];
    }
  };

  const [values, setValues] = useState({
    minAgeRange: ranges(ageRange)[0],
    maxAgeRange: ranges(ageRange)[1],
    minHeightRange: ranges(heightRange)[0],
    maxHeightRange: ranges(heightRange)[1],
    minWeightRange: ranges(weightRange)[0],
    maxWeightRange: ranges(weightRange)[1],
    religions: religions,
    castes: castes,
    subCastes: subCastes,
    leaveSelfGotra: leaveMothersGotra,
    leaveMothersGotra: leaveMothersGotra,
    diets: diets,
    smoke: smoke,
    degrees: degrees,
    occupations: occupations,
    minIncomeRange: ranges(incomeRange)[0],
    maxIncomeRange: ranges(incomeRange)[1],
  });

  console.log(castes);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({ ...prevValue, [name]: value }));
    console.log(name, value);
  };

  return (
    <>
      <div className="p-5 col-12">
        <h3>Partner Prefenrences</h3>
        <div className="d-flex flex-wrap justify-content-evenly">
          <div
            className="col-6 p-0 h- d-flex flex-wrap justify-content-evenly"
            style={{ height: "fit-content" }}
          >
            <h5 className="pt-4 text-secondary w-100">
              Personality preferences
            </h5>
            <div className="input-container mr-3 mt-3 w-50" style={style}>
              <label htmlFor="minAgeRange">Minimum Age</label>

              <input
                className="w-100"
                type="text"
                value={values.minAgeRange}
                id="minAgeRange"
                name="minAgeRange"
                disabled={disabled}
                onChange={handleChange}
                placeholder="-"
              />
            </div>

            <div className="input-container mr-3 mt-3 w-50" style={style}>
              <label htmlFor="maxAgeRange">Maximum Age</label>

              <input
                className="w-100"
                type="text"
                value={values.maxAgeRange}
                id="maxAgeRange"
                name="maxAgeRange"
                disabled={disabled}
                onChange={handleChange}
                placeholder="-"
              />
            </div>

            <div className="input-container mr-3 mt-3 w-50" style={style}>
              <label htmlFor="minHeightRange">Minimum Height</label>
              <AutoComplete
                name="minHeightRange"
                value={values.minHeightRange}
                onChange={handleChange}
                disabled={disabled}
                arrayData={heightValueArray}
              />
            </div>

            <div className="input-container mr-3 mt-3 w-50" style={style}>
              <label htmlFor="maxHeightRange">Maximum Height</label>
              <AutoComplete
                name="maxHeightRange"
                value={values.maxHeightRange}
                onChange={handleChange}
                disabled={disabled}
                arrayData={heightValueArray}
              />
            </div>

            <div className="input-container mr-3 mt-3 w-50" style={style}>
              <label htmlFor="minWeightRange">Minimum Weight</label>
              <input
                className="w-100"
                type="text"
                value={values.minWeightRange}
                id="minWeightRange"
                name="minWeightRange"
                disabled={disabled}
                onChange={handleChange}
                placeholder="-"
              />
            </div>

            <div className="input-container mr-3 mt-3 w-50" style={style}>
              <label htmlFor="maxWeightRange">Maximum Weight</label>
              <input
                className="w-100"
                type="text"
                value={values.maxWeightRange}
                id="maxWeightRange"
                name="maxWeightRange"
                disabled={disabled}
                onChange={handleChange}
                placeholder="-"
              />
            </div>
          </div>

          {/* RELIGIONS */}
          <div className="col-6 pl-5">
            <h5 className="pt-4 text-secondary w-100">Social preferences</h5>
            <div className="input-container mt-3 w-100" style={style}>
              <label htmlFor="religions">Religion</label>

              <AutoComplete
                name="religions"
                value={values.religions}
                onChange={handleChange}
                disabled={disabled}
                arrayData={religionArray}
              />
            </div>

            <div className="input-container mr-3 mt-3 w-100" style={style}>
              <label htmlFor="caste">Caste</label>
              <input
                className="w-100"
                type="text"
                value={values.castes.map((caste, i) => caste.name)}
                id="caste"
                name="caste"
                disabled={disabled}
                onChange={handleChange}
                placeholder="-"
              />
            </div>

            <div className="input-container mt-3 w-100" style={style}>
              <label htmlFor="subCastes">Sub Castes</label>
              <input
                className="w-100"
                type="text"
                value={values.subCastes.name}
                id="subCastes"
                name="subCastes"
                disabled={disabled}
                onChange={handleChange}
                placeholder="-"
              />
            </div>

            <div className="input-container mr-3 mt-3 w-100" style={style}>
              <label htmlFor="leaveSelfGotra">Leave Self Gotra</label>

              <AutoComplete
                name="leaveSelfGotra"
                value={values.leaveSelfGotra}
                onChange={handleChange}
                disabled={disabled}
                arrayData={["True", "False"]}
              />
            </div>

            <div className="input-container mr-3 mt-3 w-100" style={style}>
              <label htmlFor="leaveMothersGotra">Leave Mother Gotra</label>

              <AutoComplete
                name="leaveMothersGotra"
                value={values.leaveMothersGotra}
                onChange={handleChange}
                disabled={disabled}
                arrayData={["True", "False"]}
              />
            </div>
          </div>

          {/* DIETS */}
          <div className="w-100">
            <h5 className="pt-5 text-secondary">Lifestyle preferences</h5>
            <div className="row">
              <div className="profile-radio d-flex flex-row justify-content-evenly mt-3 py-3 col-6">
                <h5>Smoke</h5>
                <div className="form-check w-25">
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="w-100 form-check-input"
                    type="radio"
                    value={values.smoke}
                    id="yes"
                    name="smoke"
                    disabled={disabled}
                    onChange={handleChange}
                    checked={values.smoke}
                  />
                </div>

                <div className="form-check w-25">
                  <label htmlFor="no">No</label>
                  <input
                    className="w-100 form-check-input"
                    type="radio"
                    value={values.smoke}
                    id="no"
                    name="smoke"
                    disabled={disabled}
                    onChange={handleChange}
                    checked={!values.smoke}
                  />
                </div>
              </div>
              <div className="d-flex col-6  pl-5">
                <div
                  id="diets"
                  className="mr-3 w-100 input-container"
                  style={style}
                >
                  <label htmlFor="diets">Diets</label>
                  <AutoComplete
                    name="diets"
                    value={values.diets}
                    onChange={handleChange}
                    disabled={disabled}
                    arrayData={Diets}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* DEGREE */}
          <div className="w-100">
            <h5 className="pt-5 text-secondary">Professional preferences</h5>
            <div className="input-container mr-3 mt-3 w-100" style={style}>
              <label htmlFor="degrees">Degree</label>
              <input
                className="w-100"
                type="text"
                value={values.degrees}
                id="degrees"
                name="degrees"
                disabled={disabled}
                onChange={handleChange}
                placeholder="-"
              />
            </div>
            <div className="input-container mr-3 mt-3 w-100" style={style}>
              <label htmlFor="occupations">Occupation</label>
              <input
                className="w-100"
                type="text"
                value={values.occupations}
                id="occupations"
                name="occupations"
                disabled={disabled}
                onChange={handleChange}
                placeholder="-"
              />
            </div>
          </div>

          <div className="input-container mt-3 w-100" style={style}>
            <label htmlFor="minIncomeRange">Minimum Income</label>
            <input
              className="w-100"
              type="text"
              value={values.minIncomeRange}
              id="minIncomeRange"
              name="minIncomeRange"
              disabled={disabled}
              onChange={handleChange}
              placeholder="-"
            />
          </div>
          <div className="input-container mt-3 w-100" style={style}>
            <label htmlFor="maxIncomeRange">Maximum Income</label>
            <input
              className="w-100"
              type="text"
              value={values.maxIncomeRange}
              id="maxIncomeRange"
              name="maxIncomeRange"
              disabled={disabled}
              onChange={handleChange}
              placeholder="-"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerPreference;
