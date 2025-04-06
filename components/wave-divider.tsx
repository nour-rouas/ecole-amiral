export default function WaveDivider({ className }: { className?: string }) {
  return <div className={`wave-divider ${className || ""}`} aria-hidden="true"></div>
}

