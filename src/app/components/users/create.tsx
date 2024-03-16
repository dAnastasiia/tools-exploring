import { FormEvent } from "react";

export default function CreateUser() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.target as HTMLFormElement).entries()
    );

    console.log("data: ", data);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" id="name" name="name" />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
