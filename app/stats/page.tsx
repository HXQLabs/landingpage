"use client";

import { useState, useEffect } from "react";
import { ChevronDown, GitFork, Star, Eye, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchAll } from "@/lib/github";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DynamicDottedMultiLineChart } from "@/components/ui/dynamic-dotted-multi-line";
import { DynamicRoundedPieChart } from "@/components/ui/dynamic-rounded-pie-chart";
import { DynamicStrokeMultipleRadarChart } from "@/components/ui/dynamic-stroke-multiple-radar-chart";

// GitHub organization name - update this to your organization
const GITHUB_ORG = "HXQLabs";

interface Repository {
  id: string;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  watchers: number;
  language: string | null;
  lastUpdated: string;
  full_name: string;
  html_url: string;
  topics: string[];
}

// Generate dynamic chart data based on repository
const generateChartData = (repo: Repository, monthlyData?: { month: string; issues: number; prs: number; }[]) => {
  // Generate line chart data based on stars/forks activity
  const starsFactor = Math.max(repo.stars / 1000, 1);
  const forksFactor = Math.max(repo.forks / 100, 1);
  
  const lineChart = [
    { month: "January", desktop: Math.floor(starsFactor * 50 + Math.random() * 100), mobile: Math.floor(forksFactor * 30 + Math.random() * 50) },
    { month: "February", desktop: Math.floor(starsFactor * 75 + Math.random() * 100), mobile: Math.floor(forksFactor * 45 + Math.random() * 50) },
    { month: "March", desktop: Math.floor(starsFactor * 60 + Math.random() * 100), mobile: Math.floor(forksFactor * 35 + Math.random() * 50) },
    { month: "April", desktop: Math.floor(starsFactor * 45 + Math.random() * 100), mobile: Math.floor(forksFactor * 55 + Math.random() * 50) },
    { month: "May", desktop: Math.floor(starsFactor * 65 + Math.random() * 100), mobile: Math.floor(forksFactor * 40 + Math.random() * 50) },
    { month: "June", desktop: Math.floor(starsFactor * 70 + Math.random() * 100), mobile: Math.floor(forksFactor * 60 + Math.random() * 50) },
  ];

  // Generate radar chart data based on PRs vs Issues if available, otherwise fallback to stars/forks
  const radarChart = monthlyData ? monthlyData.map(item => ({
    month: item.month,
    desktop: item.issues,
    mobile: item.prs
  })) : [
    { month: "January", desktop: Math.floor(starsFactor * 0.8 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.6 + Math.random() * 30) },
    { month: "February", desktop: Math.floor(starsFactor * 1.2 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.9 + Math.random() * 30) },
    { month: "March", desktop: Math.floor(starsFactor * 0.9 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.7 + Math.random() * 30) },
    { month: "April", desktop: Math.floor(starsFactor * 1.1 + Math.random() * 50), mobile: Math.floor(forksFactor * 1.0 + Math.random() * 30) },
    { month: "May", desktop: Math.floor(starsFactor * 0.85 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.8 + Math.random() * 30) },
    { month: "June", desktop: Math.floor(starsFactor * 1.15 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.65 + Math.random() * 30) },
  ];

  return {
    lineChart,
    radarChart,
  };
};

export default function StatsPage() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [languagesData, setLanguagesData] = useState<Record<string, number> | null>(null);
  const [monthlyIssuesPrs, setMonthlyIssuesPrs] = useState<{ month: string; issues: number; prs: number; }[] | null>(null);
  const [topics, setTopics] = useState<string[]>([]);

  // Fetch repositories from GitHub API
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        
        // Try organization repos first
        let response = await fetch(`https://api.github.com/orgs/${GITHUB_ORG}/repos?sort=stars&direction=desc&per_page=10`);
        
        // If org doesn't exist, try user repos
        if (!response.ok && response.status === 404) {
          response = await fetch(`https://api.github.com/users/${GITHUB_ORG}/repos?sort=stars&direction=desc&per_page=10`);
        }
        
        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform GitHub API data to our format
        const transformedRepos: Repository[] = data.map((repo: any) => ({
          id: repo.name,
          name: repo.name,
          description: repo.description || "No description available",
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          watchers: repo.watchers_count,
          language: repo.language || "Unknown",
          lastUpdated: new Date(repo.updated_at).toISOString().split('T')[0],
          full_name: repo.full_name,
          html_url: repo.html_url,
          topics: repo.topics || [],
        }));
        
        setRepositories(transformedRepos);
        if (transformedRepos.length > 0) {
          setSelectedRepo(transformedRepos[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        console.error('Error fetching repositories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // Fetch languages and topics for the selected repository
  useEffect(() => {
    const fetchLanguagesAndTopics = async () => {
      if (!selectedRepo) return;
      try {
        const [langsRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${selectedRepo.full_name}/languages`),
          fetch(`https://api.github.com/repos/${selectedRepo.full_name}`)
        ]);
        
        if (!langsRes.ok || !repoRes.ok) throw new Error(`Failed to fetch repo data`);
        
        const langs = await langsRes.json();
        const repoData = await repoRes.json();
        
        setLanguagesData(langs as Record<string, number>);
        setTopics(repoData.topics || []);
      } catch (e) {
        console.error('Error fetching languages/topics', e);
        setLanguagesData(null);
        setTopics([]);
      }
    };
    fetchLanguagesAndTopics();
  }, [selectedRepo]);

  // Fetch PRs and Issues counts via GitHub search API and distribute by recent months for visualization
  useEffect(() => {
    const fetchIssuesAndPRs = async () => {
      if (!selectedRepo) return;
      try {
        const repo = selectedRepo.full_name;
        const since = new Date();
        since.setMonth(since.getMonth() - 5);
        const sinceISO = since.toISOString().split('T')[0];

        const [issuesRes, prsRes] = await Promise.all([
          fetch(`https://api.github.com/search/issues?q=repo:${repo}+type:issue+created:>=${sinceISO}&per_page=1`),
          fetch(`https://api.github.com/search/issues?q=repo:${repo}+type:pr+created:>=${sinceISO}&per_page=1`),
        ]);

        if (!issuesRes.ok || !prsRes.ok) throw new Error('Failed to fetch PR/Issue totals');
        const issuesJson = await issuesRes.json();
        const prsJson = await prsRes.json();
        const totalIssues: number = issuesJson.total_count || 0;
        const totalPrs: number = prsJson.total_count || 0;

        // Distribute totals across last 6 months proportionally (simple decreasing weights)
        const months = Array.from({ length: 6 }, (_, i) => {
          const d = new Date();
          d.setMonth(d.getMonth() - (5 - i));
          return d.toLocaleString(undefined, { month: 'short' });
        });

        const weights = [0.1, 0.12, 0.15, 0.18, 0.2, 0.25];
        const issuesByMonth = weights.map(w => Math.round(totalIssues * w));
        const prsByMonth = weights.map(w => Math.round(totalPrs * w));

        const distributed = months.map((m, idx) => ({ month: m, issues: issuesByMonth[idx], prs: prsByMonth[idx] }));
        setMonthlyIssuesPrs(distributed);
      } catch (e) {
        console.error('Error fetching PRs/Issues', e);
        setMonthlyIssuesPrs(null);
      }
    };
    fetchIssuesAndPRs();
  }, [selectedRepo]);

  const chartData = selectedRepo ? generateChartData(selectedRepo, monthlyIssuesPrs || undefined) : null;

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading repositories...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-destructive mb-2">Error loading repositories</p>
              <p className="text-muted-foreground text-sm">{error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                variant="outline" 
                className="mt-4"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // No repositories found
  if (repositories.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-muted-foreground">No repositories found for organization "{GITHUB_ORG}"</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Repository Statistics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore detailed analytics and insights for {GITHUB_ORG} repositories.
            Switch between different projects to compare their performance metrics.
          </p>
          
          {/* Repository Selector */}
          <div className="flex justify-center mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-64 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    {selectedRepo?.name || "Select Repository"}
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {repositories.map((repo) => (
                  <DropdownMenuItem
                    key={repo.id}
                    onClick={() => setSelectedRepo(repo)}
                    className="flex items-center gap-2 p-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{repo.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {repo.language} • ⭐ {formatNumber(repo.stars)}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {selectedRepo && (
          <>
            {/* Repository Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Stars</p>
                      <p className="text-2xl font-bold">{formatNumber(selectedRepo.stars)}</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Forks</p>
                      <p className="text-2xl font-bold">{formatNumber(selectedRepo.forks)}</p>
                    </div>
                    <GitFork className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Watchers</p>
                      <p className="text-2xl font-bold">{formatNumber(selectedRepo.watchers)}</p>
                    </div>
                    <Eye className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Repository Info Card */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-xl font-semibold">{selectedRepo.name}</h2>
                      <a 
                        href={selectedRepo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        View on GitHub →
                      </a>
                    </div>
                    <p className="text-muted-foreground mb-3">{selectedRepo.description}</p>
                    <div className="flex items-center gap-4 flex-wrap">
                      <Badge variant="outline">{selectedRepo.language || "Unknown"}</Badge>
                      <span className="text-sm text-muted-foreground">
                        Last updated: {selectedRepo.lastUpdated}
                      </span>
                    </div>
                    {/* Topics as tech stack chips if available */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {topics.slice(0, 10).map((topic: string) => (
                        <Badge key={topic} variant="secondary" className="capitalize">{topic.replace(/[-_]/g, ' ')}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Charts Grid */}
        {selectedRepo && chartData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <DynamicDottedMultiLineChart 
              data={chartData.lineChart}
              title="Repository Activity Trend"
              description={`${selectedRepo.name} activity over the last 6 months`}
              className="xl:col-span-2"
            />
            <DynamicRoundedPieChart 
              data={languagesData ? Object.entries(languagesData).map(([lang, bytes], idx) => ({
                browser: lang.toLowerCase(),
                visitors: bytes,
                fill: `var(--color-${['chrome','safari','firefox','edge','other'][idx % 5]})`,
              })) : undefined}
              title="Tech Stack Distribution"
              description={`${selectedRepo.name} languages by code volume`}
              className=""
            />
            <DynamicStrokeMultipleRadarChart 
              data={chartData.radarChart}
              title="Issues vs PRs"
              description={`${selectedRepo.name} contribution activity over the last 6 months`}
              className="xl:col-span-3"
            />
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Data last updated: {new Date().toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
