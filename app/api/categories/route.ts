import { pool } from '@/lib/bd';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await pool.query(
      'SELECT c.id AS category_id, c.name AS category_name, s.id AS service_id, s.name AS service_name FROM categories c LEFT JOIN services s ON s.category_id = c.id ORDER BY c.id, s.id'
    );
    const categoriesMap: Record<
      string,
      { id: number; name: string; services: { id: number; name: string }[] }
    > = {};
    data.rows.forEach((row) => {
      const catId = row.category_id;
      if (!categoriesMap[catId]) {
        categoriesMap[catId] = {
          id: catId,
          name: row.category_name,
          services: [],
        };
      }

      if (row.service_id) {
        categoriesMap[catId].services.push({
          id: row.service_id,
          name: row.service_name,
        });
      }
    });

    const categories = Object.values(categoriesMap);

    return NextResponse.json(categories);
  } catch (err) {
    console.error('[API CATEGORIES ERROR]', err); // добавлено
    return new NextResponse('Ошибка сервера', { status: 500 });
  }
}
