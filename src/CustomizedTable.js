import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import faker from 'faker/locale/id_ID';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    }
});

function createFakeData(count = 1) {
    if(count <= 0) count = 1;

    var data = [];
    for(var x = 0; x < count; x++) {
        var id = faker.random.uuid();
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var name = firstName + ' ' + lastName;
        var age = faker.random.number({
            min: 20,
            max: 80
        });
        var job = faker.name.jobType();
        var email = faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase());
        var company = faker.company.companyName();

        data.push({id, name, age, job, email, company});
    }

    return data;
}

const rows = createFakeData(10);

function CustomizedTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Full Name</CustomTableCell>
                        <CustomTableCell align="center">Age</CustomTableCell>
                        <CustomTableCell>Email</CustomTableCell>
                        <CustomTableCell>Job</CustomTableCell>
                        <CustomTableCell>Company</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <CustomTableCell component="th" scope="row">{row.name}</CustomTableCell>
                            <CustomTableCell>{row.age}</CustomTableCell>
                            <CustomTableCell>{row.email}</CustomTableCell>
                            <CustomTableCell>{row.job}</CustomTableCell>
                            <CustomTableCell>{row.company}</CustomTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);