
import { products } from "./constants/data.js"
import Product from "./model/product-schema.js"

const DefaultData = async() => {
    try {    // Here we are trying to insert data in our database, Since database is an external entity so it can return an error...
        await Product.insertMany(products);     // there are three function available for mongoose.model() object there are inserOne, insertMany, save

        console.log('Data imported Successfully');
    } catch (error) {
        console.log('Error while inserting dafault data ', error.message);
    }
}

export default DefaultData;