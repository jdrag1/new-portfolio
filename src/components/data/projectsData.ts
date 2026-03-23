// Define types
export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  demoLink: string
  sourceLink: string
}

// Projects data
export const projects: Project[] = [
  {
    title: "Project A",
    description: "This is a project made to learn the latest languages by building an app.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    tech: ["React", "Node", "Express"],
    demoLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project B",
    description: "This is a project made to learn the latest languages by building an app.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tech: ["React", "Node", "Express", "Sass"],
    demoLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project C",
    description: "This is a project made to learn the latest languages by building an app.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tech: ["React", "Node", "Express"],
    demoLink: "#",
    sourceLink: "#",
  },
]