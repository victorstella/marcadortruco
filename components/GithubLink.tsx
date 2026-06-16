'use client';

export function GithubLink() {
  return (
    <div className="flex w-full justify-center mt-20">
      <button
        className="bg-gray-900 rounded-md px-2 py-1 text-gray-400 border border-gray-500 hover:border-teal-800 hover:text-teal-400 cursor-pointer"
        onClick={() =>
          window.open('https://github.com/victorstella/marcadortruco', '_blank')
        }
      >
        GitHub
      </button>
    </div>
  );
}
