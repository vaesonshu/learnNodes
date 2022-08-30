import React from 'react';
import './Main.css'
import ReactTypes from "prop-types";
class Main extends React.Component {
	constructor(props) {
		super();
		this.props = props;
	}
	render() {
		console.log(this.props);
		return (
			<div className={'main'}>我是中间2</div>
		)
	}
	static defaultProps = {
		name: '知播渔',
		age: 666
	}
	static propTypes = {
		name: ReactTypes.string,
		age: ReactTypes.number
	}
}
export default Main;
