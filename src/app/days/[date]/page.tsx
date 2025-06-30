'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Timeline, { TimelineEvent } from '@/components/Timeline';
import { repoMetadata } from '@/data/repoMetadata';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export default function AppDatePage() {
  const { date } = useParams();
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [title, setTitle] = useState<string | null>(null);

  const checkpoints = [
    'Initialization',
    'Database Modelling',
    'CRUD Functionality',
    'Basic UI Integration',
    'Authentication',
    'State and Data Fetching',
    'UI Polish and Responsiveness',
    'Testing and Validation',
    'Deployment',
  ];

  useEffect(() => {
    if (!date) return;

    const metadata = repoMetadata.find((r) => r.date === date);
    if (!metadata) return;

    setTitle(metadata.title);

    const fetchEvents = async () => {
      const res = await fetch(`/api/github-repo-commits?repo=${metadata.repo}`);
      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        setEvents([]);
        return;
      }

      const sortedCommits = data
        .map((commit: any) => ({
          message: commit.description,
          time: dayjs(commit.completionTime),
          url: commit.url,
        }))
        .sort((a, b) => a.time.valueOf() - b.time.valueOf());

      const initialTime = sortedCommits[0].time;

      sortedCommits.reverse();

        const timelineEvents: TimelineEvent[] = sortedCommits.map((commit, i) => {
        const diff = dayjs.duration(commit.time.diff(initialTime));

        const timeElapsed =
            diff.asHours() >= 1
            ? `${Math.floor(diff.asHours())}h ${diff.minutes()}m after first commit`
            : `${diff.minutes()}m ${diff.seconds()}s after first commit`;

        return {
            title: checkpoints[i] ?? `Extra Commit ${i + 1}`,
            description: (
            <>
                <span className="block mb-1">{commit.message}</span>
                <a
                href={commit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline text-sm"
                >
                View Commit
                </a>
            </>
            ),
            completionTime: timeElapsed,
        };
        });

      setEvents(timelineEvents);
    };

    fetchEvents();
  }, [date]);

  if (!title) {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white">Project not started yet...</h1>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">
        {title} — <span className="text-white">{date}</span>
      </h1>
      <p className="mb-6 text-sm text-white">
        This timeline shows all commits made to the <strong>{title}</strong> project on this day,
        based on push activity from the GitHub repo in the{' '}
        <a
          href="https://github.com/30in30"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          30in30 organization
        </a>
        .
      </p>

      <Timeline events={events} />
    </main>
  );
}
