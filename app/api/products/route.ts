import { NextResponse } from 'next/server';
import { products as seedProducts } from '../../../data/products';
import { Product } from '../../../types/catalog';
import { getDb } from '../../../lib/mongodb';

export async function GET() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return NextResponse.json({
      source: 'seed',
      products: seedProducts,
      note: 'MONGODB_URI not set; serving in-memory seed data.',
    });
  }

  try {
    const db = await getDb();
    const collection = db.collection<Product>('products');
    const docs = await collection
      .find({}, { projection: { _id: 0 } })
      .limit(100)
      .toArray();

    if (!docs.length) {
      await collection.insertMany(seedProducts);
      return NextResponse.json({ source: 'seeded-mongo', products: seedProducts });
    }

    return NextResponse.json({ source: 'mongo', products: docs });
  } catch (error) {
    console.error('Mongo fetch failed', error);
    return NextResponse.json(
      { source: 'seed', products: seedProducts, error: 'Falling back to seed data' },
      { status: 200 }
    );
  }
}
