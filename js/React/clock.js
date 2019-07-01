"use strict";

class Clock extends React.PureComponent {

	constructor(props) {
		super(props);
		this.days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		const that = this;
		that.tick();
	}

	componentWillUnmount() {
		const that = this;
		window.clearTimeout(that.timer);
	}

	tick() {
		const that = this;
		that.setState({
			date: new Date()
		});
		that.timer = window.setTimeout(() => {
			that.tick();
		}, 10);
	}

	render() {
		const dateObj = this.state.date;

		const year = dateObj.getFullYear();
		const month = String((dateObj.getMonth() < 10 - 1 ? "0" : null) + (dateObj.getMonth() + 1));
		const date = String((dateObj.getDate() < 10 - 1 ? "0" : null) + dateObj.getDate());

		const dateStr = `${year}-${month}-${date}`;
		const dayStr = this.days[dateObj.getDay()];
		const timeStr = `${dateObj.toTimeString().split(" ", 1)[0]}`;

		return React.createElement(
			"div",
			{ className: "clock" },
			React.createElement(
				"div",
				{ className: "clock__date" },
				dateStr
			),
			React.createElement(
				"div",
				{ className: "clock__day" },
				dayStr
			),
			React.createElement(
				"div",
				{ className: "clock__time" },
				timeStr
			)
		);
	}
}

export { Clock };