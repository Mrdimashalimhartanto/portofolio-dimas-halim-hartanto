/* This example requires Tailwind CSS v2.0+ */
import { useRouter } from "next/navigation";

export default function CTAProject() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Sudah siap untuk melihat lebih lanjut ?</span>
          <span className="block text-white">Silahkan lihat project saya.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            {/* <button
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              onClick={() => router.push("/projects")}
            >
              Get started
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
