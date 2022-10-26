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
    const sql = SELECT * FROMTeacher
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

const readTeacherInfo = async (id) => {
    const sql = "SELECT * FROM Teacher WHERE id="+id
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

const addTeacher = async (id, name, age) => {
    const sql = "INSERT INTO Teacher(id, name, age) VALUES("+'"'+id+'", '+'"'+ name+'",  '+'"'+ age+'")'
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

const updateTeacher = async (name, age, id) => {
    const sql = "UPDATE Teacher SET name="+'"'+name+'"'+','+" age="+'"'+age+'"'+" WHERE id="+id
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

const deleteTeacher = async (id) => {
    const sql = "DELETE FROM Teacher WHERE id="+id
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

const readStudents = async () => {
    const sql = SELECT * FROMStudent
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
    const sql = "SELECT * FROM Student WHERE id="+id
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
    const sql = "INSERT INTO Student(id, name, age, hometown) VALUES("+'"'+id+'", '+'"'+ name+'",  '+'"'+ age+'", '+'"'+religion+'")'
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
    const sql = "DELETE FROM Student WHERE id="+id
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
  readStudents,
  addStudent,
  addTeacher,
  deleteTeacher,
  deleteStudent,
  readStudentInfo,
  readTeacherInfo,
  updateStudent,
  updateTeacher
};
