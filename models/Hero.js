const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    superHero: {
        type: String,
        require:[true, 'Please name the hero'],
        unique: true,
        trim: true,
    },
    realName :{
        type:String,
        require:true,
        maxLength:[200,'please enter a real name short']
    }

})
module.exports = mongoose.models.Hero||mongoose.model('Hero',HeroSchema)