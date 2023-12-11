import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: ['coffee',"lemonade","luxury","retro", "dark", "cupcake","synthwave"],
  },
  plugins: [require('daisyui')],
  theme: {
    colors:{
      primary: "#05386B",
      secondary: "#379683",
      ternary: "#5CDB95",
      tetra: "#8EE4AF",
      penta: "#EDF5E1",
      
    },
    fontFamily: { 
      Sregular:"League Spartan",
      Sbold: "League Spartan Bold",
      Sxbold: "League Spartan ExtraBold",
      Sxblack: "League Spartan Black",
  },     

    }
  }
  

export default config
