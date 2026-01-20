import tailwindConfig from "./tailwind.config"

const config = {
  plugins: {
    "@tailwindcss/postcss": { tailwindConfig },
  },
}

export default config
