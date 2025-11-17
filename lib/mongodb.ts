import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

if (!uri) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

type MongoGlobal = typeof global & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const globalWithMongo = global as MongoGlobal;

if (process.env.NODE_ENV === 'development') {
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getDb(dbName = process.env.MONGODB_DB || 'miyana') {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName);
}

export default clientPromise;
