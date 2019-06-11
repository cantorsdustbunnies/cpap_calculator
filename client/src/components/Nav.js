import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = ({ name, links }) => {
	return (
		<StyledNav>
			<NameWrapper>{name}</NameWrapper>
			<LinkWrapper>
				{links.map(link => {
					return (
						<LinkItem key={link.path}>
							<Link to={link.path}>{link.name}</Link>
						</LinkItem>
					);
				})}
			</LinkWrapper>
		</StyledNav>
	);
};

const StyledNav = styled.nav``;
const LinkWrapper = styled.ul``;
const LinkItem = styled.li``;

const NameWrapper = styled.div``;

export default Nav;
