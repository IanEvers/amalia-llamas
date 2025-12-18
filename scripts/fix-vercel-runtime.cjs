#!/usr/bin/env node
/**
 * Ensure Vercel build output uses Node.js 20 runtime.
 * Astro's Vercel adapter version in this project defaults to nodejs18.x,
 * which Vercel now rejects. This postbuild patch flips it to nodejs20.x.
 */
const fs = require('fs');
const path = require('path');

const configPath = path.join(
  process.cwd(),
  '.vercel',
  'output',
  'functions',
  'render.func',
  '.vc-config.json'
);

try {
  const raw = fs.readFileSync(configPath, 'utf8');
  const data = JSON.parse(raw);
  if (data.runtime !== 'nodejs20.x') {
    data.runtime = 'nodejs20.x';
    fs.writeFileSync(configPath, JSON.stringify(data, null, 2));
    console.log('[fix-vercel-runtime] runtime set to nodejs20.x');
  } else {
    console.log('[fix-vercel-runtime] runtime already nodejs20.x');
  }
} catch (err) {
  console.warn(
    '[fix-vercel-runtime] skipped; config not found or unreadable:',
    err.message
  );
}
