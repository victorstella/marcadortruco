import { GithubLink } from '@/components/GithubLink';
import { Scoreboard } from '@/components/Scoreboard';

export default function Home() {
  return (
    <main>
      <Scoreboard />
      <GithubLink />
    </main>
  );
}
