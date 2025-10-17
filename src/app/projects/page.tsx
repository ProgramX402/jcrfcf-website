// app/projects/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface Project {
  _id: string;
  title: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'video' | 'image';
  createdAt?: string;
}

async function fetchProjects(): Promise<Project[]> {
  const res = await fetch('https://orphanage-backend-r7i2.onrender.com/api/projects', {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    projects = await fetchProjects();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/hero.jpg')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg max-w-3xl">
            Empowering children and young adults through education, sports, health, and vocational training.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {projects.length === 0 ? (
            <p className="text-center text-gray-600">No projects found.</p>
          ) : (
            projects.map((project, index) => {
              const isVideo = project.mediaType?.includes('video');
              const createdAt = project.createdAt
                ? new Date(project.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : null;

              const mediaElement = project.mediaUrl ? (
                isVideo ? (
                  <video
                    controls
                    className="rounded-lg w-full max-h-64 object-cover"
                  >
                    <source src={project.mediaUrl} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={project.mediaUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                )
              ) : (
                <Image
                  src="/images/assets/placeholder.jpg"
                  alt="No media"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              );

              return (
                <div
                  key={project._id}
                  className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-[1.01] hover:shadow-lg"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="p-8 flex flex-col justify-center space-y-4">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h2>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.content}</p>
                        {createdAt && <p className="text-sm text-gray-500">Posted on {createdAt}</p>}
                      </div>
                      <div className="p-4 flex items-center justify-center">{mediaElement}</div>
                    </>
                  ) : (
                    <>
                      <div className="p-4 flex items-center justify-center">{mediaElement}</div>
                      <div className="p-8 flex flex-col justify-center space-y-4">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h2>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.content}</p>
                        {createdAt && <p className="text-sm text-gray-500">Posted on {createdAt}</p>}
                      </div>
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
