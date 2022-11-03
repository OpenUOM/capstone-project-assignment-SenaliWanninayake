const dbConnection = require("./sqlite");

dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");

const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

const readTeachers = async () => {
    const sql = 'SELECT * FROMteacher'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((teachers) => {
                resolve(teachers);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readTeacherInfo = async (id) => {
    const sql = 'SELECT * FROM teacher WHERE id = ?'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[id])
            .then((teacher) => {
                resolve(teacher);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addTeacher = async (id, name, age) => {
    const sql = "INSERT INTO teacher(id, name, age) VALUES("+'"'+id+'", '+'"'+ name+'",  '+'"'+ age+'")'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[id, name, age])
            .then(() => {
                resolve({status: "Successfully inserted Teacher"});
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateTeacher = async (name, age, id) => {
    const sql = `UPDATE teacher SET name=?, age=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[name,age,id])
            .then(() => {
                resolve({status: "Successfully updated Teacher"});
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const deleteTeacher = async (id) => {
    const sql = 'DELETE FROM teacher WHERE id = ? '
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Successfully deleted Teacher"});
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudents = async () => {
    const sql = SELECT * FROMstudent
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudentInfo = async (id) => {
    const sql = "SELECT * FROM student WHERE id="+id
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addStudent = async (id, name, age, religion) => {
    const sql = "INSERT INTO student(id, name, age, hometown) VALUES("+'"'+id+'", '+'"'+ name+'",  '+'"'+ age+'", '+'"'+religion+'")'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateStudent = async (name, age, religion, id) => {
    const sql = "UPDATE student SET name="+'"'+name+'"'+','+" age="+'"'+age+'", hometown='+'"'+religion+'"'+" WHERE id="+id
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
} 

const deleteStudent = async (id) => {
    const sql = "DELETE FROM student WHERE id="+id
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}


module.exports = {
    readTeachers,
    addTeacher,
    readTeacherInfo,
    updateTeacher
};
