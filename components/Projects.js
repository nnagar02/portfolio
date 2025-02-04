
const projects = [
  {
    title: "RAG System Optimization",
    description: "Improved information retrieval efficiency by 30%.",
    link: "#",
  },
  {
    title: "Generative AI for Compliance",
    description: "Processed multi-column documents with 90% accuracy.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-4 grid gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
