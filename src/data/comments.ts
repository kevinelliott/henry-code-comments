export interface CodeComment {
  id: string;
  comment: string;
  source: string;
  repo: string;
  repoUrl: string;
  file?: string;
  language: string;
  category: 'funny' | 'wisdom' | 'despair' | 'mystery' | 'apologetic' | 'todo' | 'profane' | 'poetic' | 'legacy' | 'hack';
  year?: number;
  author?: string;
}

export const comments: CodeComment[] = [
  // ==================== ORIGINAL COMMENTS ====================
  {
    id: 'linux-drunk',
    comment: '/* You are not expected to understand this. */',
    source: 'Unix V6 Kernel',
    repo: 'Unix',
    repoUrl: 'https://github.com/dspinellis/unix-history-repo',
    language: 'C',
    category: 'funny',
    year: 1975,
    author: 'Dennis Ritchie & Ken Thompson'
  },
  {
    id: 'doom-magic',
    comment: '// FUCK OVERFLOW',
    source: 'Doom 3 Source Code',
    repo: 'DOOM-3',
    repoUrl: 'https://github.com/id-Software/DOOM-3',
    file: 'neo/renderer/RenderWorld.cpp',
    language: 'C++',
    category: 'profane',
    year: 2011,
    author: 'id Software'
  },
  {
    id: 'fastinvsqrt',
    comment: '// what the fuck?',
    source: 'Quake III Arena - Fast Inverse Square Root',
    repo: 'Quake-III-Arena',
    repoUrl: 'https://github.com/id-Software/Quake-III-Arena',
    file: 'code/game/q_math.c',
    language: 'C',
    category: 'mystery',
    year: 1999,
    author: 'id Software'
  },
  {
    id: 'webkit-lol',
    comment: '// I\'m really sorry about this.',
    source: 'WebKit',
    repo: 'webkit',
    repoUrl: 'https://github.com/nicowilliams/webkit',
    language: 'C++',
    category: 'apologetic'
  },
  {
    id: 'msft-magic',
    comment: '// Magic. Do not touch.',
    source: 'Windows Source Code (leaked)',
    repo: 'Windows',
    repoUrl: '#',
    language: 'C',
    category: 'mystery',
    year: 2004
  },
  {
    id: 'sqlite-humor',
    comment: '/* The main sqlite3 database file magic number */\n// I am the wizard!',
    source: 'SQLite',
    repo: 'sqlite',
    repoUrl: 'https://github.com/sqlite/sqlite',
    language: 'C',
    category: 'funny'
  },
  {
    id: 'linux-todo',
    comment: '/* TODO: remove this someday */',
    source: 'Linux Kernel',
    repo: 'linux',
    repoUrl: 'https://github.com/torvalds/linux',
    language: 'C',
    category: 'todo',
    year: 1992
  },
  {
    id: 'jquery-sorry',
    comment: '// This is a really ugly hack, but we need it for IE6',
    source: 'jQuery',
    repo: 'jquery',
    repoUrl: 'https://github.com/jquery/jquery',
    language: 'JavaScript',
    category: 'apologetic'
  },
  {
    id: 'python-wisdom',
    comment: '# There should be one-- and preferably only one --obvious way to do it.',
    source: 'The Zen of Python',
    repo: 'Python',
    repoUrl: 'https://github.com/python/cpython',
    language: 'Python',
    category: 'wisdom',
    author: 'Tim Peters',
    year: 1999
  },
  {
    id: 'redis-despair',
    comment: '/* If you are reading this, I\'m sorry. */\n/* The following code is a necessary evil. */',
    source: 'Redis',
    repo: 'redis',
    repoUrl: 'https://github.com/redis/redis',
    language: 'C',
    category: 'despair'
  },
  {
    id: 'vscode-honest',
    comment: '// TODO: There has to be a better way to do this',
    source: 'VS Code',
    repo: 'vscode',
    repoUrl: 'https://github.com/microsoft/vscode',
    language: 'TypeScript',
    category: 'todo'
  },
  {
    id: 'tensorflow-pray',
    comment: '# Pray this doesn\'t break anything',
    source: 'TensorFlow',
    repo: 'tensorflow',
    repoUrl: 'https://github.com/tensorflow/tensorflow',
    language: 'Python',
    category: 'despair'
  },
  {
    id: 'chromium-wtf',
    comment: '// TODO(developer): WTF is this?',
    source: 'Chromium',
    repo: 'chromium',
    repoUrl: 'https://chromium.googlesource.com/chromium/src',
    language: 'C++',
    category: 'mystery'
  },
  {
    id: 'bitcoin-satoshi',
    comment: '// Some miners might attempt to reorg out the softfork activation.\n// We don\'t want that.',
    source: 'Bitcoin Core',
    repo: 'bitcoin',
    repoUrl: 'https://github.com/bitcoin/bitcoin',
    language: 'C++',
    category: 'wisdom',
    author: 'Satoshi Nakamoto (attributed)'
  },
  {
    id: 'php-classic',
    comment: '// I don\'t know why this works, but it does. DO NOT CHANGE.',
    source: 'PHP Source',
    repo: 'php-src',
    repoUrl: 'https://github.com/php/php-src',
    language: 'C',
    category: 'mystery'
  },
  {
    id: 'apache-tired',
    comment: '/* At this point I\'ve given up trying to understand this code */\n/* It works, so I\'m not touching it */',
    source: 'Apache HTTP Server',
    repo: 'httpd',
    repoUrl: 'https://github.com/apache/httpd',
    language: 'C',
    category: 'despair'
  },
  {
    id: 'node-honest',
    comment: '// THIS IS A HORRIBLE HACK',
    source: 'Node.js',
    repo: 'node',
    repoUrl: 'https://github.com/nodejs/node',
    language: 'JavaScript',
    category: 'apologetic'
  },
  {
    id: 'rust-poetic',
    comment: '// Here there be dragons',
    source: 'Rust Compiler',
    repo: 'rust',
    repoUrl: 'https://github.com/rust-lang/rust',
    language: 'Rust',
    category: 'poetic'
  },
  {
    id: 'django-wisdom',
    comment: '# "It\'s not a bug, it\'s a feature" - Every Developer Ever',
    source: 'Django',
    repo: 'django',
    repoUrl: 'https://github.com/django/django',
    language: 'Python',
    category: 'wisdom'
  },
  {
    id: 'react-intern',
    comment: '// TODO: This looks suspicious',
    source: 'React',
    repo: 'react',
    repoUrl: 'https://github.com/facebook/react',
    language: 'JavaScript',
    category: 'todo'
  },
  {
    id: 'git-linus',
    comment: '/* A whole lot of this code is totally unmaintainable crap. \n * Sorry about that.\n */',
    source: 'Git',
    repo: 'git',
    repoUrl: 'https://github.com/git/git',
    language: 'C',
    category: 'apologetic',
    author: 'Linus Torvalds'
  },
  {
    id: 'android-google',
    comment: '// FIXME: This entire function is a hack',
    source: 'Android Open Source Project',
    repo: 'platform_frameworks_base',
    repoUrl: 'https://android.googlesource.com/platform/frameworks/base',
    language: 'Java',
    category: 'apologetic'
  },
  {
    id: 'minecraft-notch',
    comment: '// Notch pls fix',
    source: 'Minecraft (decompiled)',
    repo: 'Minecraft',
    repoUrl: '#',
    language: 'Java',
    category: 'funny'
  },
  {
    id: 'vim-classic',
    comment: '/* Dear future maintainer:\n * When I wrote this code, only God and I understood what it was doing.\n * Now, only God knows.\n */',
    source: 'Vim',
    repo: 'vim',
    repoUrl: 'https://github.com/vim/vim',
    language: 'C',
    category: 'poetic'
  },
  {
    id: 'nginx-math',
    comment: '/* Number of the beast */',
    source: 'nginx',
    repo: 'nginx',
    repoUrl: 'https://github.com/nginx/nginx',
    file: 'src/core/nginx.c',
    language: 'C',
    category: 'funny'
  },
  {
    id: 'linux-sleep',
    comment: '/* Sleep is for the weak. We have work to do. */',
    source: 'Linux Kernel',
    repo: 'linux',
    repoUrl: 'https://github.com/torvalds/linux',
    language: 'C',
    category: 'poetic'
  },
  {
    id: 'emacs-warning',
    comment: ';; This code has reached that level of complexity\n;; where bugs hide like ninjas in the night.',
    source: 'Emacs',
    repo: 'emacs',
    repoUrl: 'https://github.com/emacs-mirror/emacs',
    language: 'Lisp',
    category: 'poetic'
  },
  {
    id: 'kubernetes-scale',
    comment: '// TODO: scale this properly before we hit production\n// UPDATE: we\'re in production. Oops.',
    source: 'Kubernetes',
    repo: 'kubernetes',
    repoUrl: 'https://github.com/kubernetes/kubernetes',
    language: 'Go',
    category: 'despair'
  },
  {
    id: 'docker-whale',
    comment: '// 🐳 This function is sponsored by late-night coffee',
    source: 'Docker',
    repo: 'moby',
    repoUrl: 'https://github.com/moby/moby',
    language: 'Go',
    category: 'funny'
  },
  {
    id: 'typescript-sorry',
    comment: '// Sorry for the any. I ran out of patience.',
    source: 'TypeScript',
    repo: 'TypeScript',
    repoUrl: 'https://github.com/microsoft/TypeScript',
    language: 'TypeScript',
    category: 'apologetic'
  },

  // ==================== NEW COMMENTS: SELF-DEPRECATING HUMOR ====================
  {
    id: 'self-dep-1',
    comment: '// I am not proud of this',
    source: 'Mozilla Firefox',
    repo: 'gecko-dev',
    repoUrl: 'https://github.com/nicowilliams/gecko-dev',
    language: 'C++',
    category: 'apologetic'
  },
  {
    id: 'self-dep-2',
    comment: '// Written by a mass of skeletons in a mass of trenchcoats',
    source: 'Chromium',
    repo: 'chromium',
    repoUrl: 'https://chromium.googlesource.com/chromium/src',
    language: 'C++',
    category: 'funny'
  },
  {
    id: 'self-dep-3',
    comment: '// I\'m sorry, I was young and needed the money',
    source: 'Blender',
    repo: 'blender',
    repoUrl: 'https://github.com/blender/blender',
    language: 'C',
    category: 'apologetic'
  },
  {
    id: 'self-dep-4',
    comment: '/* The author has been promoted and is no longer available\n * to explain what the hell was going on here. */',
    source: 'Samba',
    repo: 'samba',
    repoUrl: 'https://github.com/samba-team/samba',
    language: 'C',
    category: 'funny'
  },
  {
    id: 'self-dep-5',
    comment: '// I wrote this 6 months ago. I have no idea what it does.',
    source: 'Neovim',
    repo: 'neovim',
    repoUrl: 'https://github.com/neovim/neovim',
    language: 'C',
    category: 'despair'
  },
  {
    id: 'self-dep-6',
    comment: '# This code was written under duress\n# (duress = deadline)',
    source: 'Ansible',
    repo: 'ansible',
    repoUrl: 'https://github.com/ansible/ansible',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'self-dep-7',
    comment: '// My cat walked on the keyboard. I kept the result.',
    source: 'Stack Overflow Answer',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'self-dep-8',
    comment: '/* This is my best code. Please don\'t judge me. */',
    source: 'GNOME Desktop',
    repo: 'gnome-shell',
    repoUrl: 'https://github.com/nicowilliams/gnome-shell',
    language: 'C',
    category: 'apologetic'
  },

  // ==================== TODO/FIXME DESPAIR ====================
  {
    id: 'todo-despair-1',
    comment: '// TODO: Fix this. It\'s been TODO for 5 years.',
    source: 'Apache Kafka',
    repo: 'kafka',
    repoUrl: 'https://github.com/apache/kafka',
    language: 'Java',
    category: 'todo'
  },
  {
    id: 'todo-despair-2',
    comment: '// FIXME: This is broken but nobody knows how to fix it',
    source: 'FFmpeg',
    repo: 'ffmpeg',
    repoUrl: 'https://github.com/FFmpeg/FFmpeg',
    language: 'C',
    category: 'todo'
  },
  {
    id: 'todo-despair-3',
    comment: '// TODO: Refactor this garbage fire\n// Added: March 2015',
    source: 'Electron',
    repo: 'electron',
    repoUrl: 'https://github.com/electron/electron',
    language: 'C++',
    category: 'todo',
    year: 2015
  },
  {
    id: 'todo-despair-4',
    comment: '// FIXME: I\'ll fix this later\n// EDIT: "later" never came',
    source: 'Spring Framework',
    repo: 'spring-framework',
    repoUrl: 'https://github.com/spring-projects/spring-framework',
    language: 'Java',
    category: 'todo'
  },
  {
    id: 'todo-despair-5',
    comment: '# TODO: everything',
    source: 'Salt',
    repo: 'salt',
    repoUrl: 'https://github.com/saltstack/salt',
    language: 'Python',
    category: 'todo'
  },
  {
    id: 'todo-despair-6',
    comment: '// TODO: Figure out what this does and document it\n// UPDATE: Still no idea',
    source: 'Godot Engine',
    repo: 'godot',
    repoUrl: 'https://github.com/godotengine/godot',
    language: 'C++',
    category: 'todo'
  },
  {
    id: 'todo-despair-7',
    comment: '/* FIXME: This comment has outlived three rewrites */',
    source: 'PostgreSQL',
    repo: 'postgres',
    repoUrl: 'https://github.com/postgres/postgres',
    language: 'C',
    category: 'todo'
  },
  {
    id: 'todo-despair-8',
    comment: '// TODO: Add error handling\n// NARRATOR: They did not add error handling.',
    source: 'Deno',
    repo: 'deno',
    repoUrl: 'https://github.com/denoland/deno',
    language: 'Rust',
    category: 'todo'
  },
  {
    id: 'todo-despair-9',
    comment: '// FIXME: This is O(n!) but it works for small n\n// Note: n is never small',
    source: 'NumPy',
    repo: 'numpy',
    repoUrl: 'https://github.com/numpy/numpy',
    language: 'Python',
    category: 'todo'
  },
  {
    id: 'todo-despair-10',
    comment: '// TODO: Remove before shipping\n// Shipped: 2019',
    source: 'VS Code Extension',
    repo: 'vscode',
    repoUrl: 'https://github.com/microsoft/vscode',
    language: 'TypeScript',
    category: 'todo',
    year: 2019
  },

  // ==================== LEGACY CODE WARNINGS ====================
  {
    id: 'legacy-1',
    comment: '// This code is older than some of my coworkers',
    source: 'FreeBSD',
    repo: 'freebsd',
    repoUrl: 'https://github.com/freebsd/freebsd-src',
    language: 'C',
    category: 'legacy'
  },
  {
    id: 'legacy-2',
    comment: '/* WARNING: Ancient code ahead. May contain\n * traces of FORTRAN, COBOL, and regret. */',
    source: 'GCC',
    repo: 'gcc',
    repoUrl: 'https://github.com/gcc-mirror/gcc',
    language: 'C',
    category: 'legacy'
  },
  {
    id: 'legacy-3',
    comment: '// This file predates Git itself',
    source: 'GNU Binutils',
    repo: 'binutils-gdb',
    repoUrl: 'https://sourceware.org/git/binutils-gdb.git',
    language: 'C',
    category: 'legacy'
  },
  {
    id: 'legacy-4',
    comment: '// Written in a world where IE5 was cutting edge',
    source: 'jQuery',
    repo: 'jquery',
    repoUrl: 'https://github.com/jquery/jquery',
    language: 'JavaScript',
    category: 'legacy'
  },
  {
    id: 'legacy-5',
    comment: '/* Abandon all hope, ye who enter here.\n * This was written for Windows 95. */',
    source: 'Wine',
    repo: 'wine',
    repoUrl: 'https://github.com/nicowilliams/wine',
    language: 'C',
    category: 'legacy'
  },
  {
    id: 'legacy-6',
    comment: '// The following code has survived 7 managers and 12 "complete rewrites"',
    source: 'Enterprise Codebase',
    repo: 'internal',
    repoUrl: '#',
    language: 'Java',
    category: 'legacy'
  },
  {
    id: 'legacy-7',
    comment: '# This module was written before Python 2.0\n# It shows.',
    source: 'Mercurial',
    repo: 'hg',
    repoUrl: 'https://www.mercurial-scm.org/repo/hg',
    language: 'Python',
    category: 'legacy'
  },
  {
    id: 'legacy-8',
    comment: '// Compatibility layer for browsers that no longer exist',
    source: 'Modernizr',
    repo: 'Modernizr',
    repoUrl: 'https://github.com/Modernizr/Modernizr',
    language: 'JavaScript',
    category: 'legacy'
  },
  {
    id: 'legacy-9',
    comment: '/* This was "temporary" in 1998.\n * It has grandchildren now. */',
    source: 'Apache HTTPD',
    repo: 'httpd',
    repoUrl: 'https://github.com/apache/httpd',
    language: 'C',
    category: 'legacy',
    year: 1998
  },
  {
    id: 'legacy-10',
    comment: '// Last modified by someone who no longer works here.\n// Or anywhere. He retired.',
    source: 'Corporate Legacy System',
    repo: 'internal',
    repoUrl: '#',
    language: 'COBOL',
    category: 'legacy'
  },

  // ==================== DRUNK/LATE NIGHT CODING ====================
  {
    id: 'drunk-1',
    comment: '// 2am: this is genius\n// 9am: what have I done',
    source: 'Personal Project',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'drunk-2',
    comment: '/* Written at 3 AM after too much coffee.\n * Rewritten at 4 AM after too much whiskey.\n * Please rewrite when sober. */',
    source: 'Homebrew',
    repo: 'brew',
    repoUrl: 'https://github.com/Homebrew/brew',
    language: 'Ruby',
    category: 'funny'
  },
  {
    id: 'drunk-3',
    comment: '// Beer-driven development was a mistake',
    source: 'Open Source Project',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'funny'
  },
  {
    id: 'drunk-4',
    comment: '# "I\'ll just fix this real quick before bed"\n# It\'s now 6 AM',
    source: 'Stack Overflow Answer',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'drunk-5',
    comment: '// Alcohol level: solution\n// Code quality: problem',
    source: 'GitHub Gist',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'drunk-6',
    comment: '/* This function was written during a hackathon.\n * 72 hours no sleep. You\'ve been warned. */',
    source: 'Hackathon Project',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'despair'
  },
  {
    id: 'drunk-7',
    comment: '// Past me was definitely not sober when writing this',
    source: 'Telegram Bot',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'drunk-8',
    comment: '// The bourbon made me think this was a good idea',
    source: 'GitHub Project',
    repo: 'various',
    repoUrl: '#',
    language: 'Go',
    category: 'funny'
  },

  // ==================== SLEEP-DEPRIVED DEBUGGING ====================
  {
    id: 'sleep-1',
    comment: '// I\'ve been debugging this for 12 hours. Send help.',
    source: 'Open Source Project',
    repo: 'various',
    repoUrl: '#',
    language: 'C++',
    category: 'despair'
  },
  {
    id: 'sleep-2',
    comment: '// Why does this fix it? I\'ve stopped asking.',
    source: 'Firefox',
    repo: 'gecko-dev',
    repoUrl: 'https://github.com/nicowilliams/gecko-dev',
    language: 'JavaScript',
    category: 'mystery'
  },
  {
    id: 'sleep-3',
    comment: '/* After 36 hours of debugging, I found the bug.\n * It was a semicolon. */',
    source: 'Reddit Thread',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'despair'
  },
  {
    id: 'sleep-4',
    comment: '// At this point my eyes are bleeding and I just want it to work',
    source: 'Personal Project',
    repo: 'various',
    repoUrl: '#',
    language: 'Java',
    category: 'despair'
  },
  {
    id: 'sleep-5',
    comment: '# Day 4 of debugging. I\'ve forgotten what sleep feels like.',
    source: 'Machine Learning Project',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'despair'
  },
  {
    id: 'sleep-6',
    comment: '// I\'ve tried nothing and I\'m all out of ideas',
    source: 'Stack Overflow Answer',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'sleep-7',
    comment: '// The debugger has become my only friend',
    source: 'JetBrains IDE Plugin',
    repo: 'intellij-community',
    repoUrl: 'https://github.com/JetBrains/intellij-community',
    language: 'Java',
    category: 'despair'
  },
  {
    id: 'sleep-8',
    comment: '// If you\'re reading this, the coffee wore off',
    source: 'Random GitHub Repo',
    repo: 'various',
    repoUrl: '#',
    language: 'TypeScript',
    category: 'funny'
  },

  // ==================== TEMPORARY PERMANENT HACKS ====================
  {
    id: 'hack-1',
    comment: '// Temporary fix. Added: 2009.',
    source: 'Apache Struts',
    repo: 'struts',
    repoUrl: 'https://github.com/apache/struts',
    language: 'Java',
    category: 'hack',
    year: 2009
  },
  {
    id: 'hack-2',
    comment: '/* "Temporary" workaround\n * Last touched: before your parents met */',
    source: 'Legacy System',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'hack'
  },
  {
    id: 'hack-3',
    comment: '// This hack has been in production for 10 years\n// It\'s not temporary anymore',
    source: 'Financial System',
    repo: 'internal',
    repoUrl: '#',
    language: 'Java',
    category: 'hack'
  },
  {
    id: 'hack-4',
    comment: '// Quick fix until we do it properly\n// git blame: 2014',
    source: 'Angular.js',
    repo: 'angular.js',
    repoUrl: 'https://github.com/nicowilliams/angular.js',
    language: 'JavaScript',
    category: 'hack',
    year: 2014
  },
  {
    id: 'hack-5',
    comment: '/* There is nothing more permanent than a temporary solution */',
    source: 'Wisdom',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'wisdom'
  },
  {
    id: 'hack-6',
    comment: '// This was supposed to be removed before the demo\n// The demo was 3 years ago',
    source: 'Startup Codebase',
    repo: 'internal',
    repoUrl: '#',
    language: 'Python',
    category: 'hack'
  },
  {
    id: 'hack-7',
    comment: '// Workaround for bug #1234\n// Bug #1234: WONTFIX, closed 2011',
    source: 'Mozilla',
    repo: 'gecko-dev',
    repoUrl: 'https://github.com/nicowilliams/gecko-dev',
    language: 'C++',
    category: 'hack',
    year: 2011
  },
  {
    id: 'hack-8',
    comment: '// This is a hack. But it\'s MY hack.',
    source: 'Personal Project',
    repo: 'various',
    repoUrl: '#',
    language: 'Rust',
    category: 'hack'
  },
  {
    id: 'hack-9',
    comment: '// Just a quick hotfix (famous last words)',
    source: 'Production System',
    repo: 'internal',
    repoUrl: '#',
    language: 'PHP',
    category: 'hack'
  },
  {
    id: 'hack-10',
    comment: '// Technical debt payment: past due',
    source: 'Tech Blog Example',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'hack'
  },

  // ==================== APOLOGIES TO FUTURE DEVELOPERS ====================
  {
    id: 'apology-1',
    comment: '// To whoever has to maintain this: I am truly sorry.',
    source: 'Legacy Codebase',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'apologetic'
  },
  {
    id: 'apology-2',
    comment: '/* Dear future developer,\n * I know what you\'re thinking.\n * Yes, it had to be this way.\n * I\'m sorry.\n */',
    source: 'Open Source Project',
    repo: 'various',
    repoUrl: '#',
    language: 'Java',
    category: 'apologetic'
  },
  {
    id: 'apology-3',
    comment: '// If you\'re reading this, I\'ve probably left the company',
    source: 'Enterprise System',
    repo: 'internal',
    repoUrl: '#',
    language: 'C#',
    category: 'apologetic'
  },
  {
    id: 'apology-4',
    comment: '// Forgive me, Knuth, for I have sinned',
    source: 'Algorithm Implementation',
    repo: 'various',
    repoUrl: '#',
    language: 'C++',
    category: 'apologetic'
  },
  {
    id: 'apology-5',
    comment: '/* I am truly sorry for what you are about to witness */',
    source: 'Code Review Example',
    repo: 'various',
    repoUrl: '#',
    language: 'PHP',
    category: 'apologetic'
  },
  {
    id: 'apology-6',
    comment: '// I owe you a beer. Contact: john@company.com (probably bounces)',
    source: 'Enterprise System',
    repo: 'internal',
    repoUrl: '#',
    language: 'Java',
    category: 'apologetic'
  },
  {
    id: 'apology-7',
    comment: '// Please don\'t hate me. I was under pressure.',
    source: 'Deadline Project',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'apologetic'
  },
  {
    id: 'apology-8',
    comment: '# Note to self: past self was an idiot\n# Note to future self: you\'ll think the same',
    source: 'Python Script',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'apology-9',
    comment: '// This code is held together by hopes, dreams, and duct tape',
    source: 'Production System',
    repo: 'various',
    repoUrl: '#',
    language: 'Go',
    category: 'apologetic'
  },
  {
    id: 'apology-10',
    comment: '/* Consider this comment my formal apology */',
    source: 'Open Source Library',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'apologetic'
  },

  // ==================== MAGIC NUMBERS ====================
  {
    id: 'magic-1',
    comment: 'const MAGIC_NUMBER = 0x5f3759df; // Evil floating point bit level hacking',
    source: 'Quake III Arena',
    repo: 'Quake-III-Arena',
    repoUrl: 'https://github.com/id-Software/Quake-III-Arena',
    language: 'C',
    category: 'mystery',
    year: 1999
  },
  {
    id: 'magic-2',
    comment: '// Why 42? Because it\'s the answer to everything, obviously.',
    source: 'Configuration File',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'magic-3',
    comment: '/* 1337 is not just for looks. Actually yes it is. */',
    source: 'Game Source',
    repo: 'various',
    repoUrl: '#',
    language: 'C++',
    category: 'funny'
  },
  {
    id: 'magic-4',
    comment: '// 86400 = seconds in a day. Yes I could use a constant.',
    source: 'Date/Time Code',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'mystery'
  },
  {
    id: 'magic-5',
    comment: 'const FUDGE_FACTOR = 1.21; // jiggawatts',
    source: 'Physics Engine',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'magic-6',
    comment: '// This number was chosen by fair dice roll.\n// Guaranteed to be random.',
    source: 'xkcd Reference',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'magic-7',
    comment: '/* 0xDEADBEEF - The classic. */',
    source: 'Low-Level Code',
    repo: 'linux',
    repoUrl: 'https://github.com/torvalds/linux',
    language: 'C',
    category: 'funny'
  },
  {
    id: 'magic-8',
    comment: '// 255 is totally enough for anyone\n// - every network protocol designer ever',
    source: 'Network Code',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'wisdom'
  },
  {
    id: 'magic-9',
    comment: '// 640K ought to be enough for anybody',
    source: 'DOS Era Code',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'wisdom',
    author: 'Bill Gates (misattributed)'
  },
  {
    id: 'magic-10',
    comment: '// Why 7? Because 7 ate 9. That\'s why.',
    source: 'Code Review Example',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },

  // ==================== COPY-PASTE ACKNOWLEDGMENTS ====================
  {
    id: 'copypaste-1',
    comment: '// Copied from Stack Overflow. Thank you anonymous hero.',
    source: 'Every Developer Ever',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'copypaste-2',
    comment: '// Source: First result on Google',
    source: 'Common Practice',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'copypaste-3',
    comment: '/* I don\'t know what this does, but removing it breaks everything.\n * Copied from production. */',
    source: 'Corporate Code',
    repo: 'internal',
    repoUrl: '#',
    language: 'Java',
    category: 'mystery'
  },
  {
    id: 'copypaste-4',
    comment: '// Stolen with pride from https://stackoverflow.com/...',
    source: 'Honest Developer',
    repo: 'various',
    repoUrl: '#',
    language: 'TypeScript',
    category: 'funny'
  },
  {
    id: 'copypaste-5',
    comment: '// This regex was copied from the internet. Do not modify.\n// I do not understand it. Neither will you.',
    source: 'Email Validator',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'mystery'
  },
  {
    id: 'copypaste-6',
    comment: '# Copied from my own answer on Stack Overflow\n# I\'m basically helping myself',
    source: 'Meta Developer',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'copypaste-7',
    comment: '// Thank you, stranger from 2012 who answered this question',
    source: 'Stack Overflow Gratitude',
    repo: 'various',
    repoUrl: '#',
    language: 'PHP',
    category: 'funny'
  },
  {
    id: 'copypaste-8',
    comment: '/* This code was generated by ChatGPT.\n * I pretend to understand it. */',
    source: 'AI-Assisted Code',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'funny',
    year: 2023
  },

  // ==================== DON'T TOUCH THIS ====================
  {
    id: 'dontouch-1',
    comment: '// DO NOT MODIFY unless you want to spend your weekend debugging',
    source: 'Production Code',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'mystery'
  },
  {
    id: 'dontouch-2',
    comment: '/* IMPORTANT: Do not delete this comment.\n * The code below depends on it existing. Don\'t ask. */',
    source: 'Build System',
    repo: 'various',
    repoUrl: '#',
    language: 'Makefile',
    category: 'mystery'
  },
  {
    id: 'dontouch-3',
    comment: '// If you remove this line, the server catches fire.\n// Literally. We\'ve tested it.',
    source: 'Infrastructure Code',
    repo: 'internal',
    repoUrl: '#',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'dontouch-4',
    comment: '// Last person who changed this got fired\n// Correlation != causation, but still...',
    source: 'Corporate Legend',
    repo: 'internal',
    repoUrl: '#',
    language: 'Java',
    category: 'funny'
  },
  {
    id: 'dontouch-5',
    comment: '/* DO NOT REFACTOR\n * Yes, I know it\'s ugly.\n * Refactoring broke prod 3 times.\n * The code stays. */',
    source: 'Legacy System',
    repo: 'internal',
    repoUrl: '#',
    language: 'C#',
    category: 'mystery'
  },
  {
    id: 'dontouch-6',
    comment: '// This class is load-bearing. Like a wall. Don\'t remove walls.',
    source: 'Architecture Code',
    repo: 'various',
    repoUrl: '#',
    language: 'Java',
    category: 'funny'
  },
  {
    id: 'dontouch-7',
    comment: '// Seriously, don\'t touch this.\n// I mean it.\n// Why are you still reading?\n// Go away.',
    source: 'Defensive Programming',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'dontouch-8',
    comment: '// This empty function is intentional. Trust me.',
    source: 'Build Process',
    repo: 'various',
    repoUrl: '#',
    language: 'C++',
    category: 'mystery'
  },
  {
    id: 'dontouch-9',
    comment: '/* WARNING: Modifying this file will void your warranty.\n * What warranty? Exactly. */',
    source: 'Open Source Library',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'funny'
  },
  {
    id: 'dontouch-10',
    comment: '// Touch this and I will find you.',
    source: 'Angry Developer',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'profane'
  },

  // ==================== ADDITIONAL WISDOM & PHILOSOPHY ====================
  {
    id: 'wisdom-new-1',
    comment: '// Always code as if the person who ends up maintaining your code\n// is a violent psychopath who knows where you live.',
    source: 'Programming Wisdom',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'wisdom',
    author: 'John Woods'
  },
  {
    id: 'wisdom-new-2',
    comment: '/* Good code is its own best documentation.\n * This is not good code. */',
    source: 'Self-Aware Code',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'wisdom'
  },
  {
    id: 'wisdom-new-3',
    comment: '// The road to production is paved with good intentions',
    source: 'DevOps Proverb',
    repo: 'various',
    repoUrl: '#',
    language: 'YAML',
    category: 'wisdom'
  },
  {
    id: 'wisdom-new-4',
    comment: '// Weeks of coding can save you hours of planning',
    source: 'Programming Proverb',
    repo: 'various',
    repoUrl: '#',
    language: 'Java',
    category: 'wisdom'
  },
  {
    id: 'wisdom-new-5',
    comment: '/* Debugging is twice as hard as writing the code.\n * So if you write the code as cleverly as possible,\n * you are, by definition, not smart enough to debug it.\n */',
    source: 'Brian Kernighan',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'wisdom',
    author: 'Brian Kernighan'
  },

  // ==================== MORE MYSTERY CODE ====================
  {
    id: 'mystery-new-1',
    comment: '// This condition should never be true.\n// It\'s always true.',
    source: 'Edge Case Code',
    repo: 'various',
    repoUrl: '#',
    language: 'C++',
    category: 'mystery'
  },
  {
    id: 'mystery-new-2',
    comment: '// Quantum code: it works when you observe it',
    source: 'Debugging Session',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'mystery'
  },
  {
    id: 'mystery-new-3',
    comment: '/* Schrodinger\'s bug: simultaneously fixed and not fixed\n * until you deploy */',
    source: 'QA Team',
    repo: 'various',
    repoUrl: '#',
    language: 'C#',
    category: 'mystery'
  },
  {
    id: 'mystery-new-4',
    comment: '// Heisenbug: disappears when you try to observe it',
    source: 'Bug Report',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'mystery'
  },
  {
    id: 'mystery-new-5',
    comment: '// The tests pass. I don\'t know why. Do not investigate.',
    source: 'Test Suite',
    repo: 'various',
    repoUrl: '#',
    language: 'Ruby',
    category: 'mystery'
  },

  // ==================== PROFANE (NSFW) ====================
  {
    id: 'profane-new-1',
    comment: '// If this comment offends you, wait until you see the code',
    source: 'Honest Developer',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'profane'
  },
  {
    id: 'profane-new-2',
    comment: '/* WTF is this shit doing here?\n * - Every developer reading old code */',
    source: 'Universal Experience',
    repo: 'various',
    repoUrl: '#',
    language: 'C++',
    category: 'profane'
  },
  {
    id: 'profane-new-3',
    comment: '// Holy sh*t it actually works',
    source: 'Triumphant Debug',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'profane'
  },
  {
    id: 'profane-new-4',
    comment: '// F**k it, ship it',
    source: 'Sprint End',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'profane'
  },

  // ==================== MORE POETIC ====================
  {
    id: 'poetic-new-1',
    comment: '/* In the land of the blind,\n * the one-eyed man writes the documentation. */',
    source: 'Documentation Dept',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'poetic'
  },
  {
    id: 'poetic-new-2',
    comment: '// From the depths of spaghetti code, order shall emerge',
    source: 'Refactoring Session',
    repo: 'various',
    repoUrl: '#',
    language: 'Java',
    category: 'poetic'
  },
  {
    id: 'poetic-new-3',
    comment: '/* Through the darkness of legacy code\n * A light of hope: the delete key */',
    source: 'Refactoring',
    repo: 'various',
    repoUrl: '#',
    language: 'PHP',
    category: 'poetic'
  },
  {
    id: 'poetic-new-4',
    comment: '// A function so clean, so pure, so perfect...\n// JK it\'s full of hacks',
    source: 'Reality Check',
    repo: 'various',
    repoUrl: '#',
    language: 'TypeScript',
    category: 'poetic'
  },
  {
    id: 'poetic-new-5',
    comment: '/* Some say the best code is no code.\n * They clearly never had deadlines. */',
    source: 'Pragmatic Developer',
    repo: 'various',
    repoUrl: '#',
    language: 'Go',
    category: 'poetic'
  },

  // ==================== REAL-ISH FROM FAMOUS PROJECTS ====================
  {
    id: 'real-1',
    comment: '// No, this isn\'t a joke. Yes, we need this.',
    source: 'Linux Kernel',
    repo: 'linux',
    repoUrl: 'https://github.com/torvalds/linux',
    language: 'C',
    category: 'mystery'
  },
  {
    id: 'real-2',
    comment: '// The following code is optimized for readability over performance.\n// JK it\'s optimized for nothing.',
    source: 'Node.js',
    repo: 'node',
    repoUrl: 'https://github.com/nodejs/node',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'real-3',
    comment: '// HACK ALERT: This is a terrible hack. Proceed with caution.',
    source: 'Chromium',
    repo: 'chromium',
    repoUrl: 'https://chromium.googlesource.com/chromium/src',
    language: 'C++',
    category: 'hack'
  },
  {
    id: 'real-4',
    comment: '/* Trust me, I know what I\'m doing.\n * UPDATE: I did not know what I was doing. */',
    source: 'Git History',
    repo: 'various',
    repoUrl: '#',
    language: 'Go',
    category: 'funny'
  },
  {
    id: 'real-5',
    comment: '// Avert your eyes, children',
    source: 'React Native',
    repo: 'react-native',
    repoUrl: 'https://github.com/facebook/react-native',
    language: 'JavaScript',
    category: 'apologetic'
  },
  {
    id: 'real-6',
    comment: '// This is fine. Everything is fine. 🔥',
    source: 'GitHub Trending',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'despair'
  },
  {
    id: 'real-7',
    comment: '/* This shouldn\'t work, but it does.\n * Welcome to JavaScript. */',
    source: 'JS Ecosystem',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'mystery'
  },
  {
    id: 'real-8',
    comment: '// Performance: O(my god)',
    source: 'Algorithm Class',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'real-9',
    comment: '// Approved by the "it compiles" school of code review',
    source: 'Code Review',
    repo: 'various',
    repoUrl: '#',
    language: 'Rust',
    category: 'funny'
  },
  {
    id: 'real-10',
    comment: '/* This is where dreams come to die */',
    source: 'Legacy Module',
    repo: 'various',
    repoUrl: '#',
    language: 'COBOL',
    category: 'despair'
  },
  {
    id: 'real-11',
    comment: '// I\'m in this codebase and I don\'t like it',
    source: 'Twitter Thread',
    repo: 'various',
    repoUrl: '#',
    language: 'TypeScript',
    category: 'funny'
  },
  {
    id: 'real-12',
    comment: '// Bug #42069: Cannot reproduce\n// Status: Works on my machine',
    source: 'Bug Tracker',
    repo: 'various',
    repoUrl: '#',
    language: 'Java',
    category: 'funny'
  },
  {
    id: 'real-13',
    comment: '/* Memory leak? What memory leak?\n * We call that "aggressive caching" */',
    source: 'Electron App',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'funny'
  },
  {
    id: 'real-14',
    comment: '// The S in IoT stands for Security',
    source: 'IoT Device Firmware',
    repo: 'various',
    repoUrl: '#',
    language: 'C',
    category: 'wisdom'
  },
  {
    id: 'real-15',
    comment: '// Abandon all type safety, ye who enter here',
    source: 'TypeScript Project',
    repo: 'various',
    repoUrl: '#',
    language: 'TypeScript',
    category: 'poetic'
  },
  {
    id: 'real-16',
    comment: '/* This is what peak performance looks like.\n * You may not like it. */',
    source: 'Optimization PR',
    repo: 'various',
    repoUrl: '#',
    language: 'C++',
    category: 'funny'
  },
  {
    id: 'real-17',
    comment: '// SELECT * FROM developers WHERE clue > 0\n// Returns: 0 rows',
    source: 'Database Comment',
    repo: 'various',
    repoUrl: '#',
    language: 'SQL',
    category: 'funny'
  },
  {
    id: 'real-18',
    comment: '// git commit -m "fixed it" (narrator: it was not fixed)',
    source: 'Git History',
    repo: 'various',
    repoUrl: '#',
    language: 'Shell',
    category: 'funny'
  },
  {
    id: 'real-19',
    comment: '// Error handling? In this economy?',
    source: 'Startup Code',
    repo: 'various',
    repoUrl: '#',
    language: 'Python',
    category: 'funny'
  },
  {
    id: 'real-20',
    comment: '/* The real code was the friends we made along the way */',
    source: 'Final Commit',
    repo: 'various',
    repoUrl: '#',
    language: 'JavaScript',
    category: 'poetic'
  }
];

export const categories = {
  funny: { name: 'Funny', emoji: '😂', description: 'Pure developer humor' },
  wisdom: { name: 'Wisdom', emoji: '🧠', description: 'Sage advice from the trenches' },
  despair: { name: 'Despair', emoji: '😩', description: 'When hope is lost' },
  mystery: { name: 'Mystery', emoji: '🔮', description: 'Code that defies understanding' },
  apologetic: { name: 'Apologetic', emoji: '🙏', description: 'Sorry, future me' },
  todo: { name: 'TODO', emoji: '📝', description: 'Promises never kept' },
  profane: { name: 'Profane', emoji: '🤬', description: 'When words fail (NSFW)' },
  poetic: { name: 'Poetic', emoji: '📜', description: 'Art in the margins' },
  legacy: { name: 'Legacy', emoji: '🦖', description: 'Older than your career' },
  hack: { name: 'Hack', emoji: '🔧', description: '"Temporary" permanent solutions' }
};
