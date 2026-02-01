'use client';

import { useState } from 'react';
import { comments, categories, CodeComment } from '@/data/comments';

function CommentCard({ comment }: { comment: CodeComment }) {
  const category = categories[comment.category];
  
  return (
    <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-all hover:shadow-lg hover:shadow-zinc-900/50">
      {/* Category badge */}
      <div className="absolute -top-3 right-4">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400 border border-zinc-700">
          <span>{category.emoji}</span>
          <span>{category.name}</span>
        </span>
      </div>
      
      {/* Comment */}
      <pre className="font-mono text-sm md:text-base text-green-400 whitespace-pre-wrap overflow-x-auto mb-4 leading-relaxed">
        {comment.comment}
      </pre>
      
      {/* Source info */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
        <span className="text-zinc-400 font-medium">{comment.source}</span>
        <span>•</span>
        <a 
          href={comment.repoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-zinc-300 transition-colors"
        >
          {comment.repo}
        </a>
        {comment.year && (
          <>
            <span>•</span>
            <span>{comment.year}</span>
          </>
        )}
        {comment.author && (
          <>
            <span>•</span>
            <span className="text-zinc-400">{comment.author}</span>
          </>
        )}
      </div>
      
      {/* Language badge */}
      <div className="absolute bottom-4 right-4">
        <span className="text-xs font-mono text-zinc-600 bg-zinc-800/50 px-2 py-1 rounded">
          {comment.language}
        </span>
      </div>
    </div>
  );
}

function CategoryFilter({ 
  selected, 
  onSelect 
}: { 
  selected: string | null; 
  onSelect: (cat: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          selected === null
            ? 'bg-zinc-100 text-zinc-900'
            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
        }`}
      >
        All
      </button>
      {Object.entries(categories).map(([key, cat]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selected === key
              ? 'bg-zinc-100 text-zinc-900'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          {cat.emoji} {cat.name}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredComments = selectedCategory
    ? comments.filter(c => c.category === selectedCategory)
    : comments;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="text-6xl mb-6">📜</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Code Comment Museum
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4">
            A curated gallery of the funniest, weirdest, and most insightful comments 
            found in famous open source codebases.
          </p>
          <p className="text-sm text-zinc-500">
            Because the best documentation is the comment your past self left at 3 AM.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6">
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      </div>

      {/* Comments Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {filteredComments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
        
        {filteredComments.length === 0 && (
          <div className="text-center text-zinc-500 py-20">
            <p>No comments found in this category.</p>
            <p className="text-sm mt-2">// TODO: add more comments</p>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">{comments.length}</div>
              <div className="text-sm text-zinc-500">Comments Archived</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">
                {new Set(comments.map(c => c.repo)).size}
              </div>
              <div className="text-sm text-zinc-500">Projects Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">
                {new Set(comments.map(c => c.language)).size}
              </div>
              <div className="text-sm text-zinc-500">Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">∞</div>
              <div className="text-sm text-zinc-500">TODOs Left Behind</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-500">
          <p className="mb-2">
            Built by{' '}
            <a href="https://henry-the-great.com" className="text-zinc-400 hover:text-white transition-colors">
              Henry the Great
            </a>{' '}
            🗿 during a 3:30 AM build session
          </p>
          <p className="font-mono text-xs text-zinc-600">
            {'// TODO: add more comments from famous repos'}
          </p>
        </div>
      </footer>
    </main>
  );
}
