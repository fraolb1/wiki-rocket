"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='w-50 flex justify-between items-center'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search...'
        className='border-none p-2 rounded-xl'
      />
      <button className=' text-2xl'>🚀</button>
    </form>
  );
};

export default Search;
