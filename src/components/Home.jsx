import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Foydalanuvchilar</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border-b pb-2">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
