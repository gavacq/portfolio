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
      <p>{`You can also read `}
      <a href='/blog' className='font-semibold hover:underline'>my blog </a>
      for the latest updates on my work and assorted musings.
      </p>
      <div className="my-8">
        <Projects />
      </div>
    </section>
  );
}
