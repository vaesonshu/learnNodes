import React from 'react';
import './Header.css'
import ReactTypes from 'prop-types';
/*
1.如何在子组件设置参数默认值?
通过defaultProps
2.如何在子组件中校验参数类型?
通过propTypes
npm install prop-types
* */
function Header(props) {
	console.log(props);
	return (
		<div className={'header'}>我是头部2</div>
	)
}
Header.defaultProps = {
	name: '知播渔',
	age: 666
}
Header.propTypes = {
	name: ReactTypes.string,
	age: ReactTypes.number
}
export default Header;
