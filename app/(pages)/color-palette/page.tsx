export default function ColorPalette() {
  const shadeSteps = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '950',
  ]

  const palettes = [
    {
      name: 'slate',
      swatches: [
        'bg-slate-50',
        'bg-slate-100',
        'bg-slate-200',
        'bg-slate-300',
        'bg-slate-400',
        'bg-slate-500',
        'bg-slate-600',
        'bg-slate-700',
        'bg-slate-800',
        'bg-slate-900',
        'bg-slate-950',
      ],
    },
    {
      name: 'gray',
      swatches: [
        'bg-gray-50',
        'bg-gray-100',
        'bg-gray-200',
        'bg-gray-300',
        'bg-gray-400',
        'bg-gray-500',
        'bg-gray-600',
        'bg-gray-700',
        'bg-gray-800',
        'bg-gray-900',
        'bg-gray-950',
      ],
    },
    {
      name: 'zinc',
      swatches: [
        'bg-zinc-50',
        'bg-zinc-100',
        'bg-zinc-200',
        'bg-zinc-300',
        'bg-zinc-400',
        'bg-zinc-500',
        'bg-zinc-600',
        'bg-zinc-700',
        'bg-zinc-800',
        'bg-zinc-900',
        'bg-zinc-950',
      ],
    },
    {
      name: 'neutral',
      swatches: [
        'bg-neutral-50',
        'bg-neutral-100',
        'bg-neutral-200',
        'bg-neutral-300',
        'bg-neutral-400',
        'bg-neutral-500',
        'bg-neutral-600',
        'bg-neutral-700',
        'bg-neutral-800',
        'bg-neutral-900',
        'bg-neutral-950',
      ],
    },
    {
      name: 'stone',
      swatches: [
        'bg-stone-50',
        'bg-stone-100',
        'bg-stone-200',
        'bg-stone-300',
        'bg-stone-400',
        'bg-stone-500',
        'bg-stone-600',
        'bg-stone-700',
        'bg-stone-800',
        'bg-stone-900',
        'bg-stone-950',
      ],
    },
    {
      name: 'red',
      swatches: [
        'bg-red-50',
        'bg-red-100',
        'bg-red-200',
        'bg-red-300',
        'bg-red-400',
        'bg-red-500',
        'bg-red-600',
        'bg-red-700',
        'bg-red-800',
        'bg-red-900',
        'bg-red-950',
      ],
    },
    {
      name: 'orange',
      swatches: [
        'bg-orange-50',
        'bg-orange-100',
        'bg-orange-200',
        'bg-orange-300',
        'bg-orange-400',
        'bg-orange-500',
        'bg-orange-600',
        'bg-orange-700',
        'bg-orange-800',
        'bg-orange-900',
        'bg-orange-950',
      ],
    },
    {
      name: 'amber',
      swatches: [
        'bg-amber-50',
        'bg-amber-100',
        'bg-amber-200',
        'bg-amber-300',
        'bg-amber-400',
        'bg-amber-500',
        'bg-amber-600',
        'bg-amber-700',
        'bg-amber-800',
        'bg-amber-900',
        'bg-amber-950',
      ],
    },
    {
      name: 'yellow',
      swatches: [
        'bg-yellow-50',
        'bg-yellow-100',
        'bg-yellow-200',
        'bg-yellow-300',
        'bg-yellow-400',
        'bg-yellow-500',
        'bg-yellow-600',
        'bg-yellow-700',
        'bg-yellow-800',
        'bg-yellow-900',
        'bg-yellow-950',
      ],
    },
    {
      name: 'lime',
      swatches: [
        'bg-lime-50',
        'bg-lime-100',
        'bg-lime-200',
        'bg-lime-300',
        'bg-lime-400',
        'bg-lime-500',
        'bg-lime-600',
        'bg-lime-700',
        'bg-lime-800',
        'bg-lime-900',
        'bg-lime-950',
      ],
    },
    {
      name: 'green',
      swatches: [
        'bg-green-50',
        'bg-green-100',
        'bg-green-200',
        'bg-green-300',
        'bg-green-400',
        'bg-green-500',
        'bg-green-600',
        'bg-green-700',
        'bg-green-800',
        'bg-green-900',
        'bg-green-950',
      ],
    },
    {
      name: 'emerald',
      swatches: [
        'bg-emerald-50',
        'bg-emerald-100',
        'bg-emerald-200',
        'bg-emerald-300',
        'bg-emerald-400',
        'bg-emerald-500',
        'bg-emerald-600',
        'bg-emerald-700',
        'bg-emerald-800',
        'bg-emerald-900',
        'bg-emerald-950',
      ],
    },
    {
      name: 'teal',
      swatches: [
        'bg-teal-50',
        'bg-teal-100',
        'bg-teal-200',
        'bg-teal-300',
        'bg-teal-400',
        'bg-teal-500',
        'bg-teal-600',
        'bg-teal-700',
        'bg-teal-800',
        'bg-teal-900',
        'bg-teal-950',
      ],
    },
    {
      name: 'cyan',
      swatches: [
        'bg-cyan-50',
        'bg-cyan-100',
        'bg-cyan-200',
        'bg-cyan-300',
        'bg-cyan-400',
        'bg-cyan-500',
        'bg-cyan-600',
        'bg-cyan-700',
        'bg-cyan-800',
        'bg-cyan-900',
        'bg-cyan-950',
      ],
    },
    {
      name: 'sky',
      swatches: [
        'bg-sky-50',
        'bg-sky-100',
        'bg-sky-200',
        'bg-sky-300',
        'bg-sky-400',
        'bg-sky-500',
        'bg-sky-600',
        'bg-sky-700',
        'bg-sky-800',
        'bg-sky-900',
        'bg-sky-950',
      ],
    },
    {
      name: 'blue',
      swatches: [
        'bg-blue-50',
        'bg-blue-100',
        'bg-blue-200',
        'bg-blue-300',
        'bg-blue-400',
        'bg-blue-500',
        'bg-blue-600',
        'bg-blue-700',
        'bg-blue-800',
        'bg-blue-900',
        'bg-blue-950',
      ],
    },
    {
      name: 'indigo',
      swatches: [
        'bg-indigo-50',
        'bg-indigo-100',
        'bg-indigo-200',
        'bg-indigo-300',
        'bg-indigo-400',
        'bg-indigo-500',
        'bg-indigo-600',
        'bg-indigo-700',
        'bg-indigo-800',
        'bg-indigo-900',
        'bg-indigo-950',
      ],
    },
    {
      name: 'violet',
      swatches: [
        'bg-violet-50',
        'bg-violet-100',
        'bg-violet-200',
        'bg-violet-300',
        'bg-violet-400',
        'bg-violet-500',
        'bg-violet-600',
        'bg-violet-700',
        'bg-violet-800',
        'bg-violet-900',
        'bg-violet-950',
      ],
    },
    {
      name: 'purple',
      swatches: [
        'bg-purple-50',
        'bg-purple-100',
        'bg-purple-200',
        'bg-purple-300',
        'bg-purple-400',
        'bg-purple-500',
        'bg-purple-600',
        'bg-purple-700',
        'bg-purple-800',
        'bg-purple-900',
        'bg-purple-950',
      ],
    },
    {
      name: 'fuchsia',
      swatches: [
        'bg-fuchsia-50',
        'bg-fuchsia-100',
        'bg-fuchsia-200',
        'bg-fuchsia-300',
        'bg-fuchsia-400',
        'bg-fuchsia-500',
        'bg-fuchsia-600',
        'bg-fuchsia-700',
        'bg-fuchsia-800',
        'bg-fuchsia-900',
        'bg-fuchsia-950',
      ],
    },
    {
      name: 'pink',
      swatches: [
        'bg-pink-50',
        'bg-pink-100',
        'bg-pink-200',
        'bg-pink-300',
        'bg-pink-400',
        'bg-pink-500',
        'bg-pink-600',
        'bg-pink-700',
        'bg-pink-800',
        'bg-pink-900',
        'bg-pink-950',
      ],
    },
    {
      name: 'rose',
      swatches: [
        'bg-rose-50',
        'bg-rose-100',
        'bg-rose-200',
        'bg-rose-300',
        'bg-rose-400',
        'bg-rose-500',
        'bg-rose-600',
        'bg-rose-700',
        'bg-rose-800',
        'bg-rose-900',
        'bg-rose-950',
      ],
    },
  ]

  const customColorGroups: {
    title: string
    colors: { name: string; className: string }[]
  }[] = [
    {
      title: 'Base',
      colors: [
        { name: 'background', className: 'bg-background' },
        { name: 'foreground', className: 'bg-foreground' },
      ],
    },
    {
      title: 'Card',
      colors: [
        { name: 'card', className: 'bg-card' },
        { name: 'card-foreground', className: 'bg-card-foreground' },
      ],
    },
    {
      title: 'Popover',
      colors: [
        { name: 'popover', className: 'bg-popover' },
        { name: 'popover-foreground', className: 'bg-popover-foreground' },
      ],
    },
    {
      title: 'Primary',
      colors: [
        { name: 'primary', className: 'bg-primary' },
        { name: 'primary-foreground', className: 'bg-primary-foreground' },
      ],
    },
    {
      title: 'Secondary',
      colors: [
        { name: 'secondary', className: 'bg-secondary' },
        { name: 'secondary-foreground', className: 'bg-secondary-foreground' },
      ],
    },
    {
      title: 'Muted',
      colors: [
        { name: 'muted', className: 'bg-muted' },
        { name: 'muted-foreground', className: 'bg-muted-foreground' },
      ],
    },
    {
      title: 'Accent',
      colors: [
        { name: 'accent', className: 'bg-accent' },
        { name: 'accent-foreground', className: 'bg-accent-foreground' },
      ],
    },
    {
      title: 'Destructive',
      colors: [{ name: 'destructive', className: 'bg-destructive' }],
    },
    {
      title: 'Border / Input / Ring',
      colors: [
        { name: 'border', className: 'bg-border' },
        { name: 'input', className: 'bg-input' },
        { name: 'ring', className: 'bg-ring' },
      ],
    },
    {
      title: 'Chart',
      colors: [
        { name: 'chart-1', className: 'bg-chart-1' },
        { name: 'chart-2', className: 'bg-chart-2' },
        { name: 'chart-3', className: 'bg-chart-3' },
        { name: 'chart-4', className: 'bg-chart-4' },
        { name: 'chart-5', className: 'bg-chart-5' },
      ],
    },
    {
      title: 'Sidebar',
      colors: [
        { name: 'sidebar', className: 'bg-sidebar' },
        { name: 'sidebar-foreground', className: 'bg-sidebar-foreground' },
        { name: 'sidebar-primary', className: 'bg-sidebar-primary' },
        {
          name: 'sidebar-primary-foreground',
          className: 'bg-sidebar-primary-foreground',
        },
        { name: 'sidebar-accent', className: 'bg-sidebar-accent' },
        {
          name: 'sidebar-accent-foreground',
          className: 'bg-sidebar-accent-foreground',
        },
        { name: 'sidebar-border', className: 'bg-sidebar-border' },
        { name: 'sidebar-ring', className: 'bg-sidebar-ring' },
      ],
    },
    {
      title: 'Editor',
      colors: [
        { name: 'background', className: 'bg-editor-background' },
        { name: 'foreground', className: 'bg-editor-foreground' },
        { name: 'line-number', className: 'bg-editor-line-number' },
        { name: 'accent-1', className: 'bg-editor-accent-1' },
        {
          name: 'accent-1-foreground',
          className: 'bg-editor-accent-1-foreground',
        },
        { name: 'accent-2', className: 'bg-editor-accent-2' },
        {
          name: 'accent-2-foreground',
          className: 'bg-editor-accent-2-foreground',
        },
      ],
    },
  ]

  return (
    <main className="mx-auto flex w-full h-full max-w-6xl flex-col gap-8 px-6 py-10 overflow-auto">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Color Palette</h1>
        <p className="text-sm text-muted-foreground">
          Tailwind default colors with every shade from 50 to 950.
        </p>
      </header>

      <section className="flex flex-col gap-8">
        <h2 className="text-lg font-medium">Custom theme colors</h2>
        <p className="text-sm text-muted-foreground -mt-6">
          Colors defined in globals.css (respect light/dark mode).
        </p>
        {customColorGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-3 text-muted-foreground font-mono text-xs sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.colors.map(({ name, className }) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <div
                    aria-label={`${group.title} ${name}`}
                    className={`h-14 w-full rounded-md border border-black/10 shadow-sm ${className}`}
                  />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <div className="hidden min-w-[720px] grid-cols-[120px_repeat(11,1fr)] gap-3 text-xs text-muted-foreground sm:grid">
          <span />
          {shadeSteps.map((shade) => (
            <span key={shade} className="text-center">
              {shade}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {palettes.map((palette) => (
            <div
              key={palette.name}
              className="flex flex-col gap-2 sm:grid sm:min-w-[720px] sm:grid-cols-[120px_repeat(11,1fr)] sm:items-center sm:gap-3"
            >
              <span className="text-sm font-medium capitalize">
                {palette.name}
              </span>
              <div className="grid grid-cols-6 gap-2 sm:col-span-11 sm:grid-cols-11 sm:gap-3">
                {palette.swatches.map((swatch, index) => (
                  <div key={`${palette.name}-${swatch}`}>
                    <div
                      aria-label={`${palette.name} ${shadeSteps[index]}`}
                      className={`h-10 w-full rounded-md border border-black/5 shadow-sm ${swatch}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
