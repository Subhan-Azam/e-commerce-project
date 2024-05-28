// 'use client' // Error components must be Client Components
 
// import { useEffect } from 'react'
 
// export default function Error({ error, reset }) {
//   useEffect(() => {
//     console.error(error)
//   }, [error])
 
//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <button
//         onClick={
//           () => reset()
//         }
//       >
//         Try again
//       </button>
//     </div>
//   )
// }


'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
