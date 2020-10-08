// service to call DB

// imports
const db = require('../db');

module.exports = {
    getNotes: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM notes', (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(results);
            });
        });
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM notes WHERE id = ?', [id], (error, results) => {
                if (error) { 
                    reject(error);
                    return; 
                }

                if (results.length !== 1) {
                    resolve(false);
                } else {
                    resolve(results[0]);
                }
            });
        });
    },
    createNote: (title, body) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO notes (title, body) VALUES (?, ?)', 
            [title, body], 
            (error, results) => {
                if (error) { 
                    reject(error);
                    return; 
                }

                resolve(results.insertId);
            });
        });
    },
    updateNote: (note) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE notes SET title = ?, body = ? WHERE id = ?', 
            [note.title, note.body, note.id], 
            (error, result) => {
                if (error) { 
                    reject(error);
                    return; 
                }

                resolve(result);
            });
        })
    },
    deleteNote: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM notes WHERE id = ?', [id], 
            (error, result) => {
                if (error) { 
                    reject(error);
                    return; 
                }

                resolve(result);
            })
        })
    }
};