import { useGo } from "@refinedev/core";

export default function UserList() {
  const go = useGo();

  return (
    <div>
      <button
        onClick={() => {
          go({
            to: {
              resource: "users",
              action: "create",
            },
          });
        }}
      >
        Create
      </button>

      <ul>
        {[
          { id: 1, name: "Fred" },
          { id: 2, name: "George" },
        ]?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
