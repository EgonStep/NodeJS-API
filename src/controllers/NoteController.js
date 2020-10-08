// import services
const NoteService = require('../services/NoteService');

module.exports = {
    health: (req, res) => {
        res.json({ up: true });
    },
    getNotes: async (req, res) => {
        let responseJson = {error: '', result: []};

        let notes = await NoteService.getNotes();

        for (let i in notes) {
            responseJson.result.push({
                id: notes[i].id,
                title: notes[i].title
            });
        }

        res.json(responseJson);
    },
    getSingleNote: async (req, res) => {
        let responseJson = {error: '', result: {}};

        let id = req.params.id;
        let note = await NoteService.findById(id);

        if (note) {
            responseJson.result = note;
        }

        res.json(responseJson);
    },
    createNote: async (req, res) => {
        let responseJson = {error: '', result: {}};

        let title = req.body.title;
        let body = req.body.body;

        if (title && body) {
            let id = await NoteService.createNote(title, body);

            responseJson.result = {
                id,
                title,
                body
            }
            
        } else {
            responseJson.error = 'Empty body';
        }

        res.json(responseJson);
    },
    updateNote: async (req, res) => {
        let responseJson = {error: '', result: {}};

        let note = {
            id: req.params.id,
            title: req.body.title,
            body: req.body.body
        }

        if (note) {
            await NoteService.updateNote(note);

            responseJson.result = {
                id: note.id,
                title: note.title,
                body: note.body
            }
            
        } else {
            responseJson.error = 'Empty body';
        }

        res.json(responseJson);
    },
    deleteNote: async (req, res) => {
        let responseJson = {error: '', result: {}};

        let id = req.params.id;

        if (id) {
            await NoteService.deleteNote(id);

            responseJson.result = {
                id
            }
        } else {
            responseJson.error = 'Empty Id';
        }

        res.json(responseJson);
    }
};