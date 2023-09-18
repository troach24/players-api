import { MongoClient } from 'mongodb';

const {
  MONGO_URI = 'localhost/player-api',
} = process.env;

const client = new MongoClient(MONGO_URI);
