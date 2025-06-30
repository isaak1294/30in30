import { NextRequest, NextResponse } from 'next/server';

const TOKEN = process.env.GITHUB_TOKEN;
const ORG = '30in30';

export async function GET(req: NextRequest) {
  const repo = req.nextUrl.searchParams.get('repo');

  if (!repo) {
    return NextResponse.json({ error: 'Missing repo' }, { status: 400 });
  }

  const response = await fetch(`https://api.github.com/repos/${ORG}/${repo}/commits`, {
    headers: {
      Authorization: `token ${TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch commits' }, { status: 500 });
  }

  const commits = await response.json();

  const events = commits.map((commit: any) => ({
    title: commit.commit.message.split('\n')[0],
    description: commit.commit.message,
    completionTime: new Date(commit.commit.author.date).toLocaleString(),
    url: commit.html_url,
  }));

  return NextResponse.json(events);
}
