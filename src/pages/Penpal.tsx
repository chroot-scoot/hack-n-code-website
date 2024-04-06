import { useState, useEffect } from 'react';
import { Letter, columns } from '@/components/columns';
import { DataTable } from '@/components/data-table';
import { FriendsCar } from '@/components/FriendsCar';

async function getData(): Promise<Letter[]> {
  // Fetch data from your API here.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      date: '2021-01-01',
      name: 'dvd',
      status: 'read',
      email: 'm@example.com',
    },
    // ...
  ];
}

export function Penpal() {
  const [data, setData] = useState<Letter[]>([]);

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex">
      <div className="container mx-auto w-1/2 py-10 text-left">
        <DataTable columns={columns} data={data} />
      </div>

      <div className="container mx-auto w-1/2 py-10 text-center">
        <FriendsCar />
      </div>
    </div>
  );
}
