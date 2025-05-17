// Types.
interface MainProps {
  children: React.ReactNode
}

// Component.
export default function Main({ children }: MainProps) {
  return <main className="px-5">{children}</main>
}
