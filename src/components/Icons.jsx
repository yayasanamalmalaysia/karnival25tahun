const Icon = ({ children, size = 24, className = '', ...props }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    {children}
  </svg>
)

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ArrowRight = (props) => (
  <Icon {...props}><path d="M5 12h13M13 6l6 6-6 6" {...stroke} /></Icon>
)
export const Calendar = (props) => (
  <Icon {...props}><path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" {...stroke} /></Icon>
)
export const MapPin = (props) => (
  <Icon {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" {...stroke} /><circle cx="12" cy="10" r="2.5" {...stroke} /></Icon>
)
export const Menu = (props) => (
  <Icon {...props}><path d="M4 7h16M4 12h16M4 17h16" {...stroke} /></Icon>
)
export const Close = (props) => (
  <Icon {...props}><path d="m6 6 12 12M18 6 6 18" {...stroke} /></Icon>
)
export const ChevronDown = (props) => (
  <Icon {...props}><path d="m6 9 6 6 6-6" {...stroke} /></Icon>
)
export const Run = (props) => (
  <Icon {...props}><circle cx="14" cy="4.5" r="2" {...stroke} /><path d="m12 8-3 4 3 2 2.5 5M12 8l4 3 3-1M9 12l-4 5M12 14l4-1" {...stroke} /></Icon>
)
export const Bike = (props) => (
  <Icon {...props}><circle cx="6" cy="17" r="3" {...stroke} /><circle cx="18" cy="17" r="3" {...stroke} /><path d="m6 17 4-7h3l3 7M10 10l-2-2M13 10l3-2h2M9 13h6" {...stroke} /></Icon>
)
export const Shirt = (props) => (
  <Icon {...props}><path d="M8 4 3 7l2 5 3-1v9h8v-9l3 1 2-5-5-3c-1 2-7 2-8 0Z" {...stroke} /></Icon>
)
export const Check = (props) => (
  <Icon {...props}><path d="m5 12 4 4L19 6" {...stroke} /></Icon>
)
export const Info = (props) => (
  <Icon {...props}><circle cx="12" cy="12" r="9" {...stroke} /><path d="M12 11v6M12 7h.01" {...stroke} /></Icon>
)
export const Lock = (props) => (
  <Icon {...props}><rect x="5" y="10" width="14" height="10" rx="2" {...stroke} /><path d="M8 10V7a4 4 0 0 1 8 0v3" {...stroke} /></Icon>
)
export const Family = (props) => (
  <Icon {...props}><circle cx="8" cy="7" r="2.5" {...stroke} /><circle cx="16" cy="8" r="2" {...stroke} /><path d="M3 19v-3a5 5 0 0 1 10 0v3M13 19v-2a4 4 0 0 1 8 0v2" {...stroke} /></Icon>
)
export const Child = (props) => (
  <Icon {...props}><circle cx="12" cy="6" r="2.5" {...stroke} /><path d="M12 9v6M7 12l5 2 5-2M9 21l3-6 3 6" {...stroke} /></Icon>
)
export const Booth = (props) => (
  <Icon {...props}><path d="M4 10h16v10H4zM3 10l2-6h14l2 6M8 20v-6h4v6M3 10c1.5 2 3 2 4.5 0 1.5 2 3 2 4.5 0 1.5 2 3 2 4.5 0 1.5 2 3 2 4.5 0" {...stroke} /></Icon>
)
export const Bag = (props) => (
  <Icon {...props}><path d="M5 8h14l1 12H4L5 8ZM9 8a3 3 0 0 1 6 0" {...stroke} /></Icon>
)
export const Stage = (props) => (
  <Icon {...props}><path d="M5 20V8l7-4 7 4v12M5 12h14M9 12v8M15 12v8M2 20h20" {...stroke} /><path d="m9 7 3 2 3-2" {...stroke} /></Icon>
)
export const Community = (props) => (
  <Icon {...props}><path d="M8 12c-3-2-5-1-5 1 0 4 9 8 9 8s9-4 9-8c0-2-2-3-5-1l-4 3-4-3Z" {...stroke} /><path d="M8 8a4 4 0 0 1 8 0" {...stroke} /></Icon>
)
export const Exhibition = (props) => (
  <Icon {...props}><rect x="4" y="5" width="16" height="12" rx="2" {...stroke} /><path d="m7 14 3-3 2 2 3-4 2 2M9 21h6M12 17v4" {...stroke} /></Icon>
)
export const Food = (props) => (
  <Icon {...props}><path d="M5 4v7M8 4v7M5 8h3M6.5 11v9M16 4v16M16 4c3 2 3 7 0 9" {...stroke} /></Icon>
)

export const ACTIVITY_ICONS = {
  run: Run,
  bike: Bike,
  family: Family,
  child: Child,
  booth: Booth,
  bag: Bag,
  stage: Stage,
  community: Community,
  exhibition: Exhibition,
  food: Food,
}
