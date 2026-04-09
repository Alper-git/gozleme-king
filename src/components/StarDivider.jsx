export default function StarDivider({ color = '#c9a84c' }) {
  return (
    <div className="flex items-center justify-center gap-3.5 mx-auto mb-9 max-w-[180px]">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${color})` }} />
      <svg width="16" height="16" viewBox="0 0 20 20" fill={color}>
        <polygon points="10,0 12.4,7.6 20,7.6 13.8,12.4 16.2,20 10,15.2 3.8,20 6.2,12.4 0,7.6 7.6,7.6" />
      </svg>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${color})` }} />
    </div>
  )
}
