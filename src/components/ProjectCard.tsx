import { motion } from 'framer-motion';
import { Github } from './icons/Github';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  slug: string;
}

export default function ProjectCard({ title, description, tags, githubUrl, slug }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <img
          src={`/img/projects/${slug}.png`}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded hover:opacity-90 transition-transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={`/projects/${slug}`}
            className="px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition-transform hover:scale-105"
          >
            Ver más
          </a>
        </div>
      </div>
    </motion.div>
  );
}