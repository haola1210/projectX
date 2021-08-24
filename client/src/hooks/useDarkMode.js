import { useEffect, useState } from "react"

const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light")
    let nextTheme = theme === "dark" ? "light" : "dark"
    
    useEffect(() => {
        const root = window.document.documentElement  //root element
        
        console.log(theme, nextTheme)

        root.classList.remove(nextTheme)
        root.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme, nextTheme])

    return [nextTheme, setTheme]
}
export default useDarkMode