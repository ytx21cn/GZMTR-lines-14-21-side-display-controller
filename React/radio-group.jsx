"use strict";

import { TypeChecker } from "../type-checker.js";

class RadioGroup extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<div className="radio-button-group__header">
					{this.props.header}
				</div>
				<div className="radio-button-group__container">
					{this.props.children}
				</div>
			</React.Fragment>
		);
	}
}

class RadioItem extends React.PureComponent {
	constructor(props) {
		super(props);
		this.radioRef = React.createRef();
	}

	render() {
		const onClickButton = () => {
			const radio = this.radioRef.current;
			radio.click();
		};

		return (
			<label className="radio-button-group__item">
				<input ref={this.radioRef} type="radio"
					name={this.props.name}
					value={String(this.props.value)}
					className="radio-button-group__radio"

					disabled={this.props.disabled}

					defaultChecked={this.props.defaultChecked}
					checked={this.props.checked}
					onChange={this.props.onChange}

					tabIndex="-1"
				/>
				<button className="radio-button-group__text-button"
					disabled={this.props.disabled}
					onClick={onClickButton}
					data-js-has-border={!!this.props.hasBorder ? true : null}
					data-js-extra-line-height={!!this.props.extraLineHeight ? true : null}
				>
					{this.props.text}
				</button>
			</label>
		);
	}
}

export { RadioGroup, RadioItem };
