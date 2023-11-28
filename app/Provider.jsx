"use client"
import { ThemeProvider } from "next-themes"

function Provider({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <div className="dark:bg-[#232529] dark:text-gray-200 text-[#333333] bg-white min-h-screen select-none">
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Provider