import getWiki from "@/libs/getWiki";
import Link from "next/link";

interface Props {
  params: { searchTerm: string };
}
const page = async ({ params: { searchTerm } }: Props) => {
  const wiki: SearchResult = await getWiki(searchTerm);
  const results: Result[] | undefined = wiki.query?.pages;
  return (
    <div className='p-4 space-y-4'>
      {results ? (
        Object.values(results).map((result) => (
          <div
            key={result.pageid}
            className='flex items-center p-4 border border-gray-300 rounded-lg'>
            <img
              className='h-24 w-24 object-cover rounded-lg'
              src={result.thumbnail?.source}
              alt={result.title}
            />
            <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`}>
              <div className='ml-4'>
                <h2 className='text-xl font-bold text-gray-100'>
                  {result.title}
                </h2>
                <p className='text-gray-200 text-lg'>{result.extract}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className='text-gray-300 text-lg'>No results found.</div>
      )}
    </div>
  );
};

export default page;
