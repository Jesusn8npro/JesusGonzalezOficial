Commit: Fix: Eliminación de marcas de conflicto en LinkEnBio.tsx para corregir error de deploy 
##########################################
### Download Github Archive Started...
### Tue, 07 Apr 2026 20:56:38 GMT
##########################################


╔═════════════════════ Nixpacks v1.34.1 ═════════════════════╗
║ setup      │ nodejs_22, npm-9_x                            ║
║────────────────────────────────────────────────────────────║
║ caddy      │ pkgs: caddy                                   ║
║            │ cmds: caddy fmt --overwrite /assets/Caddyfile ║
║────────────────────────────────────────────────────────────║
║ install    │ npm install                                   ║
║────────────────────────────────────────────────────────────║
║ build      │ npm run build                                 ║
║────────────────────────────────────────────────────────────║
║ start      │ npm run preview                               ║
╚════════════════════════════════════════════════════════════╝


Saved output to:
  /etc/easypanel/projects/jesusgonzalez_oficial_web/app_jesusgonzalez/code/
#0 building with "default" instance using docker driver

#1 [internal] load build definition from Dockerfile
#1 transferring dockerfile: 1.43kB done
#1 DONE 0.0s

#2 [internal] load metadata for ghcr.io/railwayapp/nixpacks:ubuntu-1741046653
#2 DONE 0.3s

#3 [internal] load .dockerignore
#3 transferring context: 2B done
#3 DONE 0.0s

#4 [stage-0  1/15] FROM ghcr.io/railwayapp/nixpacks:ubuntu-1741046653@sha256:ed406b77fb751927991b8655e76c33a4521c4957c2afeab293be7c63c2a373d2
#4 DONE 0.0s

#5 [internal] load build context
#5 transferring context: 3.23MB 0.0s done
#5 DONE 0.0s

#6 [stage-0  4/15] RUN nix-env -if .nixpacks/nixpkgs-ba913eda2df8eb72147259189d55932012df6301.nix && nix-collect-garbage -d
#6 CACHED

#7 [stage-0  6/15] RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d
#7 CACHED

#8 [stage-0  2/15] WORKDIR /app/
#8 CACHED

#9 [stage-0  5/15] COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
#9 CACHED

#10 [stage-0  3/15] COPY .nixpacks/nixpkgs-ba913eda2df8eb72147259189d55932012df6301.nix .nixpacks/nixpkgs-ba913eda2df8eb72147259189d55932012df6301.nix
#10 CACHED

#11 [stage-0  7/15] COPY .nixpacks/assets /assets/
#11 CACHED

#12 [stage-0  8/15] COPY . /app/.
#12 DONE 0.1s

#13 [stage-0  9/15] RUN  caddy fmt --overwrite /assets/Caddyfile
#13 DONE 0.1s

#14 [stage-0 10/15] COPY . /app/.
#14 DONE 0.1s

#15 [stage-0 11/15] RUN --mount=type=cache,id=KMBNH8PNad4-/root/npm,target=/root/.npm npm install
#15 0.703 npm warn EBADENGINE Unsupported engine {
#15 0.703 npm warn EBADENGINE   package: '@vitejs/plugin-react@5.1.1',
#15 0.703 npm warn EBADENGINE   required: { node: '^20.19.0 || >=22.12.0' },
#15 0.703 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
#15 0.703 npm warn EBADENGINE }
#15 0.860 npm warn EBADENGINE Unsupported engine {
#15 0.860 npm warn EBADENGINE   package: 'vite@7.2.4',
#15 0.860 npm warn EBADENGINE   required: { node: '^20.19.0 || >=22.12.0' },
#15 0.860 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
#15 0.860 npm warn EBADENGINE }
#15 4.711 
#15 4.711 added 187 packages, and audited 188 packages in 5s
#15 4.712 
#15 4.712 48 packages are looking for funding
#15 4.712   run `npm fund` for details
#15 4.770 
#15 4.770 9 vulnerabilities (3 moderate, 6 high)
#15 4.770 
#15 4.770 To address all issues, run:
#15 4.770   npm audit fix
#15 4.770 
#15 4.770 Run `npm audit` for details.
#15 DONE 5.0s

#16 [stage-0 12/15] COPY . /app/.
#16 DONE 0.1s

#17 [stage-0 13/15] RUN --mount=type=cache,id=KMBNH8PNad4-node_modules/cache,target=/app/node_modules/.cache npm run build
#17 0.490 
#17 0.490 > temp-project@0.0.0 build
#17 0.490 > tsc -b && vite build
#17 0.490 
#17 5.498 You are using Node.js 22.11.0. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.
#17 5.762 vite v7.2.4 building client environment for production...
#17 5.853 transforming...
#17 6.360 ✓ 40 modules transformed.
#17 6.363 ✗ Build failed in 567ms
#17 6.364 error during build:
#17 6.364 [vite:css] [postcss] /app/src/paginas/link-in-bio/LinkEnBio.css:228:1: Unknown word =======
#17 6.364 file: /app/src/paginas/link-in-bio/LinkEnBio.css:228:0
#17 6.364     at Input.error (/app/node_modules/postcss/lib/input.js:135:16)
#17 6.364     at Parser.unknownWord (/app/node_modules/postcss/lib/parser.js:595:22)
#17 6.364     at Parser.other (/app/node_modules/postcss/lib/parser.js:437:12)
#17 6.364     at Parser.parse (/app/node_modules/postcss/lib/parser.js:472:16)
#17 6.364     at parse (/app/node_modules/postcss/lib/parse.js:11:12)
#17 6.364     at new LazyResult (/app/node_modules/postcss/lib/lazy-result.js:165:16)
#17 6.364     at Processor.process (/app/node_modules/postcss/lib/processor.js:53:14)
#17 6.364     at runPostCSS (file:///app/node_modules/vite/dist/node/chunks/config.js:30793:68)
#17 6.364     at async compilePostCSS (file:///app/node_modules/vite/dist/node/chunks/config.js:30777:6)
#17 6.364     at async compileCSS (file:///app/node_modules/vite/dist/node/chunks/config.js:30707:26)
#17 6.388 npm notice
#17 6.388 npm notice New major version of npm available! 10.9.0 -> 11.12.1
#17 6.388 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.12.1
#17 6.388 npm notice To update run: npm install -g npm@11.12.1
#17 6.388 npm notice
#17 ERROR: process "/bin/bash -ol pipefail -c npm run build" did not complete successfully: exit code: 1
------
 > [stage-0 13/15] RUN --mount=type=cache,id=KMBNH8PNad4-node_modules/cache,target=/app/node_modules/.cache npm run build:
6.364     at new LazyResult (/app/node_modules/postcss/lib/lazy-result.js:165:16)
6.364     at Processor.process (/app/node_modules/postcss/lib/processor.js:53:14)
6.364     at runPostCSS (file:///app/node_modules/vite/dist/node/chunks/config.js:30793:68)
6.364     at async compilePostCSS (file:///app/node_modules/vite/dist/node/chunks/config.js:30777:6)
6.364     at async compileCSS (file:///app/node_modules/vite/dist/node/chunks/config.js:30707:26)
6.388 npm notice
6.388 npm notice New major version of npm available! 10.9.0 -> 11.12.1
6.388 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.12.1
6.388 npm notice To update run: npm install -g npm@11.12.1
6.388 npm notice
------

 1 warning found (use docker --debug to expand):
 - UndefinedVar: Usage of undefined variable '$NIXPACKS_PATH' (line 24)
Dockerfile:30
--------------------
  28 |     # build phase
  29 |     COPY . /app/.
  30 | >>> RUN --mount=type=cache,id=KMBNH8PNad4-node_modules/cache,target=/app/node_modules/.cache npm run build
  31 |     
  32 |     
--------------------
ERROR: failed to build: failed to solve: process "/bin/bash -ol pipefail -c npm run build" did not complete successfully: exit code: 1
##########################################
### Error
### Tue, 07 Apr 2026 20:56:51 GMT
##########################################

Command failed with exit code 1: docker buildx build --network host -f /etc/easypanel/projects/jesusgonzalez_oficial_web/app_jesusgonzalez/code/.nixpacks/Dockerfile -t easypanel/jesusgonzalez_oficial_web/app_jesusgonzalez --label 'keep=true' --build-arg 'GIT_SHA=be3bb66cc14234b94fdc532f4ef3ccc0ff13f0c3' /etc/easypanel/projects/jesusgonzalez_oficial_web/app_jesusgonzalez/code/