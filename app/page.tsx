import { BlogPosts } from 'app/components/posts';
import { Projects } from './components/projects';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        👋 Hi! I'm Gavin Acquroff
      </h1>
      <p className="mb-4">
        {`I'm a full stack software engineer focused on human-centered design. Check out my latest projects!`}
      </p>
      <p>{`If you're feeling brave, you can also read my blog posts.`}</p>
      <div className="my-8">
        <Projects />
      </div>
    </section>
  );
}
