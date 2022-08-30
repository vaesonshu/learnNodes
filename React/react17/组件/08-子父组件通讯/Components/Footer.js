import React from 'react';
import './Footer.css'

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>我是底部2</p>
				<button onClick={() => { this.btnClick() }}>子组件按钮</button>
			</div>
		)
	}
	btnClick() {
		// console.log(this.props);
		this.props.fatherFn('lnj', 18);
	}
}
export default Footer;
