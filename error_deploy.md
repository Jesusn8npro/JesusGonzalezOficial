Commit: Mejora premium de Link in Bio y corrección de enlaces 
##########################################
### Download Github Archive Started...
### Tue, 07 Apr 2026 20:47:15 GMT
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
#2 DONE 0.6s

#3 [internal] load .dockerignore
#3 transferring context: 2B done
#3 DONE 0.0s

#4 [internal] load build context
#4 transferring context: 3.21MB 0.1s done
#4 DONE 0.1s

#5 [stage-0  1/15] FROM ghcr.io/railwayapp/nixpacks:ubuntu-1741046653@sha256:ed406b77fb751927991b8655e76c33a4521c4957c2afeab293be7c63c2a373d2
#5 resolve ghcr.io/railwayapp/nixpacks:ubuntu-1741046653@sha256:ed406b77fb751927991b8655e76c33a4521c4957c2afeab293be7c63c2a373d2 0.0s done
#5 sha256:82afdcbbf1dd44bb728577e4e48f1c9ca00dde78318a60985b01018dc2803a46 4.37kB / 4.37kB done
#5 sha256:ed406b77fb751927991b8655e76c33a4521c4957c2afeab293be7c63c2a373d2 1.61kB / 1.61kB done
#5 sha256:53a1550a769bb935ad1d80f12dfd0ae96a8ec35865d8e6b956cdb79f3ae49e5e 868B / 868B done
#5 DONE 0.1s

#6 [stage-0  2/15] WORKDIR /app/
#6 DONE 0.0s

#7 [stage-0  3/15] COPY .nixpacks/nixpkgs-ba913eda2df8eb72147259189d55932012df6301.nix .nixpacks/nixpkgs-ba913eda2df8eb72147259189d55932012df6301.nix
#7 DONE 0.0s

#8 [stage-0  4/15] RUN nix-env -if .nixpacks/nixpkgs-ba913eda2df8eb72147259189d55932012df6301.nix && nix-collect-garbage -d
#8 0.293 unpacking 'https://github.com/NixOS/nixpkgs/archive/ba913eda2df8eb72147259189d55932012df6301.tar.gz' into the Git cache...
#8 37.04 installing 'ba913eda2df8eb72147259189d55932012df6301-env'
#8 37.99 these 4 derivations will be built:
#8 37.99   /nix/store/x9qrr2jb0d9d7gjg77imaric1nr9wl3s-libraries.drv
#8 37.99   /nix/store/4vjgp6bh2gja20gkg167x66kgk10c24j-ba913eda2df8eb72147259189d55932012df6301-env.drv
#8 37.99   /nix/store/hpybn12g5ny53hbyvrlvzdl3hpk392ql-builder.pl.drv
#8 37.99   /nix/store/llvngay9gncvs8l6dw01c6wlbh35zzf0-ba913eda2df8eb72147259189d55932012df6301-env.drv
#8 37.99 these 38 paths will be fetched (32.50 MiB download, 164.56 MiB unpacked):
#8 37.99   /nix/store/mjgi65m3hgzqqvqcix848gskkw5zzwi9-acl-2.3.2
#8 37.99   /nix/store/5nk2ga7i2f030am4qpcdsd8qlk6i3z83-attr-2.5.2
#8 37.99   /nix/store/306znyj77fv49kwnkpxmb0j2znqpa8bj-bash-5.2p26
#8 37.99   /nix/store/xwcf1rw3ackqp2vxms9myf9jq2ny6ynv-bzip2-1.0.8
#8 37.99   /nix/store/mxcq77rlan82dzpv3cgj0fh6qvv8ncil-bzip2-1.0.8-bin
#8 37.99   /nix/store/1iz89fy5fi998g43z1m4j7s5f095di68-caddy-2.8.4
#8 37.99   /nix/store/php4qidg2bxzmm79vpri025bqi0fa889-coreutils-9.5
#8 37.99   /nix/store/i34mknsjgrfyy71k2h79gda0bvagzc2j-diffutils-3.10
#8 37.99   /nix/store/1sffjkg6c6ff16fz5yr0pnz3j7vja42h-ed-1.20.2
#8 37.99   /nix/store/xx7x1dwybpssfhq8yikvzz38bh3yrq97-file-5.45
#8 37.99   /nix/store/jjcsr5gs4qanf7ln5c6wgcq4sn75a978-findutils-4.9.0
#8 37.99   /nix/store/8vvkbgmnin1x2jkp7wcb2zg1p0vc4ks9-gawk-5.2.2
#8 37.99   /nix/store/xvzz97yk73hw03v5dhhz3j47ggwf1yq1-gcc-13.2.0-lib
#8 37.99   /nix/store/0rxb3ixzk4zaqivc9s795m0a3679wbw2-gcc-13.2.0-libgcc
#8 37.99   /nix/store/k7zgvzp2r31zkg9xqgjim7mbknryv6bs-glibc-2.39-52
#8 37.99   /nix/store/7ivacs3m2fm19hyxdmrs05xisj82v6y5-gmp-with-cxx-6.3.0
#8 37.99   /nix/store/4i0j14zymvlngyyhq2254f4g9m9my98y-gnu-config-2024-01-01
#8 37.99   /nix/store/28gpmx3z6ss3znd7fhmrzmvk3x5lnfbk-gnugrep-3.11
#8 37.99   /nix/store/cdzpn0rdq810aknww3w9fy3wmw9ixr66-gnumake-4.4.1
#8 37.99   /nix/store/5zjms21vpxlkbc0qyl5pmj2sidfmzmd7-gnused-4.9
#8 37.99   /nix/store/rik7p68cq7yzlj5pmfpf4yv6jnrpvlgf-gnutar-1.35
#8 37.99   /nix/store/j5chw7v1x3vlmf3wmdpdb5gwh9hl0b80-gzip-1.13
#8 37.99   /nix/store/dzsby2vk02jcn0s43fkna2qqqix6ccy1-iana-etc-20240318
#8 37.99   /nix/store/ic63ay0py10fyryaw7345k4ps32da33w-libidn2-2.3.7
#8 37.99   /nix/store/yfp7dr8m7zi7kxk49wd714gwvhb105hf-libunistring-1.1
#8 37.99   /nix/store/5xynf9c9ml7d97q70kpq9rpqqmx13xl8-libxcrypt-4.4.36
#8 37.99   /nix/store/zk9ybjjixdwyv3jmpg2i7s8p7iqi5vhh-mailcap-2.1.53
#8 37.99   /nix/store/0lfxbmchigx9vs9qmrlbahcy6nxwfnj1-patch-2.7.6
#8 37.99   /nix/store/nbad47q0m0m9c5xid7zh05hiknwircbp-patchelf-0.15.0
#8 37.99   /nix/store/g3vi60zgyjsvij7xkk6dxky1hkwh0ynd-pcre2-10.43
#8 37.99   /nix/store/1iscdpbd3x9x3s3s25jd5ppl7yra0b77-perl-5.38.2
#8 37.99   /nix/store/rg6agzlb4gcl4w2126m16qm4mgr8jgi6-stdenv-linux
#8 37.99   /nix/store/y6hmqbmbwq0rmx1fzix5c5jszla2pzmp-tzdata-2024a
#8 37.99   /nix/store/bq6xbl9cq6hkcn65mz2fzc2k38xiv87h-update-autotools-gnu-config-scripts-hook
#8 37.99   /nix/store/1q9vc0lq7qjlfjz47mfmlzdf86c543jy-xgcc-13.2.0-libgcc
#8 37.99   /nix/store/lphbn1va4i43fj7f3m9xskf9y86khzf3-xz-5.4.6
#8 37.99   /nix/store/6i4xxaa812vsbli9jkq4mksdddrk27lw-xz-5.4.6-bin
#8 37.99   /nix/store/lv6nackqis28gg7l2ic43f6nk52hb39g-zlib-1.3.1
#8 38.01 copying path '/nix/store/dzsby2vk02jcn0s43fkna2qqqix6ccy1-iana-etc-20240318' from 'https://cache.nixos.org'...
#8 38.01 copying path '/nix/store/y6hmqbmbwq0rmx1fzix5c5jszla2pzmp-tzdata-2024a' from 'https://cache.nixos.org'...
#8 38.01 copying path '/nix/store/zk9ybjjixdwyv3jmpg2i7s8p7iqi5vhh-mailcap-2.1.53' from 'https://cache.nixos.org'...
#8 38.01 copying path '/nix/store/4i0j14zymvlngyyhq2254f4g9m9my98y-gnu-config-2024-01-01' from 'https://cache.nixos.org'...
#8 38.01 copying path '/nix/store/1q9vc0lq7qjlfjz47mfmlzdf86c543jy-xgcc-13.2.0-libgcc' from 'https://cache.nixos.org'...
#8 38.01 copying path '/nix/store/0rxb3ixzk4zaqivc9s795m0a3679wbw2-gcc-13.2.0-libgcc' from 'https://cache.nixos.org'...
#8 38.02 copying path '/nix/store/yfp7dr8m7zi7kxk49wd714gwvhb105hf-libunistring-1.1' from 'https://cache.nixos.org'...
#8 38.07 copying path '/nix/store/bq6xbl9cq6hkcn65mz2fzc2k38xiv87h-update-autotools-gnu-config-scripts-hook' from 'https://cache.nixos.org'...
#8 38.10 copying path '/nix/store/ic63ay0py10fyryaw7345k4ps32da33w-libidn2-2.3.7' from 'https://cache.nixos.org'...
#8 38.14 copying path '/nix/store/k7zgvzp2r31zkg9xqgjim7mbknryv6bs-glibc-2.39-52' from 'https://cache.nixos.org'...
#8 38.62 copying path '/nix/store/5nk2ga7i2f030am4qpcdsd8qlk6i3z83-attr-2.5.2' from 'https://cache.nixos.org'...
#8 38.62 copying path '/nix/store/306znyj77fv49kwnkpxmb0j2znqpa8bj-bash-5.2p26' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/xwcf1rw3ackqp2vxms9myf9jq2ny6ynv-bzip2-1.0.8' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/xvzz97yk73hw03v5dhhz3j47ggwf1yq1-gcc-13.2.0-lib' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/cdzpn0rdq810aknww3w9fy3wmw9ixr66-gnumake-4.4.1' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/1iz89fy5fi998g43z1m4j7s5f095di68-caddy-2.8.4' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/1sffjkg6c6ff16fz5yr0pnz3j7vja42h-ed-1.20.2' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/8vvkbgmnin1x2jkp7wcb2zg1p0vc4ks9-gawk-5.2.2' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/g3vi60zgyjsvij7xkk6dxky1hkwh0ynd-pcre2-10.43' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/5xynf9c9ml7d97q70kpq9rpqqmx13xl8-libxcrypt-4.4.36' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/lphbn1va4i43fj7f3m9xskf9y86khzf3-xz-5.4.6' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/lv6nackqis28gg7l2ic43f6nk52hb39g-zlib-1.3.1' from 'https://cache.nixos.org'...
#8 38.63 copying path '/nix/store/5zjms21vpxlkbc0qyl5pmj2sidfmzmd7-gnused-4.9' from 'https://cache.nixos.org'...
#8 38.67 copying path '/nix/store/mxcq77rlan82dzpv3cgj0fh6qvv8ncil-bzip2-1.0.8-bin' from 'https://cache.nixos.org'...
#8 38.68 copying path '/nix/store/mjgi65m3hgzqqvqcix848gskkw5zzwi9-acl-2.3.2' from 'https://cache.nixos.org'...
#8 38.69 copying path '/nix/store/0lfxbmchigx9vs9qmrlbahcy6nxwfnj1-patch-2.7.6' from 'https://cache.nixos.org'...
#8 38.71 copying path '/nix/store/xx7x1dwybpssfhq8yikvzz38bh3yrq97-file-5.45' from 'https://cache.nixos.org'...
#8 38.72 copying path '/nix/store/j5chw7v1x3vlmf3wmdpdb5gwh9hl0b80-gzip-1.13' from 'https://cache.nixos.org'...
#8 38.81 copying path '/nix/store/6i4xxaa812vsbli9jkq4mksdddrk27lw-xz-5.4.6-bin' from 'https://cache.nixos.org'...
#8 38.90 copying path '/nix/store/rik7p68cq7yzlj5pmfpf4yv6jnrpvlgf-gnutar-1.35' from 'https://cache.nixos.org'...
#8 38.92 copying path '/nix/store/28gpmx3z6ss3znd7fhmrzmvk3x5lnfbk-gnugrep-3.11' from 'https://cache.nixos.org'...
#8 39.04 copying path '/nix/store/nbad47q0m0m9c5xid7zh05hiknwircbp-patchelf-0.15.0' from 'https://cache.nixos.org'...
#8 39.04 copying path '/nix/store/7ivacs3m2fm19hyxdmrs05xisj82v6y5-gmp-with-cxx-6.3.0' from 'https://cache.nixos.org'...
#8 39.11 copying path '/nix/store/php4qidg2bxzmm79vpri025bqi0fa889-coreutils-9.5' from 'https://cache.nixos.org'...
#8 39.16 copying path '/nix/store/i34mknsjgrfyy71k2h79gda0bvagzc2j-diffutils-3.10' from 'https://cache.nixos.org'...
#8 39.16 copying path '/nix/store/jjcsr5gs4qanf7ln5c6wgcq4sn75a978-findutils-4.9.0' from 'https://cache.nixos.org'...
#8 39.16 copying path '/nix/store/1iscdpbd3x9x3s3s25jd5ppl7yra0b77-perl-5.38.2' from 'https://cache.nixos.org'...
#8 39.30 copying path '/nix/store/rg6agzlb4gcl4w2126m16qm4mgr8jgi6-stdenv-linux' from 'https://cache.nixos.org'...
#8 39.39 building '/nix/store/hpybn12g5ny53hbyvrlvzdl3hpk392ql-builder.pl.drv'...
#8 39.59 building '/nix/store/x9qrr2jb0d9d7gjg77imaric1nr9wl3s-libraries.drv'...
#8 39.83 building '/nix/store/4vjgp6bh2gja20gkg167x66kgk10c24j-ba913eda2df8eb72147259189d55932012df6301-env.drv'...
#8 40.37 building '/nix/store/llvngay9gncvs8l6dw01c6wlbh35zzf0-ba913eda2df8eb72147259189d55932012df6301-env.drv'...
#8 40.45 created 4 symlinks in user environment
#8 40.50 building '/nix/store/6zxkblvgw1ay1kb3a7ghxcqdgbyc7pk9-user-environment.drv'...
#8 40.66 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
#8 40.66 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
#8 40.66 removing profile version 1
#8 40.66 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
#8 40.66 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
#8 40.67 finding garbage collector roots...
#8 40.67 removing stale link from '/nix/var/nix/gcroots/auto/lzjbmb2ry0z7lma2fvpqprb12921pnb5' to '/nix/var/nix/profiles/per-user/root/profile-1-link'
#8 40.67 deleting garbage...
#8 40.68 deleting '/nix/store/ir9fki7838bmk4hlj0zmwbw45q101j66-user-environment.drv'
#8 40.68 deleting '/nix/store/b9rj4wk1cxh7g2ib89aqbcapzzar8p2s-user-environment'
#8 40.68 deleting '/nix/store/xxyn8jfxcpr5ac9dvismfzx39ijh9kiv-env-manifest.nix'
#8 40.70 deleting '/nix/store/rg6agzlb4gcl4w2126m16qm4mgr8jgi6-stdenv-linux'
#8 40.70 deleting '/nix/store/nbad47q0m0m9c5xid7zh05hiknwircbp-patchelf-0.15.0'
#8 40.70 deleting '/nix/store/jjcsr5gs4qanf7ln5c6wgcq4sn75a978-findutils-4.9.0'
#8 40.71 deleting '/nix/store/i34mknsjgrfyy71k2h79gda0bvagzc2j-diffutils-3.10'
#8 40.72 deleting '/nix/store/1iscdpbd3x9x3s3s25jd5ppl7yra0b77-perl-5.38.2'
#8 40.81 deleting '/nix/store/php4qidg2bxzmm79vpri025bqi0fa889-coreutils-9.5'
#8 40.81 deleting '/nix/store/7ivacs3m2fm19hyxdmrs05xisj82v6y5-gmp-with-cxx-6.3.0'
#8 40.81 deleting '/nix/store/xvzz97yk73hw03v5dhhz3j47ggwf1yq1-gcc-13.2.0-lib'
#8 40.82 deleting '/nix/store/0rxb3ixzk4zaqivc9s795m0a3679wbw2-gcc-13.2.0-libgcc'
#8 40.82 deleting '/nix/store/4vkw8ifh2naxmxl323vzq0scm0l36c1v-builder.pl'
#8 40.82 deleting '/nix/store/5zjms21vpxlkbc0qyl5pmj2sidfmzmd7-gnused-4.9'
#8 40.83 deleting '/nix/store/0lfxbmchigx9vs9qmrlbahcy6nxwfnj1-patch-2.7.6'
#8 40.83 deleting '/nix/store/1sffjkg6c6ff16fz5yr0pnz3j7vja42h-ed-1.20.2'
#8 40.83 deleting '/nix/store/mxcq77rlan82dzpv3cgj0fh6qvv8ncil-bzip2-1.0.8-bin'
#8 40.83 deleting '/nix/store/xwcf1rw3ackqp2vxms9myf9jq2ny6ynv-bzip2-1.0.8'
#8 40.83 deleting '/nix/store/xx7x1dwybpssfhq8yikvzz38bh3yrq97-file-5.45'
#8 40.83 deleting '/nix/store/rik7p68cq7yzlj5pmfpf4yv6jnrpvlgf-gnutar-1.35'
#8 40.84 deleting '/nix/store/mjgi65m3hgzqqvqcix848gskkw5zzwi9-acl-2.3.2'
#8 40.84 deleting '/nix/store/bq6xbl9cq6hkcn65mz2fzc2k38xiv87h-update-autotools-gnu-config-scripts-hook'
#8 40.84 deleting '/nix/store/4i0j14zymvlngyyhq2254f4g9m9my98y-gnu-config-2024-01-01'
#8 40.84 deleting '/nix/store/6i4xxaa812vsbli9jkq4mksdddrk27lw-xz-5.4.6-bin'
#8 40.84 deleting '/nix/store/lphbn1va4i43fj7f3m9xskf9y86khzf3-xz-5.4.6'
#8 40.85 deleting '/nix/store/5nk2ga7i2f030am4qpcdsd8qlk6i3z83-attr-2.5.2'
#8 40.85 deleting '/nix/store/j5chw7v1x3vlmf3wmdpdb5gwh9hl0b80-gzip-1.13'
#8 40.85 deleting '/nix/store/5xynf9c9ml7d97q70kpq9rpqqmx13xl8-libxcrypt-4.4.36'
#8 40.85 deleting '/nix/store/cdzpn0rdq810aknww3w9fy3wmw9ixr66-gnumake-4.4.1'
#8 40.86 deleting '/nix/store/8vvkbgmnin1x2jkp7wcb2zg1p0vc4ks9-gawk-5.2.2'
#8 40.87 deleting '/nix/store/306znyj77fv49kwnkpxmb0j2znqpa8bj-bash-5.2p26'
#8 40.87 deleting '/nix/store/28gpmx3z6ss3znd7fhmrzmvk3x5lnfbk-gnugrep-3.11'
#8 40.88 deleting '/nix/store/lv6nackqis28gg7l2ic43f6nk52hb39g-zlib-1.3.1'
#8 40.88 deleting '/nix/store/jdxlsyfxs63rxxhrzgc3mnhx0mz6s595-libraries'
#8 40.88 deleting '/nix/store/g3vi60zgyjsvij7xkk6dxky1hkwh0ynd-pcre2-10.43'
#8 40.88 deleting '/nix/store/p5l041qdj83dg93parxblr0q0al3hhsc-source'
#8 44.46 deleting unused links...
#8 44.46 note: currently hard linking saves -0.00 MiB
#8 44.46 36 store paths deleted, 245.12 MiB freed
#8 DONE 44.5s

#9 [stage-0  5/15] COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
#9 DONE 0.0s

#10 [stage-0  6/15] RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d
#10 0.116 unpacking 'https://github.com/NixOS/nixpkgs/archive/ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.tar.gz' into the Git cache...
#10 38.89 unpacking 'https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz' into the Git cache...
#10 39.32 installing 'ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env'
#10 40.02 these 6 derivations will be built:
#10 40.02   /nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv
#10 40.02   /nix/store/9smjjb5pkmcbykz8p4786s3a4nq6m030-builder.pl.drv
#10 40.02   /nix/store/cjdjkmr6gy2h8l0cra71whgrvy030kx1-libraries.drv
#10 40.02   /nix/store/bs6g8vhkfynvlzidhlqbsvnc9wijbaaz-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
#10 40.02   /nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv
#10 40.02   /nix/store/zr34yihblp8zqam2fjahiiddvnii8gw0-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
#10 40.02 these 77 paths will be fetched (122.32 MiB download, 581.56 MiB unpacked):
#10 40.02   /nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2
#10 40.02   /nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2
#10 40.02   /nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37
#10 40.02   /nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1
#10 40.02   /nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib
#10 40.02   /nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1
#10 40.02   /nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8
#10 40.02   /nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin
#10 40.02   /nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5
#10 40.02   /nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0
#10 40.02   /nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin
#10 40.02   /nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev
#10 40.02   /nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man
#10 40.02   /nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10
#10 40.02   /nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2
#10 40.02   /nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params
#10 40.02   /nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46
#10 40.02   /nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0
#10 40.02   /nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1
#10 40.02   /nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116
#10 40.02   /nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib
#10 40.02   /nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc
#10 40.02   /nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116
#10 40.02   /nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36
#10 40.02   /nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin
#10 40.02   /nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev
#10 40.02   /nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0
#10 40.02   /nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0
#10 40.02   /nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01
#10 40.02   /nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11
#10 40.02   /nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1
#10 40.02   /nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9
#10 40.02   /nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35
#10 40.02   /nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13
#10 40.02   /nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2
#10 40.02   /nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev
#10 40.02   /nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20
#10 40.02   /nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib
#10 40.02   /nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3
#10 40.02   /nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev
#10 40.02   /nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib
#10 40.02   /nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7
#10 40.02   /nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1
#10 40.02   /nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1
#10 40.02   /nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev
#10 40.02   /nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3
#10 40.02   /nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2
#10 40.02   /nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev
#10 40.02   /nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36
#10 40.02   /nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12
#10 40.02   /nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list
#10 40.02   /nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1
#10 40.02   /nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0
#10 40.02   /nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev
#10 40.02   /nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib
#10 40.02   /nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0
#10 40.02   /nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2
#10 40.02   /nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2
#10 40.02   /nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin
#10 40.02   /nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin
#10 40.02   /nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev
#10 40.02   /nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev
#10 40.02   /nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6
#10 40.02   /nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0
#10 40.02   /nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44
#10 40.02   /nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0
#10 40.02   /nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0
#10 40.02   /nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin
#10 40.02   /nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev
#10 40.02   /nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux
#10 40.02   /nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux
#10 40.02   /nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook
#10 40.02   /nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc
#10 40.02   /nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3
#10 40.02   /nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin
#10 40.02   /nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1
#10 40.02   /nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev
#10 40.04 copying path '/nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
#10 40.04 copying path '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01' from 'https://cache.nixos.org'...
#10 40.04 copying path '/nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
#10 40.04 copying path '/nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3' from 'https://cache.nixos.org'...
#10 40.05 copying path '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12' from 'https://cache.nixos.org'...
#10 40.05 copying path '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list' from 'https://cache.nixos.org'...
#10 40.05 copying path '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man' from 'https://cache.nixos.org'...
#10 40.05 copying path '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0' from 'https://cache.nixos.org'...
#10 40.08 copying path '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook' from 'https://cache.nixos.org'...
#10 40.13 copying path '/nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7' from 'https://cache.nixos.org'...
#10 40.18 copying path '/nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1' from 'https://cache.nixos.org'...
#10 40.65 copying path '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib' from 'https://cache.nixos.org'...
#10 40.67 copying path '/nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2' from 'https://cache.nixos.org'...
#10 40.67 copying path '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44' from 'https://cache.nixos.org'...
#10 40.67 copying path '/nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2' from 'https://cache.nixos.org'...
#10 40.71 copying path '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin' from 'https://cache.nixos.org'...
#10 40.71 copying path '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3' from 'https://cache.nixos.org'...
#10 40.71 copying path '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6' from 'https://cache.nixos.org'...
#10 40.73 copying path '/nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev' from 'https://cache.nixos.org'...
#10 40.75 copying path '/nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1' from 'https://cache.nixos.org'...
#10 40.76 copying path '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev' from 'https://cache.nixos.org'...
#10 40.77 copying path '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35' from 'https://cache.nixos.org'...
#10 40.83 copying path '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1' from 'https://cache.nixos.org'...
#10 40.83 copying path '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20' from 'https://cache.nixos.org'...
#10 40.86 copying path '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib' from 'https://cache.nixos.org'...
#10 40.86 copying path '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46' from 'https://cache.nixos.org'...
#10 40.86 copying path '/nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0' from 'https://cache.nixos.org'...
#10 40.86 copying path '/nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin' from 'https://cache.nixos.org'...
#10 40.88 copying path '/nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev' from 'https://cache.nixos.org'...
#10 40.92 copying path '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13' from 'https://cache.nixos.org'...
#10 40.99 copying path '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin' from 'https://cache.nixos.org'...
#10 40.99 copying path '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1' from 'https://cache.nixos.org'...
#10 41.05 copying path '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11' from 'https://cache.nixos.org'...
#10 41.06 copying path '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev' from 'https://cache.nixos.org'...
#10 41.24 copying path '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1' from 'https://cache.nixos.org'...
#10 41.25 copying path '/nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev' from 'https://cache.nixos.org'...
#10 41.25 copying path '/nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2' from 'https://cache.nixos.org'...
#10 41.25 copying path '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0' from 'https://cache.nixos.org'...
#10 41.25 copying path '/nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0' from 'https://cache.nixos.org'...
#10 41.36 copying path '/nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5' from 'https://cache.nixos.org'...
#10 41.38 copying path '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib' from 'https://cache.nixos.org'...
#10 41.38 copying path '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1' from 'https://cache.nixos.org'...
#10 41.38 copying path '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
#10 41.47 copying path '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116' from 'https://cache.nixos.org'...
#10 41.50 copying path '/nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
#10 41.55 copying path '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
#10 41.59 copying path '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10' from 'https://cache.nixos.org'...
#10 41.59 copying path '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0' from 'https://cache.nixos.org'...
#10 41.59 copying path '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0' from 'https://cache.nixos.org'...
#10 41.64 copying path '/nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
#10 41.79 copying path '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0' from 'https://cache.nixos.org'...
#10 41.79 copying path '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3' from 'https://cache.nixos.org'...
#10 41.89 copying path '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev' from 'https://cache.nixos.org'...
#10 42.13 copying path '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux' from 'https://cache.nixos.org'...
#10 42.18 copying path '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev' from 'https://cache.nixos.org'...
#10 42.19 copying path '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin' from 'https://cache.nixos.org'...
#10 42.45 building '/nix/store/9smjjb5pkmcbykz8p4786s3a4nq6m030-builder.pl.drv'...
#10 42.46 copying path '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev' from 'https://cache.nixos.org'...
#10 42.92 building '/nix/store/cjdjkmr6gy2h8l0cra71whgrvy030kx1-libraries.drv'...
#10 42.95 copying path '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1' from 'https://cache.nixos.org'...
#10 43.44 building '/nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv'...
#10 43.68 copying path '/nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev' from 'https://cache.nixos.org'...
#10 43.91 copying path '/nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0' from 'https://cache.nixos.org'...
#10 44.15 
#10 44.15 trying https://registry.npmjs.org/npm/-/npm-9.9.4.tgz
#10 44.16   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
#10 44.16                                  Dload  Upload   Total   Spent    Left  Speed
#10 44.27 100 2648k  100 2648k    0     0  24.0M      0 --:--:-- --:--:-- --:--:-- 24.1M
#10 44.45 building '/nix/store/bs6g8vhkfynvlzidhlqbsvnc9wijbaaz-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
#10 46.99 copying path '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116' from 'https://cache.nixos.org'...
#10 47.02 copying path '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux' from 'https://cache.nixos.org'...
#10 47.12 building '/nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv'...
#10 47.20 Running phase: unpackPhase
#10 47.21 unpacking source archive /nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz
#10 47.43 source root is package
#10 47.53 setting SOURCE_DATE_EPOCH to timestamp 499162500 of file package/package.json
#10 47.54 Running phase: installPhase
#10 48.32 building '/nix/store/zr34yihblp8zqam2fjahiiddvnii8gw0-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
#10 48.44 created 33 symlinks in user environment
#10 48.51 building '/nix/store/hyiyznd2jdvpzw5g4k335d66b5hxldfr-user-environment.drv'...
#10 48.74 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
#10 48.74 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
#10 48.74 removing profile version 2
#10 48.74 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
#10 48.74 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
#10 48.74 finding garbage collector roots...
#10 48.75 removing stale link from '/nix/var/nix/gcroots/auto/v73nmmh5d8van4ja5c8jn0gjlwhxbz3a' to '/nix/var/nix/profiles/per-user/root/profile-2-link'
#10 48.75 deleting garbage...
#10 48.82 deleting '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux'
#10 48.82 deleting '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116'
#10 48.82 deleting '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux'
#10 48.82 deleting '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11'
#10 48.83 deleting '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44'
#10 48.83 deleting '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116'
#10 48.94 deleting '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20'
#10 48.94 deleting '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1'
#10 48.95 deleting '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev'
#10 48.95 deleting '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin'
#10 48.95 deleting '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1'
#10 48.96 deleting '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params'
#10 48.96 deleting '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0'
#10 48.96 deleting '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev'
#10 48.96 deleting '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1'
#10 48.96 deleting '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1'
#10 48.97 deleting '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib'
#10 48.98 deleting '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev'
#10 48.98 deleting '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3'
#10 48.98 deleting '/nix/store/1c0dv2pdlshjz5kmjd4dfp3c96yncr23-libraries'
#10 48.98 deleting '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib'
#10 48.99 deleting '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev'
#10 48.99 deleting '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin'
#10 48.99 deleting '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2'
#10 48.99 deleting '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10'
#10 49.00 deleting '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev'
#10 49.02 deleting '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12'
#10 49.06 deleting '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin'
#10 49.06 deleting '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev'
#10 49.06 deleting '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0'
#10 49.06 deleting '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook'
#10 49.06 deleting '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib'
#10 49.06 deleting '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1'
#10 49.06 deleting '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1'
#10 49.07 deleting '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0'
#10 49.07 deleting '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin'
#10 49.07 deleting '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8'
#10 49.07 deleting '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man'
#10 49.07 deleting '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0'
#10 49.16 deleting '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0'
#10 49.16 deleting '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib'
#10 49.16 deleting '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01'
#10 49.16 deleting '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6'
#10 49.16 deleting '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46'
#10 49.16 deleting '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35'
#10 49.17 deleting '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36'
#10 49.17 deleting '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin'
#10 49.18 deleting '/nix/store/lwi59jcfwk2lnrakmm1y5vw85hj3n1bi-source'
#10 56.63 deleting '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13'
#10 56.63 deleting '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1'
#10 56.63 deleting '/nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl'
#10 56.63 deleting '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3'
#10 56.64 deleting '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9'
#10 56.64 deleting '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list'
#10 56.65 deleting '/nix/store/2003hyg40f9kpv337jz3283smr3j9rnc-source'
#10 56.65 deleting '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0'
#10 56.65 deleting '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2'
#10 56.66 deleting '/nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz'
#10 56.66 deleting '/nix/store/ilf53zg10ajl832fgdc5lhdv8srbdq36-user-environment'
#10 56.69 deleting '/nix/store/6zxkblvgw1ay1kb3a7ghxcqdgbyc7pk9-user-environment.drv'
#10 56.69 deleting '/nix/store/mbgkmd06wd8dy5mz076h4pk7m1c9apgn-env-manifest.nix'
#10 56.69 deleting unused links...
#10 56.69 note: currently hard linking saves -0.00 MiB
#10 56.70 61 store paths deleted, 562.86 MiB freed
#10 DONE 56.8s

#11 [stage-0  7/15] COPY .nixpacks/assets /assets/
#11 DONE 0.0s

#12 [stage-0  8/15] COPY . /app/.
#12 DONE 0.1s

#13 [stage-0  9/15] RUN  caddy fmt --overwrite /assets/Caddyfile
#13 DONE 0.3s

#14 [stage-0 10/15] COPY . /app/.
#14 DONE 0.1s

#15 [stage-0 11/15] RUN --mount=type=cache,id=KMBNH8PNad4-/root/npm,target=/root/.npm npm install
#15 47.42 npm warn EBADENGINE Unsupported engine {
#15 47.42 npm warn EBADENGINE   package: '@vitejs/plugin-react@5.1.1',
#15 47.42 npm warn EBADENGINE   required: { node: '^20.19.0 || >=22.12.0' },
#15 47.42 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
#15 47.42 npm warn EBADENGINE }
#15 112.8 npm warn EBADENGINE Unsupported engine {
#15 112.8 npm warn EBADENGINE   package: 'vite@7.2.4',
#15 112.8 npm warn EBADENGINE   required: { node: '^20.19.0 || >=22.12.0' },
#15 112.8 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
#15 112.8 npm warn EBADENGINE }
#15 130.2 
#15 130.2 added 187 packages, and audited 188 packages in 2m
#15 130.2 
#15 130.2 48 packages are looking for funding
#15 130.2   run `npm fund` for details
#15 130.3 
#15 130.3 9 vulnerabilities (3 moderate, 6 high)
#15 130.3 
#15 130.3 To address all issues, run:
#15 130.3   npm audit fix
#15 130.3 
#15 130.3 Run `npm audit` for details.
#15 130.3 npm notice
#15 130.3 npm notice New major version of npm available! 10.9.0 -> 11.12.1
#15 130.3 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.12.1
#15 130.3 npm notice To update run: npm install -g npm@11.12.1
#15 130.3 npm notice
#15 DONE 130.4s

#16 [stage-0 12/15] COPY . /app/.
#16 DONE 0.1s

#17 [stage-0 13/15] RUN --mount=type=cache,id=KMBNH8PNad4-node_modules/cache,target=/app/node_modules/.cache npm run build
#17 0.492 
#17 0.492 > temp-project@0.0.0 build
#17 0.492 > tsc -b && vite build
#17 0.492 
#17 2.390 src/paginas/link-in-bio/LinkEnBio.tsx(1,1): error TS1185: Merge conflict marker encountered.
#17 2.390 src/paginas/link-in-bio/LinkEnBio.tsx(19,10): error TS17008: JSX element 'div' has no corresponding closing tag.
#17 2.391 src/paginas/link-in-bio/LinkEnBio.tsx(22,14): error TS17008: JSX element 'div' has no corresponding closing tag.
#17 2.391 src/paginas/link-in-bio/LinkEnBio.tsx(43,18): error TS17008: JSX element 'div' has no corresponding closing tag.
#17 2.392 src/paginas/link-in-bio/LinkEnBio.tsx(129,33): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
#17 2.392 src/paginas/link-in-bio/LinkEnBio.tsx(133,11): error TS1005: '}' expected.
#17 2.392 src/paginas/link-in-bio/LinkEnBio.tsx(348,1): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
#17 2.392 src/paginas/link-in-bio/LinkEnBio.tsx(348,2): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
#17 2.393 src/paginas/link-in-bio/LinkEnBio.tsx(348,3): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
#17 2.393 src/paginas/link-in-bio/LinkEnBio.tsx(348,4): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
#17 2.393 src/paginas/link-in-bio/LinkEnBio.tsx(348,5): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
#17 2.393 src/paginas/link-in-bio/LinkEnBio.tsx(348,6): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
#17 2.393 src/paginas/link-in-bio/LinkEnBio.tsx(348,7): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
#17 2.394 src/paginas/link-in-bio/LinkEnBio.tsx(353,1): error TS1381: Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
#17 2.394 src/paginas/link-in-bio/LinkEnBio.tsx(356,1): error TS1005: '</' expected.
#17 3.311 npm notice
#17 3.311 npm notice New major version of npm available! 10.9.0 -> 11.12.1
#17 3.311 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.12.1
#17 3.311 npm notice To update run: npm install -g npm@11.12.1
#17 3.311 npm notice
#17 ERROR: process "/bin/bash -ol pipefail -c npm run build" did not complete successfully: exit code: 2
------
 > [stage-0 13/15] RUN --mount=type=cache,id=KMBNH8PNad4-node_modules/cache,target=/app/node_modules/.cache npm run build:
2.393 src/paginas/link-in-bio/LinkEnBio.tsx(348,5): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
2.393 src/paginas/link-in-bio/LinkEnBio.tsx(348,6): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
2.393 src/paginas/link-in-bio/LinkEnBio.tsx(348,7): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
2.394 src/paginas/link-in-bio/LinkEnBio.tsx(353,1): error TS1381: Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
2.394 src/paginas/link-in-bio/LinkEnBio.tsx(356,1): error TS1005: '</' expected.
3.311 npm notice
3.311 npm notice New major version of npm available! 10.9.0 -> 11.12.1
3.311 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.12.1
3.311 npm notice To update run: npm install -g npm@11.12.1
3.311 npm notice
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
ERROR: failed to build: failed to solve: process "/bin/bash -ol pipefail -c npm run build" did not complete successfully: exit code: 2
##########################################
### Error
### Tue, 07 Apr 2026 20:51:13 GMT
##########################################

Command failed with exit code 1: docker buildx build --network host -f /etc/easypanel/projects/jesusgonzalez_oficial_web/app_jesusgonzalez/code/.nixpacks/Dockerfile -t easypanel/jesusgonzalez_oficial_web/app_jesusgonzalez --label 'keep=true' --build-arg 'GIT_SHA=5ccfeb9d6bd6933d704d44e6b0e8ae92532f794a' /etc/easypanel/projects/jesusgonzalez_oficial_web/app_jesusgonzalez/code/