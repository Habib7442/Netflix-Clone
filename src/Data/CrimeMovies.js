const CrimeMovies = [
    {
      id: 1,
      title: "Rush Hour 3",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdp9v3Dk44ziAgCaITJ4ICjB7HAb3L0Z6h1J4VyW6bxoSCwrLEmXDMDUlveRZfnFmZfV7hEiUZFCVNEZCmhDXASXCF4RSUxJqY0.jpg?r=cd9",
    },
    {
      id: 2,
      title: "Don",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZS1dh5YqwgH-tmy1Jl4LQGwAsIP-e14RbH8UxijRifuaabm0bDnAnO5z3IA3pTY0cqH3k8ZqhBYHXWx-LUCdyUHrwe2tRktjTE.jpg?r=ec5",
    },
  
    {
      id: 3,
      title: "Wild Dog",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQqkMAGdMoQA3HNMWqLVaFduXeMaDMb9EfFkkftFWTT11Le2E62vcwwbW1SHVs56GC8dkRA5tCqwSC07iPtNWMODX3ILbdKcjKg.jpg?r=bcc",
    },
    {
      id: 4,
      title: "CBI 5",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXln0VhzOHaVMkRxsV1tmyuF_yNas1MjDXSV8koITFwxV7uGY71xtwP1apJ6mTCPgFzfJSxjdwmjgR4wJQLUDv-0ZlQhXcPM5oI.jpg?r=7e9",
    },
  
    {
      id: 5,
      title: "The Equalizer 2",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTd0LbIfGRZFlY-tQNe5wnSC-H4BVyjSq6-zxGmIgbQ4JgTEl7lyP49tPlxda9h9ZECL5k40ae2lNMbWW-07ClkK3NZVcxAmzO0.jpg?r=cf9",
    },
    {
      id: 6,
      title: "Once Upon a Time in Mumbai",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXUkHfBMnSnW3H6JOiuO3meS5cgs_70I8tpteOt9pooyINSjvibGMyr-Jsm56VQffed2aMNCOW8u3z--4zZsoNzpprp2vZwCksQ.jpg?r=87f",
    },
    {
      id: 7,
      title: "Now You See Me",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUTlD4bA8M_D3_ndHsR0laddG_-6DYDM40k48kk0G0bNXLZOxVCjGlJDlbdzuBQ3QynTEq6BJm9JmquXksCD-7su-mQZI_72Peo.jpg?r=cce",
    },
    {
      id: 8,
      title: "Wanted",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYJO6c7HAa47Vz4kfBDhWI2FmUh0FGRfKbxN2lVXenNXGslWZue-HV-DifB_qC_GfW7rNBX3Kc7dMuKW05iYCVNB1nCGeSwO81I.jpg?r=138",
    },
    {
      id: 9,
      title: "Wrath of Man",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZLg6Gd7WyXfi_3JHa2rf3sLdM7Vx363B2Is5DfZDqybok3pkZ1JZPBCCHLm8RigIsAG0ZSVMdmtaqThPYLHffsMqI-nd9wRXhY.jpg?r=c9b",
    },
    {
      id: 10,
      title: "Andhadhun",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ0Nm__fsGcBXMYzhVJkvx4_xabmP-Uwa9keMsO9diIvDZjTisO9AfnMjZURKFLUvhDCzaQrx29DEpm5sBtPHaA_SHWzrnGYYVA.jpg?r=f11",
    },
    {
      id: 11,
      title: "Ittefaq",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeRfl7LNGyA0-Q4eRo3mytEhWB6m-APxwjdzBL3OhnHy-tyjPT7OOd39FTb0K4rOALVkW5v6hl8YT7_aBXkhsZMajdmSS4tQUQg.jpg?r=7b6",
    },
    {
      id: 12,
      title: "Article 15",
      img: "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUYzEeM0xJD6YuvvHBtTUFjEtbHdvbp5O4KURUQ1kSRc52u1qmetkpt-xsQRm1BuRR8lMpV4RbPUVp4lBNIwaSHHlFCtepEZPTI.jpg?r=329",
    },
  ];
  
  
  export default CrimeMovies;
  