const connection = require('./connection');

async function getServicesList() {
    const query = "SELECT * FROM services";
    const [services] = await connection.query(query);
    return services.map(s => s.service);
}

async function addService(service) {
    const query = "INSERT INTO `madrasatic`.`services` (`service`) " +
        "VALUES ('"+service+"');";

    await connection.query(query);
    return "service saved";
}

async function deleteService(service) {
    const deleteQuery = "DELETE FROM `madrasatic`.`services` WHERE (`service` = '"+ service+ "');"

        await connection.query(deleteQuery);
    return "service deleted";
}

module.exports = {getServicesList, addService, deleteService, };


