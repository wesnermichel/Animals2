const DATABASE_URL = `mongodb+srv://${process.env.WesnerSEI}:${process.env.World123}@cluster0.n2bg73v.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 3001;

module.exports = { DATABASE_URL, PORT };
