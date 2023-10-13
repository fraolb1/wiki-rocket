import Link from "next/link";

export default async function Home() {
  return (
    <main className='flex justify-center items-center text-white flex-col mt-10 space-y-5'>
      <h1 className=' text-4xl'>Welcome to WikiRocket</h1>
      <p className=' text-lg'>
        you can search for anything and get wikipedia result for it
      </p>
    </main>
  );
}
