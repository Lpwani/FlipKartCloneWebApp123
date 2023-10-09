import mongoose from 'mongoose';


const productschema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quatity: Number,
    description: String,
    discount: String,
    tagline: String
});


const Product = mongoose.model('product', productschema);

export default Product;
