const dbHandler = require('../services/employee')


const getAllEmployees = (req, res) => {
    console.log("getting all employee");
    dbHandler.selectAllQuery((result) => {
        if (result instanceof Error) {
            console.error(result)
            res.status(500).send({ "error": result.detail })
        } else {
            console.log('showing results')
            res.send(result);
        }
    })
}

const getOneEmployee = (req, res) => {
    console.log("getting one employee");
    dbHandler.selectOneQuery((req.params.id), (result) => {
        if (result instanceof Error) {
            console.error(result)
            res.status(500).send({ "error": result.detail })
        } else if (result.length === 0) {
            console.error(`Employee with the id '${req.params.id}' does not exist`)
            res.status(500).send({ "error": `Employee with the id '${req.params.id}' does not exist` })
        } else {
            console.log('showing result')
            res.send(result);
        }
    })
}

const createEmployee = (req, res) => {
    console.log("create employee");
    dbHandler.insertValueQuery((req.body), (result) => {
        if (result instanceof Error) {
            if (result.code === '23505'){
                console.error(`Employee with the id '${req.body.id}' already exists`)
                res.status(500).send({ "error": `Employee with the id '${req.body.id}' already exists` })
            }else{
                console.error(result)
            res.status(500).send({ "error": result.detail })
        }    
        } else {
            console.log('inserting employee')
            res.status(201).send({ "message": `Employee with the id '${req.body.id}' created` })
        }
    })
}

const updateEmployee = (req, res) => {
    console.log('update employee')
    dbHandler.updateValueQuery((req.body), (result) => {
        if (result instanceof Error) {
            console.error(result);
            res.status(500).send({ "error": result.detail })
        }else if (result.rowCount === 0) {
            console.error(`Employee with the id '${req.body.id}' does not exist`);
            res.status(500).send({ "error": `Employee with the id '${req.body.id}' does not exist` })
        } 
        else {
            console.log('updating employee')
            res.send({ "message": `Employee with the id '${req.body.id}' updated` })
        }
    })
}

const deleteEmployee = (req, res) => {
    console.log('delete employee')
    dbHandler.deleteValueQuery((req.params.id), (result) => {
        if (result instanceof Error) {
            console.error(result);
            res.status(500).send({ "error": result.detail })
        }
        else if (result.rowCount === 0) {
            console.log(`Employee with the id '${req.params.id}' does not exist`)
            res.status(500).send({ "error": `Employee with the id '${req.params.id}' does not exist` })
        } else {
            console.log('deleting employee')
            res.send({ "message": `Employee with the id '${req.params.id}' deleted` })
        }
    })
}

module.exports = {
    getAllEmployees: getAllEmployees,
    getOneEmployee: getOneEmployee,
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
}