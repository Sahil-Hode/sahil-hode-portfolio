import { NextResponse } from 'next/server';

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'sahilhode';
  const token = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    // Fetch user profile
    const userRes = await fetch(
      `https://api.github.com/users/${username}`,
      { headers, next: { revalidate: 3600 } }
    );
    
    if (!userRes.ok) {
      throw new Error(`GitHub User API responded with ${userRes.status}`);
    }
    
    const user = await userRes.json();

    // Fetch all repos
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers, next: { revalidate: 3600 } }
    );
    
    if (!reposRes.ok) {
      throw new Error(`GitHub Repos API responded with ${reposRes.status}`);
    }
    
    const repos = await reposRes.json();

    // Count total stars
    const totalStars = repos.reduce(
      (acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0
    );

    // Count languages
    const languageMap: Record<string, number> = {};
    repos.forEach((repo: any) => {
      if (repo.language) {
        languageMap[repo.language] = (languageMap[repo.language] || 0) + 1;
      }
    });

    // Sort languages by count
    const languages = Object.entries(languageMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / repos.length) * 100)
      }));

    // Get 3 recent repos
    const recentRepos = repos.slice(0, 3).map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      updatedAt: repo.updated_at,
    }));

    return NextResponse.json({
      username: user.login,
      name: user.name,
      bio: user.bio,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      languages,
      recentRepos,
      profileUrl: user.html_url,
      avatarUrl: user.avatar_url,
    });

  } catch (error: any) {
    console.error("GitHub API Error:", error.message);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data', message: error.message },
      { status: 500 }
    );
  }
}
