const { ObjectID } = require('mongodb');
const getDb = require('../utils/database').getDb;

module.exports = class Book {

    constructor(_id, title, src, content, price, colors = [], count) {
        this._id = _id;
        this.title = title;
        this.src = src;
        this.content = content;
        this.price = price;
        this.colors = colors;
        this.count = count;
    }

     save(id) {
        //  let result = getDb.collection('farmersCollection').farmers.filter((item)=>{
        //      return id===item.id
        //  })
        //  return result.products.push(this)
        return getDb().collection('farmersCollection').insertOne(this);
    }

    update() {
        return getDb().collection('farmersCollection').updateOne({ _id: new ObjectID(this._id) }, { $set: { title: this.title, src: this.src, content: this.content, price: this.price, colors: this.colors, count: this.count } });
    }

    static fetchAll() {
        return getDb().collection('farmersCollection').find();
    }

    static findById(bookId) {
        return getDb().collection('farmersCollection').findOne({ _id: new ObjectID(bookId) });
    }

    static deleteById(bookId) {
        return getDb().collection('farmersCollection').deleteOne({ _id: new ObjectID(bookId) });
    }

}