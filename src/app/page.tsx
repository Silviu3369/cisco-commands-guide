'use client'

import React, { useState, useEffect, useMemo } from 'react';
// Importă iconițele necesare explicit
import {
  Search, Terminal, Shield, Network, Book, Copy, Check, Layers, Moon, Sun, Monitor,
  ChevronDown, ChevronUp, Filter, Download, Share2, Heart, Star, Clock, TrendingUp,
  Lock, Key, Eye, EyeOff, AlertTriangle, Cpu, Database, Globe, Wifi, Server, Router, Settings,
  type LucideIcon
} from 'lucide-react';
// Importă datele și tipurile
import { ciscoCommands, Command, Section, CategoryData, CommandData } from '@/data/ciscoCommands';
// Import componente UI
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils'; // Asigură-te că importul cn este corect

// Mapare nume iconițe la componente Lucide
const IconComponents: { [key: string]: LucideIcon } = {
    Network, Shield, Layers, TrendingUp, Globe, Server, // Adaugă iconițe folosite în ciscoCommands.ts
    Terminal // Fallback
};


const CiscoCCNAReference = () => {
  // State hooks - rămân similare
  const [selectedCategory, setSelectedCategory] = useState<keyof CommandData>('ccna1');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCmd, setCopiedCmd] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [recentlyUsed, setRecentlyUsed] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  // Funcții Helper (copyToClipboard, toggleFavorite, toggleSection, expandAll, collapseAll) - rămân la fel
  const copyToClipboard = async (text: string) => { /* ... implementare ... */ };
  const toggleFavorite = (cmd: string) => { /* ... implementare ... */ };
  const toggleSection = (sectionName: string) => { /* ... implementare ... */ };
  const expandAll = (categoryKey: keyof CommandData) => { /* ... implementare ... */ };
  const collapseAll = () => { /* ... implementare ... */ };

  // useEffects (load theme/favorites/recent, apply theme, reset sections) - rămân la fel
  useEffect(() => { /* Load from localStorage */ }, []);
  useEffect(() => { /* Apply theme */ }, [theme]);
  useEffect(() => { /* Reset/Expand sections on category change */ expandAll(selectedCategory) }, [selectedCategory]);

  // Funcție filtrare/sortare (client-side) - rămâne la fel
  const filterAndSortCommands = (commandsToFilter: Command[]) => { /* ... implementare ... */ return sorted; };

  // Funcții Utilitare (getDifficultyColor, getDifficultyLabel) - rămân la fel
  const getDifficultyColor = (difficulty?: string) => { /* ... implementare ... */ };
  const getDifficultyLabel = (difficulty?: string) => { /* ... implementare ... */ };

  // Funcții Export/Share (exportCommands, shareCommands) - rămân la fel
  const exportCommands = () => { /* ... implementare ... */ };
  const shareCommands = async () => { /* ... implementare ... */ };

  // --- START JSX ---
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 max-w-7xl">
        <header className="mb-8">
          {/* Antetul cu titlu și butoane */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Terminal className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Cisco CCNA Command Guide</h1>
                <p className="text-sm sm:text-base text-muted-foreground">Ghid interactiv comenzi Cisco</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline" size="sm" aria-label="Toggle Theme"
                onClick={() => setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')}
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : theme === 'dark' ? <Monitor className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>
              <Button variant="outline" size="sm" onClick={exportCommands}><Download className="w-4 h-4 mr-1 sm:mr-2" /> <span className="hidden sm:inline">Export</span></Button>
              <Button variant="outline" size="sm" onClick={shareCommands}><Share2 className="w-4 h-4 mr-1 sm:mr-2" /> <span className="hidden sm:inline">Share</span></Button>
            </div>
          </div>

          {/* Căutare și Filtre */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
             <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Caută comenzi, descrieri..." value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" aria-label="Search commands"
                />
             </div>
             <div className="flex gap-2">
                 <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                    <SelectTrigger className="w-full sm:w-40" aria-label="Filter by difficulty">
                       <SelectValue placeholder="Dificultate" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Toate</SelectItem>
                        <SelectItem value="basic">De bază</SelectItem>
                        <SelectItem value="intermediate">Intermediar</SelectItem>
                        <SelectItem value="advanced">Avansat</SelectItem>
                    </SelectContent>
                 </Select>
                 <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-40" aria-label="Sort by">
                       <SelectValue placeholder="Sortează" />
                    </SelectTrigger>
                    <SelectContent>
                       <SelectItem value="name">Nume</SelectItem>
                       <SelectItem value="difficulty">Dificultate</SelectItem>
                    </SelectContent>
                 </Select>
             </div>
          </div>

          {/* Tabs și Conținut */}
          <Tabs value={selectedCategory} onValueChange={(val) => setSelectedCategory(val as keyof CommandData)} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto p-1 overflow-x-auto">
              {Object.entries(ciscoCommands).map(([key, data]) => {
                const IconComponent = IconComponents[data.iconName] || Terminal;
                return (
                  <TabsTrigger key={key} value={key} className="flex items-center justify-center gap-2 py-2 px-3 text-sm flex-shrink-0">
                     <div className={`p-1 rounded ${data.color} bg-opacity-20`}><IconComponent className="w-4 h-4" /></div>
                     <span className="hidden sm:inline">{data.title.split(' - ')[0]}</span>
                     <span className="sm:hidden">{data.title.split(' - ')[0].substring(0,6)}..</span> {/* Scurt pe mobil */}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(ciscoCommands).map(([key, categoryData]) => (
              <TabsContent key={key} value={key} className="mt-6">
                {/* Antet Categorie + Butoane Expand/Collapse */}
                <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                       <h2 className="text-2xl font-semibold mb-2">{categoryData.title}</h2>
                       {categoryData.description && <p className="text-muted-foreground mb-2 text-sm">{categoryData.description}</p>}
                       <p className="text-sm text-muted-foreground">{categoryData.sections.reduce((acc, section) => acc + section.commands.length, 0)} comenzi</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                       <Button variant="outline" size="sm" onClick={() => expandAll(key as keyof CommandData)}>Expand All</Button>
                       <Button variant="outline" size="sm" onClick={collapseAll}>Collapse All</Button>
                    </div>
                </div>

                {/* Secțiuni și Comenzi */}
                <div className="space-y-6">
                   {categoryData.sections.length > 0 ? categoryData.sections.map((section) => {
                      const filteredAndSortedCommands = filterAndSortCommands(section.commands);
                      const isExpanded = expandedSections.has(section.name);
                      if (filteredAndSortedCommands.length === 0 && searchTerm) return null;

                      return (
                        <Card key={section.name} className="overflow-hidden">
                          <CardHeader className="py-3 px-4 sm:px-6 cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => toggleSection(section.name)}>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-md sm:text-lg">{section.name}</CardTitle>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <Badge variant="secondary" className="whitespace-nowrap">{filteredAndSortedCommands.length} / {section.commands.length}</Badge>
                                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              </div>
                            </div>
                            {section.description && <CardDescription className={`mt-1 text-xs sm:text-sm ${!isExpanded ? 'hidden' : ''}`}>{section.description}</CardDescription>}
                          </CardHeader>

                          {isExpanded && (
                            <CardContent className="pt-0 pb-4 px-4 sm:px-6">
                              {filteredAndSortedCommands.length > 0 ? (
                                <div className="space-y-4 pt-4 border-t">
                                  {filteredAndSortedCommands.map((command, idx) => (
                                    <div key={`${section.name}-${idx}`} className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow bg-card">
                                      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                                        <div className="flex-1 overflow-hidden min-w-0"> {/* Important for text wrap */}
                                          {/* Linie comandă + badge-uri */}
                                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                                            <h3 className="font-mono font-semibold text-sm bg-muted px-2 py-1 rounded break-words">
                                              {command.cmd}
                                            </h3>
                                            {command.difficulty && <Badge variant="outline" className={`${getDifficultyColor(command.difficulty)} whitespace-nowrap text-xs`}>{getDifficultyLabel(command.difficulty)}</Badge>}
                                            {command.platform && command.platform !== 'IOS' && <Badge variant="secondary" className="whitespace-nowrap text-xs">{command.platform}</Badge>}
                                            {favorites.has(command.cmd) && <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 flex-shrink-0" title="Favorit"/>}
                                            {recentlyUsed.has(command.cmd) && <Clock className="w-3 h-3 text-blue-500 flex-shrink-0" title="Utilizat recent"/>}
                                          </div>
                                          {/* Descriere */}
                                          <p className="text-sm text-muted-foreground mb-2">{command.desc}</p>
                                          {/* Exemplu */}
                                          <div className="bg-muted/50 rounded p-2 sm:p-3 mb-2">
                                            <p className="text-xs font-mono mb-1 text-muted-foreground">Exemplu:</p>
                                            <pre className="text-sm font-mono whitespace-pre-wrap break-words"><code>{command.example}</code></pre>
                                          </div>
                                          {/* Sintaxa */}
                                          {command.syntax && (
                                            <div className="bg-blue-50 dark:bg-blue-950 rounded p-2 mb-2">
                                              <p className="text-xs font-mono text-blue-700 dark:text-blue-300">
                                                <strong className="font-semibold">Sintaxă:</strong> <code className="whitespace-pre-wrap break-words">{command.syntax}</code>
                                              </p>
                                            </div>
                                          )}
                                          {/* Note */}
                                          {command.notes && (
                                            <div className="bg-yellow-50 dark:bg-yellow-950 rounded p-2">
                                              <p className="text-xs text-yellow-700 dark:text-yellow-300">
                                                <strong className="font-semibold">Note:</strong> {command.notes}
                                              </p>
                                            </div>
                                          )}
                                        </div>
                                        {/* Butoane Acțiune */}
                                        <div className="flex flex-row sm:flex-col gap-2 flex-shrink-0 self-start sm:self-center pt-1 sm:pt-0">
                                          <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); copyToClipboard(command.cmd); }} title={`Copiază "${command.cmd}"`}>
                                            {copiedCmd === command.cmd ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                          </Button>
                                          <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); toggleFavorite(command.cmd); }} title={favorites.has(command.cmd) ? "Elimină favorit" : "Adaugă favorit"}>
                                            <Heart className={`w-4 h-4 ${favorites.has(command.cmd) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-muted-foreground text-sm py-4 text-center">Nicio comandă nu corespunde filtrelor.</p>
                              )}
                            </CardContent>
                          )}
                        </Card>
                      );
                   }) : (
                       <p className="text-muted-foreground text-center py-8">Comenzile pentru această categorie vor fi adăugate în curând.</p>
                   )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </header>
      </div>
    </div>
  );
  // --- END JSX ---
}

export default function Home() {
  return <CiscoCCNAReference />;
}
