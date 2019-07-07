"use strict";

import { TypeChecker } from "../type-checker.js";

import { ServiceType, SERVICE_TYPES, Station, DESTINATIONS, LINES_INFO } from "../data/PROCESSED-LINES-DATA.js";
import { Filter } from "../data/filter-classes.js";

import { RadioGroup, RadioItem } from "./radio-group.js";
import { LineSelector } from "./dialog-selector-line.js";
import { FilterSelector } from "./dialog-selector-filter.js";

class SetDestinationGrid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			line: String(props.line || ""),
			filterName: ""
		};

		TypeChecker.checkOptionalInstanceOf(props.destination, Station);
		TypeChecker.checkOptionalInstanceOf(props.serviceType, ServiceType);

		this.savedDestination = props.destination || DESTINATIONS["不载客"];
		this.savedServiceType = props.serviceType || SERVICE_TYPES["不载客"], this.lineSelectorRef = React.createRef();
		this.filterSelectorRef = React.createRef();
		this.destSelectorRef = React.createRef();
	}

	updateLine(line) {
		this.setState({
			line: String(line || "")
		});
	}

	updateFilterName(filterName) {
		this.setState({
			filterName: String(filterName || "")
		});

		const line = this.state.line;
		const filter = LINES_INFO.get(line).filters.get(filterName);

		if (filter) {
			this.savedServiceType = filter.serviceType;
		}
	}

	componentDidUpdate() {
		console.log(this.state.line, this.savedServiceType);
	}

	render() {

		const extraLineHeight = true;

		return React.createElement(
			"div",
			{ className: "set-destination-grid__container" },
			React.createElement(
				"div",
				{ className: "set-destination-grid__item set-destination-grid__item--header" },
				"\u7EBF\u8DEF"
			),
			React.createElement(
				"div",
				{ className: "set-destination-grid__item set-destination-grid__item--options-container",
					ref: this.lineSelectorRef
				},
				React.createElement(LineSelector, {
					line: this.state.line,
					updateLine: this.updateLine.bind(this)
				})
			),
			React.createElement(
				"div",
				{ className: "set-destination-grid__item set-destination-grid__item--header" },
				"\u7B5B\u9009\u5217\u8868"
			),
			React.createElement(
				"div",
				{ className: "set-destination-grid__item set-destination-grid__item--options-container",
					ref: this.filterSelectorRef
				},
				React.createElement(FilterSelector, {
					line: this.state.line,
					updateFilterName: this.updateFilterName.bind(this)
				})
			),
			React.createElement(
				"div",
				{ className: "set-destination-grid__item set-destination-grid__item--header" },
				"\u76EE\u7684\u5730"
			),
			React.createElement(
				"div",
				{ className: "set-destination-grid__item set-destination-grid__item--options-container set-destination-grid__item--destinations",
					ref: this.destSelectorRef
				},
				React.createElement(RadioItem, {
					name: "destination",
					value: "\u4EAC\u6EAA\u5357\u65B9\u533B\u9662",
					defaultChecked: true,
					extraLineHeight: extraLineHeight,
					text: "\u4EAC\u6EAA\u5357\u65B9\u533B\u9662",
					key: "\u4EAC\u6EAA\u5357\u65B9\u533B\u96621"
				}),
				React.createElement(RadioItem, {
					name: "destination",
					value: "\u4EAC\u6EAA\u5357\u65B9\u533B\u9662",
					extraLineHeight: extraLineHeight,
					text: "\u4EAC\u6EAA\u5357\u65B9\u533B\u9662",
					key: "\u4EAC\u6EAA\u5357\u65B9\u533B\u96622"
				}),
				React.createElement(RadioItem, {
					name: "destination",
					value: "\u4EAC\u6EAA\u5357\u65B9\u533B\u9662",
					extraLineHeight: extraLineHeight,
					text: "\u4EAC\u6EAA\u5357\u65B9\u533B\u9662",
					key: "\u4EAC\u6EAA\u5357\u65B9\u533B\u96623"
				}),
				React.createElement(RadioItem, {
					name: "destination",
					value: "\u4EAC\u6EAA\u5357\u65B9\u533B\u9662",
					extraLineHeight: extraLineHeight,
					text: "\u4EAC\u6EAA\u5357\u65B9\u533B\u9662",
					key: "\u4EAC\u6EAA\u5357\u65B9\u533B\u96624"
				})
			)
		);
	}
}

export { SetDestinationGrid };