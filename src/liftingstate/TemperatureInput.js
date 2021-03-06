import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temprature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temprature in {scaleNames[scale]}:</legend>
                <input value={temprature}
                        onChange={this.handleChange} ></input>
            </fieldset>
        );
    }
}

export default TemperatureInput;