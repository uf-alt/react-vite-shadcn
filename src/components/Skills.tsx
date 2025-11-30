import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skills = [
    {
      title: "📱 UI/UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces with a focus on user experience",
    },
    {
      title: "🎮 Luau Game Development",
      description:
        "Developing games and interactive experiences using the Luau programming language",
    },
    {
      title: "👨‍💻 Strong Programmatic Thinking",
      description:
        "Approaching problems with logical reasoning and algorithmic solutions",
    },
    {
      title: "⊞ Windows 10/11 File System",
      description:
        "Proficient navigation and management of the Windows file system architecture",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
