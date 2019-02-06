import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

class ListItemLinkNoIcon extends React.Component {
    renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

    render() {
        const { primary } = this.props;
        return (
            <li>
                <ListItem button component={this.renderLink}>
                    <ListItemText primary={primary} />
                </ListItem>
            </li>
        );
    };
}

ListItemLinkNoIcon.propTypes = {
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

export default ListItemLinkNoIcon;