const SuspenseMovies = [
    {
      id: 1,
      title: "Blackout",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaAm7-34sHtYqp45KKxANMYsTu5Og_uL8wc2b5KsxBw1MK8iMb7PpXWsfLSYMJuYJC-aJzkJEfqlyCSVYvw8-T13g3ecWoqG3F4.jpg?r=dbb",
    },
    {
      id: 2,
      title: "Spider-Man: No way Home",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTq1sk7RnGz6KIVhQUwMMD4LZp7_qbezjQK35MICw4_4CDT6aohwFN8VUgg-8A4j-7WFCwK2zC4dsn7Be6-MZzOJhrq8jNvA_q8.jpg?r=9d9",
    },
  
    {
      id: 3,
      title: "Insidious: Chapter 2",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY37wzQ5HwtgIzPy3QoL7UF11C3c0g0OS1-bivZb6d0FtjANKReu7IQQyej9UCJxeNJtIDaF76C5K95q08Sm5wuVNBwSobExoQ8.jpg?r=98d",
    },
    {
      id: 4,
      title: "Wrath of Man",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZLg6Gd7WyXfi_3JHa2rf3sLdM7Vx363B2Is5DfZDqybok3pkZ1JZPBCCHLm8RigIsAG0ZSVMdmtaqThPYLHffsMqI-nd9wRXhY.jpg?r=c9b",
    },
  
    {
      id: 5,
      title: "The Hunt",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd4RnDcxznkfkzWA97_npATi5lG2xjXqll7o7Z7tqWEErNetsJq_Y3eKVbBTULydBNZQsBpdtyXz3Vx_mya2v_bxJeFwj6F1M3E.jpg?r=1d7",
    },
    {
      id: 6,
      title: "Against The Ice",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcdtx1UjuzFPR4P4s0Ow-r17dvtSEnP7rEiGFQW1JlRE-SGvEmEvD0b3wgETlacJWxGkCTLDvvaUGaZNKMTFEqeVRn2eG73gDrX0_7zSwqheASldut92DplENqZez4NW152m.jpg?r=98e",
    },
    {
      id: 7,
      title: "Army of Thieves",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSfc0pfu45Bma-Qvh6-H--jx5i9bbbU3PyNXpK-aHC0uZbOsOaMyyMAE7l8UXQJBSglMWpJYW7-ZkBY9HEoAlnTcU3FRihyBCgF-i7IBw5E_lVXQNcPLsgElYCOj-ozs6vmi.jpg?r=c75",
    },
    {
      id: 8,
      title: "Escape Room",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeWqL7Hi7o-xxhQJ3jlWsfqiJLA2Jb0q-07PVazG901AlGTUQop5kXGywo5hAnySA541feJK2rAIAzfC_q8wqs0JljRIYHo7JrA.jpg?r=780",
    },
    {
      id: 9,
      title: "Dobaara",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSLjZ8zyzooXHOcBEXSKnI90rWv6X6r1jUIoxJE1kJeNaf6PedajdNLKcZRD9RyGTMIaRe9Ko2uhYx1zsGgcZ4vpGlUB10k6jc8.jpg?r=8e7",
    },
    {
      id: 10,
      title: "Escape Room",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT3pnY23udGcSdy0kHqhMuNb749DyYNOZb9jFZmEp9Y5594o3k3vWhVlizAMiQX2vYDl1VtSvQguZ2rNpYV0wSPe8JnBg-5DoCo.jpg?r=f2b",
    },
    {
      id: 11,
      title: "The Italian Job",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABctwCCasfPSiCnzfzi8Kmh9v0lZ3Vhagip0WVEe9u1fe_1XPlIu_Pe0bGzQF350wq0QNiZFsRwi8eJToevzb4AbPMSNPokp4Ty4.jpg?r=225",
    },
    {
      id: 12,
      title: "Don't Breathe 2",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ61tnp7os6eCJNljp59qVUqe-u-HBrHDPDn9gsMQb5XeAZJB08sGVkgjAufU89bk7TZALjRZyWmp18StsXBBJTxsJhQMCHmXag.jpg?r=bd6",
    },
    {
      id: 13,
      title: "The Silence",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRiykonCK_7mxdEwOBTJKC6d1e7f1FoKkT3b55KQH3vju9nxtRgQoYPg6d0gxn9_xMJajMvIF1G1jXmq1Z0s5kkw-bXU6wSem-ijnp8a4PU04Mp84gaxRLSTh_nZYk8WIKi7.jpg?r=60c",
    },
    {
      id: 14,
      title: "The One Gets Out Alive",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqpaYVbhL5ea0DEJmLwbHe49_K7Ljm4EASpSB7jPJfQxKSfEX2aKmEv2wWfZIyIls-z2e61WjcUr3aycYSwl6HC3kdnXpx9mpC_xqc0F8ZenWVO45LcNYYGH8fnZ6Awc_dv.jpg?r=d64",
    },
    {
      id: 15,
      title: "Goosebumps",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ3NDFifrpk2Klt8QeabBshTTXY6-0Cll0n15RCHKVCYgKnwag3ur5l84XbYQt6lkvYw7QCT98pituFDs8UOVG-oROQPdlWSJhU.jpg?r=529",
    },
    {
      id: 16,
      title: "Nightbooks",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcRk6lIqSlII9lAuGieKbzxHMCkZN-SDWP06rf21f6WzUJ5PshstLSSkLg4BJQMWb5wJp-sR4RVP7Cy1zSMfO6K_0zbNhavW3C-WT_98nJSYtx4J8apvjcdeUwWx6vV-PRHQ.jpg?r=e50",
    },
    {
      id: 17,
      title: "Final Destination",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcIlAE15Gt8rlWQORo_FAXD5vpftXnRuOn0mNlklfYvI0AN4Nj2IMI0zapCeQvJWXqrU7tFbV9Y3N9aB1dTP1h47lw0H9nR8tBs.jpg?r=fbf",
    },
    {
      id: 18,
      title: "The Mummy",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS-j8MsIn_ygG7LR2WK_E_iSr7Mr5N1-d2g8YfIIytpf4N3tEM0c8XfxMhPPLYkD-eeQvcPvEaIrtGyzX2tp34lZ8OhQOd2tFSs.jpg?r=06e",
    },
    {
      id: 19,
      title: "The Forgotten Battle",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRl-iAe_r7N2CQE2PZmS76XF4GXzG--ZSoRT5MCl_asaDsdEnXzA7v3VfzT7zmi9TksgHfprt-TucYSvBexuTFlLX_HEhieMh6GAvJ2i2mADpP17iPc4cClp3GTzdiPNdLRs.jpg?r=1a4",
    },
    {
      id: 20,
      title: "Tenet",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSMOQohBfvZcORHcolUnSuO2clpjuRL_wEtCEH3_BY3zj3s2YQLMMB3Gpyza5kOQJtWDTNcSjRMCi0VKA6tdEemYbv7KN3zwCus.jpg?r=f85",
    },
  ];
  
  
  export default SuspenseMovies;
  