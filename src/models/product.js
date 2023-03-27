import mongoose from "mongoose";

const { Schema } = mongoose

const Image = new Schema({
    base_url: {
        type: String,
        required: true
    },
    is_gallery: Boolean,
    label: String,
    large_url: {
        type: String,
        required: true
    },
    medium_url: {
        type: String,
        required: true
    },
    position: String,
    small_url: {
        type: String,
        required: true
    },
    thumbnail_url: {
        type: String,
        required: true
    }
})

const Brand = new Schema({
    id: Number,
    name: String,
    slug: String
})


const Specifications = new Schema({
    name: String,
    attributes:
    {
        code: String,
        name: String,
        value: String
    }
})



const Device = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    original_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [Image],
        required: true
    },
    brand: {
        type: [Brand],
        required: true
    },
    specifications: {
        type: [Specifications],
        required: true
    }
})

export default mongoose.model("device", Device)