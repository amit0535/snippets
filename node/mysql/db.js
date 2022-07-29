import pool from "./pool.js";
export async function findOne(q, params = []) {
    return new Promise(function (resolve, reject) {
        pool.query(q, params, function (error, results, _) {
            if (error) {
                console.log(error);
                reject();
            } else {
                let r = results.length ? results[0] : null;
                resolve(r);
            }
        });
    });
}
export async function findAll(q, params = []) {
    return new Promise(function (resolve, reject) {
        pool.query(q, params, function (error, results, _) {
            if (error) {
                console.log(error);
                reject();
            } else {
                let r = results.length ? results : [];
                resolve(r);
            }
        });
    });
}
export async function updateAll(q, params = []) {
    return new Promise(function (resolve, reject) {
        pool.query(q, params, function (error, results, _) {
            if (error) {
                console.log(error);
                reject();
            } else {
                resolve(results.changedRows);
            }
        });
    });
}
export async function insertOne(q, params = []) {
    return new Promise(function (resolve, reject) {
        pool.query(q, params, function (error, results, _) {
            if (error) {
                console.log(error);
                reject();
            } else {
                let r = results.insertId;
                resolve(r);
            }
        });
    });
}
export async function query(q, params = []) {
    return new Promise(function (resolve, reject) {
        pool.query(q, params, function (error, results, _) {
            if (error) {
                console.log(error);
                reject();
            } else {
                resolve(r);
            }
        });
    });
}
