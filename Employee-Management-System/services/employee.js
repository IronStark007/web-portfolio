const client = require('../db')

const selectAllQuery = (callback) => {
    client.query('select * from employee;', (err, res) => {
        if (err) {
            console.error('error in select all query ' + err.stack)
            callback(err);
        } else {
            console.log('fetching the rows')
            callback(res.rows);
        }
    })
}

const selectOneQuery = (id, callback) => {
    client.query(`select * from employee where id='${id}';`, (err, res) => {
        if (err) {
            console.error('error in select one query ' + err.stack);
            callback(err);
        } else {
            console.log('fetching the row')
            callback(res.rows);
        }
    })
}

const insertValueQuery = (data, callback) => {
    client.query(`insert into employee values ('${data.id}','${data.fName}','${data.lName}',${data.salary},'${data.department}','${data.joiningDate}');`, (err, res) => {
        if (err) {
            console.error('error in insert values query ' + err.stack);
            callback(err);
        } else {
            console.log('inserting values')
            callback(res.rows);
        }
    });
}

const updateValueQuery = (data, callback) => {
    client.query(`update employee set lName='${data.lName}', salary=${data.salary}, department='${data.department}', joiningDate='${data.joiningDate}' where id='${data.id}';`, (err, res) => {
        if (err) {
            console.error('error in update values query ' + err.stack);
            callback(err);
        } else {
            console.log('updating the values')
            callback(res);
        }

    })
}

const deleteValueQuery = (id, callback) => {
    client.query(`delete from employee where id='${id}';`, (err, res) => {
        if (err) {
            console.error('error in delete query ' + err.stack);
            callback(err);
        } else {
            console.log('deleting values')
            callback(res);
        }

    })
}

module.exports = {
    selectAllQuery: selectAllQuery,
    selectOneQuery: selectOneQuery,
    insertValueQuery: insertValueQuery,
    updateValueQuery: updateValueQuery,
    deleteValueQuery: deleteValueQuery
}