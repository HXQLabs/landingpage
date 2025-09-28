"use client";

import { useState, useEffect } from "react";
import { ChevronDown, GitFork, Star, Eye, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
const GITHUB_ORG = "badtzx0";

interface Repository {
  id: string;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  watchers: number;
  downloads: number;
  language: string | null;
  lastUpdated: string;
  full_name: string;
  html_url: string;
}

// Generate dynamic chart data based on repository
const generateChartData = (repo: Repository) => {
  // Generate data based on repository metrics for more realistic charts
  const starsFactor = Math.max(repo.stars / 1000, 1);
  const forksFactor = Math.max(repo.forks / 100, 1);
  
  // Generate line chart data based on stars/forks activity
  const lineChart = [
    { month: "January", desktop: Math.floor(starsFactor * 50 + Math.random() * 100), mobile: Math.floor(forksFactor * 30 + Math.random() * 50) },
    { month: "February", desktop: Math.floor(starsFactor * 75 + Math.random() * 100), mobile: Math.floor(forksFactor * 45 + Math.random() * 50) },
    { month: "March", desktop: Math.floor(starsFactor * 60 + Math.random() * 100), mobile: Math.floor(forksFactor * 35 + Math.random() * 50) },
    { month: "April", desktop: Math.floor(starsFactor * 45 + Math.random() * 100), mobile: Math.floor(forksFactor * 55 + Math.random() * 50) },
    { month: "May", desktop: Math.floor(starsFactor * 65 + Math.random() * 100), mobile: Math.floor(forksFactor * 40 + Math.random() * 50) },
    { month: "June", desktop: Math.floor(starsFactor * 70 + Math.random() * 100), mobile: Math.floor(forksFactor * 60 + Math.random() * 50) },
  ];

  // Generate pie chart data based on language and popularity
  const languages = [
    { browser: repo.language || "JavaScript", visitors: Math.floor(repo.downloads * 0.6), fill: "var(--color-chrome)" },
    { browser: "TypeScript", visitors: Math.floor(repo.downloads * 0.25), fill: "var(--color-safari)" },
    { browser: "CSS", visitors: Math.floor(repo.downloads * 0.1), fill: "var(--color-firefox)" },
    { browser: "Other", visitors: Math.floor(repo.downloads * 0.05), fill: "var(--color-edge)" },
  ];

  // Generate radar chart data based on repository metrics
  const radarChart = [
    { month: "January", desktop: Math.floor(starsFactor * 0.8 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.6 + Math.random() * 30) },
    { month: "February", desktop: Math.floor(starsFactor * 1.2 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.9 + Math.random() * 30) },
    { month: "March", desktop: Math.floor(starsFactor * 0.9 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.7 + Math.random() * 30) },
    { month: "April", desktop: Math.floor(starsFactor * 1.1 + Math.random() * 50), mobile: Math.floor(forksFactor * 1.0 + Math.random() * 30) },
    { month: "May", desktop: Math.floor(starsFactor * 0.85 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.8 + Math.random() * 30) },
    { month: "June", desktop: Math.floor(starsFactor * 1.15 + Math.random() * 50), mobile: Math.floor(forksFactor * 0.65 + Math.random() * 30) },
  ];

  return {
    lineChart,
    pieChart: languages,
    radarChart,
  };
};

export default function StatsPage() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          downloads: Math.floor(Math.random() * 1000000) + 10000, // Mock download data
          language: repo.language || "Unknown",
          lastUpdated: new Date(repo.updated_at).toISOString().split('T')[0],
          full_name: repo.full_name,
          html_url: repo.html_url,
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

  const chartData = selectedRepo ? generateChartData(selectedRepo) : null;

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
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Downloads</p>
                      <p className="text-2xl font-bold">{formatNumber(selectedRepo.downloads)}</p>
                    </div>
                    <Download className="h-8 w-8 text-purple-500" />
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
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{selectedRepo.language || "Unknown"}</Badge>
                      <span className="text-sm text-muted-foreground">
                        Last updated: {selectedRepo.lastUpdated}
                      </span>
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
            {/* Downloads Trend Chart */}
            <div className="xl:col-span-2">
              <DynamicDottedMultiLineChart 
                data={chartData.lineChart}
                title="Repository Activity Trend"
                description={`${selectedRepo.name} activity over the last 6 months`}
                trend={Math.floor(Math.random() * 20) - 10} // Random trend between -10 and 10
              />
            </div>
            
            {/* Package Manager Distribution */}
            <div>
              <DynamicRoundedPieChart 
                data={chartData.pieChart}
                title="Technology Distribution"
                description={`${selectedRepo.name} technology stack`}
                trend={Math.floor(Math.random() * 15) + 1} // Random positive trend 1-15
              />
            </div>
            
            {/* Performance Metrics */}
            <div className="xl:col-span-3">
              <DynamicStrokeMultipleRadarChart 
                data={chartData.radarChart}
                title="Performance Metrics"
                description={`${selectedRepo.name} usage patterns across desktop and mobile platforms`}
                trend={Math.floor(Math.random() * 12) + 3} // Random trend 3-15
              />
            </div>
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
