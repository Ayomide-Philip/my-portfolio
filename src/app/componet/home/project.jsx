import Link from "next/link";

const project = [
  {
    imageUrl:
      "https://github.com/Ayomide-Philip/four-card-feature-section/raw/5b3c1de204ab79192753ece0fdcb6ca7f3912355/Screenshot%202024-08-05%20120907.png",
    name: "Four Card Feature Section",
    description:
      "A responsive feature section solution from Frontend Mentor, showcasing clean layouts and adaptive design.",
    tag: ["Frontend Mentor", "Responsive Design"],
    url: "https://ayomide-philip.github.io/four-card-feature-section/",
  },
  {
    imageUrl:
      "https://github.com/Ayomide-Philip/Recipe-page-solution/raw/main/preview.jpg",
    name: "Simple Omelette Recipe",
    description:
      "A minimalist recipe page highlighting a simple omelette, built with clean UI and user‑friendly layout.",
    tag: ["HTML/CSS", "Recipe UI"],
    url: "https://ayomide-philip.github.io/Recipe-page-solution/",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Ayomide-Philip/DevSpace/main/frontend/public/images/logo.png",
    name: "DevSpace",
    description:
      "A community platform built with React for collaboration, chat, and developer interactions.",
    tag: ["React", "Community"],
    url: "https://github.com/Ayomide-Philip/DevSpace",
  },
];

export default function ProjectSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Our Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-black sm:mt-4">
            Check out some of our recent work and case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.map(({ imageUrl, name, description, tag, url }) => {
            return (
              <div
                key={name}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt="Project 1"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {name}
                  </h3>
                  <p className="mt-2 text-gray-600">{description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tag.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className="rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <Link
                    href={url}
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    View case study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
