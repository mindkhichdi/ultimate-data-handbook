import cn from "@lib/cn";

const contents = [
  {
    title: "Getting Started",
    icon: "✨",
    href: "/getting-started",
    description:
      "How to build a data teams and infrastructure from the gtround up.",
    comingSoon: false,
  },
  {
    title: "Core Concepts",
    icon: "🧠",
    href: "/core-concepts",
    description:
      "Understand common terms used in data engineering and data science.",
    comingSoon: false,
  },
  {
    title: "Good Conventions",
    icon: "👌",
    href: "/good-conventions",
    description:
      "Design your data so it is easy for humans and LLMs to understand.",
    comingSoon: false,
  },
  {
    title: "Managing Data Teams",
    icon: "💼",
    href: "#",
    description:
      "Product and Engineering Management to help you build the right things and build things right.",
    comingSoon: true,
  },
];

export default function ContentTiles() {
  return (
    <>
      <div>
        {/* <h2 className="text-2xl w-full mb-6 font-serif dark:text-gray-300 text-gray-700 italic">
          Table of Contents
        </h2> */}
        <ul role="list" className="grid gap-4 grid-cols-1 xl:grid-cols-2">
          {contents.map((content) => (
            <li key={content.title}>
              <a href={content.href}>
                <div
                  className={cn(
                    "border border-gray-200 dark:border-gray-800 p-4 rounded-md flex h-full",
                    content.comingSoon
                      ? "opacity-50 cursor-default"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:cursor-pointer"
                  )}
                >
                  <div className="mr-4 text-2xl">{content.icon}</div>
                  <div className="relative w-full">
                    {content.comingSoon && (
                      <p className="absolute text-xs dark:text-gray-300 top-1 right-0">
                        (Coming Soon)
                      </p>
                    )}

                    <h3 className="text-lg font-bold dark:text-gray-300 text-gray-700">
                      {content.title}
                    </h3>

                    <p className="text-sm mt-1 dark:text-gray-400 text-gray-600">
                      {content.description}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
