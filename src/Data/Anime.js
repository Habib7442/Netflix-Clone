const Anime = [
    {
      id: 1,
      title: "Naruto",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX9wVB1rBMsD13YS3DomJwWRwUx6v-IcQ_axcI-_CtWYRZoqRbzqv_DDbJDqU-BY3Q3HBtZPuPkoEumVc9biakZKBKbmZAINDd8.jpg?r=c25",
    },
    {
      id: 2,
      title: "Naruto Shippuden",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdmYgy7ORQK07Dwst5DrWUeKcAo0p6cQHxqUwtxbRkfrPchPbZDBMZcvOHp8pRajyNnNJIG6eubUz5dCzJChVmshymTimB1OYc-hyuUxqD2Z3aO1xJvuuq_XD77GFKlHxaaBivOJWnXllWlc2kzaR9YCLGyma-gOcQWuhQ2Mzq2_i0GuDN-FWFaFeIVjs_gInYpMok9-t0rE1APnQhxHEAVgzbOlCvND1YnmGXyuGaoYOG6wsnZZ5UeNllRtwb6ue8HuLcrx-yaKaKpg5K5sETfU.jpg?r=882",
    },
  
    {
      id: 3,
      title: "Wild Dog",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQqkMAGdMoQA3HNMWqLVaFduXeMaDMb9EfFkkftFWTT11Le2E62vcwwbW1SHVs56GC8dkRA5tCqwSC07iPtNWMODX3ILbdKcjKg.jpg?r=bcc",
    },
    {
      id: 4,
      title: "Blue Lock",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ2VAwipiAHcCIVgSttIF1rDPVFd3Q5iV-QZhWLLIg1sZhG3tgvxcc_VSkbViY4J1uTGshHv8lNZUvIIcrZ9-AuI_OVDQM0ChJxUL6Ycb7E0bBTgnWPhgTzemSe55Vi3mLbKbOn0YlAxtBkpeJ12xMzXRF4N3fCEK0eFeAhj5Z8JgVJGv5_L7Yux3kmpOLwY7NXXebxksL0fRNy2-AlPmtEdPlLguDVEYx8Xza7megPY9mmlDUHoqAIr-4Sp4uggXWHYCQSO7tEb9TLB4PcgDy0aDSzgqMRaLhOtH77b__BC_3C-6GFfntm50ZY_XjDVY0A60-jFW4FaVHIAsuhlijKksMfxPRrJWiA9jufigywpThU0hmdmcH5GdLUyLXrBbqavUTUZtpZDnpCuzAikZFx5NZW1mbeBzPq_07IXFPW9.jpg?r=b36",
    },
  
    {
      id: 5,
      title: "Spy X Family",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ4HQWDVDUpGQZbshEeXw4xp7FxLLszH4M_xZMF2DiJ-TKOiJDrLQEP_hCsrZOqR5mW8hlYIRvZzRG3by13Ym44GcTp6Akt3hcTlAvTvBaWfPbQN5tAjO1WljNdLcuzZPkkDoMCHDB7cpeLOcSSJcICnxsOwkA2KrwkwmHRJzFNAY0DQGgWrkCh8bIVaTZeTbRdSlk_wCjEW3HtrLsvMaqNtLjlzhLeK2v8m_GH1g5FQ1m9NDWqyjcQsUKD5LpOqDHaz9T68xd4rXgFUQQP0z4ANMuEOMOQaRJtTggH8dioacf_InmIxFgxqTLM82PkJbgo39Kjj_BIz9Bf8jcim5j83oRFryn2Fn_wMzpZaZ32QcOYDvPdfRUBgV6wUJZQg12gGxEyGH3x0PuHD1SMJo7UpWXMaFnI539MkmhqPNDqp.jpg?r=af7",
    },
    {
      id: 6,
      title: "Jujutsu Kaisen",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSyPKLwfp5LU93qDlhm7URWWwdw-bghQJxbVVOVKfA-G0TRJRI4oR-KDEbTd2du996OHAzMd1V9GQruloswhgg5qncT2EgadLEY.jpg?r=739",
    },
    {
      id: 7,
      title: "My Hero Academia",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQi-1LCTTyFDuhL71-Ls16Z2G65sLTBQ5N-SponNjgQ9MC0AeZJ2lRA8bN-DVw9abX_Of9Ox1-kBktup6RNLhV6PxMoEGqbvh1LFW6B2qzbRUzZI56kahKg0H-y2StRFcrvo4u3cUBpIw6uMPGRW9Ti9mm8pKFPp9228TU0Y4BiwMyeBgvuy1wi8Egc9gp6GVETm4Kj7Wv0imyoI9-A84O61F3HApbodZ-SLXFUKenaV2sgS3xhi-vlpqcPcPtsilOnyiAKrDrvRgVMX2e6EFO4.jpg?r=49f",
    },
    {
      id: 8,
      title: "Demon Slayer",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY3i9mWvoYjI2Mb55R7MKI9ovM-FxQj3XByMxVdwT7-RUQ5e7gYJUk9ocgz33vqI0BdntPriyIGWYWnrR-n_j_Og1x-zG1RRB2c.jpg?r=5c2",
    },
    {
      id: 9,
      title: "One-Punch Man",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSQpZQ4j4WhGwjjhAqPW026m06f62EWxDiQfPyaQ06kM2TZ6skCpYqlHt9N8r1waMaL1VnmCJlng7vmuSm4kSdgQDPMrsuv5p9g.jpg?r=aed",
    },
    {
      id: 10,
      title: "Baki",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTkv1jRwHGZhU5iZAKMiE_GV3XSlcHFKY7I7GNO0KWzu1A-ImijR2b6KvwalHSzr2O9WOPMyNmYO967p3ikjgWPvDCXLlFCiLVLJKZtcrMOR4pBAC2iKqJeHiDkTZI-Z-hT7.jpg?r=cf6",
    },
    {
      id: 11,
      title: "The Seven Deadly Sins",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb0IDslSZtYOTCDBZckiWks8qdnAKswpuboPfrRbl05hJZT2xZNHiLCHOfO24_XnhPBAzEOr5psLr_51tfIgtm-7O-rMsYDv3KuQyUQ_PejGuC405mthrSh2cYGDktWsPmlS.jpg?r=c62",
    },
    {
      id: 12,
      title: "Black Cover",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTtncuahJs_48J_fRFkAN1jaQo4WLDGMua-C9AyQ980ogEFucSWPWZUQL4SBcvDlMJMBpWDUmbJyZK1fpZQey0jNzmzowVML7aE.jpg?r=299",
    },
  ];
  
  
  export default Anime;
  