// use memo uses cache to store huge calculation results and display it when needed.

import { useMemo, useState } from 'react';

const users = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: `User ${i}`
}));

function UseMemoExample() {
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    console.log('Filtering...');
    return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Results: {filteredUsers.length}</p>
    </div>
  );
}

export default UseMemoExample;
