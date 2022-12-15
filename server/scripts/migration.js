const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../.env')
})

require('../models/db');
const Team = require('../models/Teams')
const Articles = require('../models/Articles')
const Categories = require('../models/Categories')

const start = async () => {
    const teams = await Team.find();
    const categories = await Categories.find();

    for(let team of teams) {
        const articles = await Articles.find({
            memberId: `${team.id}`
        })

        for(let article of articles) {
            article.memberId = team._id
            await article.save();
        }
    }

    for( let category of categories) {
        const articles = await Articles.find({
            categoryId: `${category.id}`
        })

        for(let article of articles ) {
            article.categoryId = category._id
            await article.save()
        }
    }
    process.exit();
}

start()
