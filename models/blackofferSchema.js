const mongoose = require("mongoose");


const stringDataType={
    type:String,
    default:"", 
}
const numberDataType={
    type:Number,
    default:null, 
}
const DateDataType={
    type:Date,
    default:Date.now(), 
}

const blackofferSchema=new mongoose.Schema({
    end_year:numberDataType,
    intensity:numberDataType,
    sector:stringDataType,
    topic:stringDataType,
    insight:stringDataType,
    url:stringDataType,
    region:stringDataType,
    start_year:numberDataType,
    impact:numberDataType,
    added:stringDataType,
    published:stringDataType,
    country:stringDataType,
    relevance:numberDataType,
    pestle:stringDataType,
    source:stringDataType,
    title:stringDataType,
    likelihood:numberDataType
})



const BlackOfferModal= mongoose.model("sampledata", blackofferSchema);
module.exports =BlackOfferModal;
