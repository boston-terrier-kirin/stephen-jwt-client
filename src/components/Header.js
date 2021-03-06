import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
	const renderLinks = () => {
		if (props.authenticated) {
			return (
				<div>
					<Link to="/signout">Sign Out</Link>
					<Link to="/feature">Feature</Link>
				</div>
			);
		}

		return (
			<div>
				<Link to="/signup">Sign Up</Link>
				<Link to="/signin">Sign In</Link>
			</div>
		);
	};

	return (
		<div className={classes.header}>
			<Link to="/">Redux Auth</Link>
			{renderLinks()}
		</div>
	);
};

const mapStateToProps = (state) => {
	return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(Header);
