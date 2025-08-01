---
title: Test Tailwind 4
permalink: /test-tailwind/
layout: default
---

# Test Tailwind CSS 4

<div class="space-y-4 p-8">
  <!-- Test shadow-xs (nouveau) -->
  <div class="bg-violet-800 text-white p-4 rounded shadow-xs">
    ✓ shadow-xs (remplace shadow-sm dans v4)
  </div>

  <!-- Test size utility (nouveau) -->
  <div class="size-32 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
    size-32
  </div>

  <!-- Test variables CSS (v4) -->
  <div style="background: var(--color-green-500); color: var(--color-white);" class="p-4 rounded">
    Variables CSS natives Tailwind 4
  </div>

  <!-- Test d'une classe qui n'existe plus -->
  <div class="bg-yellow-500 text-black p-4 rounded shadow-sm">
    Si cette div N'A PAS d'ombre, tu es sur v4 (shadow-sm supprimée)
  </div>
</div>
