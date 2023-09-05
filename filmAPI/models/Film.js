const db = require('../database/connect')

class Film {

    constructor ({film_id, film_name, film_genre}){
        this.id = film_id
        this.name = film_name
        this.genre = film_genre
    }

    static async getAll(){
        const response = await db.query("SELECT * FROM films ORDER BY film_id;")
        if (response.rows.length === 0){
            throw new Error("No films available.")
        }
        return response.rows.map(g => new Film(g))
    }
}

module.exports = Film