type Branch = { label: string; children?: string[] };
type Role = { title: string; root: string; branches: Branch[] };

const roles: Role[] = [
  {
    title: "Procurement Manager",
    root: "Procurement Manager Dashboard",
    branches: [
      { label: "Overview KPI's" },
      { label: "Purchase Requests", children: ["Create Request", "Request Details", "Request Status"] },
      { label: "Purchase Orders", children: ["Create PO", "PO History", "PO Tracking"] },
      { label: "Vendors", children: ["Vendor Performance", "Vendor List", "Add/Edit Vendor"] },
      { label: "Approvals", children: ["Pending Approvals", "Approval History"] },
      { label: "Reports & Analytics", children: ["Spend Overview", "Procurement Trends"] },
      { label: "Settings" },
    ],
  },
  {
    title: "Finance Officer",
    root: "Finance Officer Dashboard",
    branches: [
      { label: "Dashboard Overview" },
      { label: "Invoices & Payment", children: ["Pending Payments", "Payment History", "Upload Invoice"] },
      { label: "Purchase Orders", children: ["PO Summary", "PO Details"] },
      { label: "Budget Allocation", children: ["Department Budgets", "Budget Utilization"] },
      { label: "Approvals" },
      { label: "Reports & Analytics", children: ["Spend Overview", "Financial Report"] },
      { label: "Settings" },
    ],
  },
  {
    title: "Vendor",
    root: "Vendor Dashboard",
    branches: [
      { label: "Dashboard Overview" },
      { label: "Invoices", children: ["Invoice History", "Payment Status"] },
      { label: "Purchase Orders", children: ["PO Details", "Upload Invoice"] },
      { label: "Approvals", children: ["Delivery Schedule", "Status Tracking"] },
      { label: "Profile & Documents" },
      { label: "Settings" },
    ],
  },
];

function RoleTree({ role }: { role: Role }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2.5">
        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
          {role.title}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="rounded-xl border border-border bg-background px-4 py-2.5 self-start">
        <p className="text-sm font-medium">{role.root}</p>
      </div>

      <div className="relative -mx-1">
        <div className="flex gap-3 overflow-x-auto pb-1 px-1">
          {role.branches.map((branch) => (
            <div
              key={branch.label}
              className="shrink-0 w-[168px] rounded-xl border border-border bg-background p-3 flex flex-col gap-2"
            >
              <p className="text-xs font-medium">{branch.label}</p>
              {branch.children && (
                <div className="flex flex-col gap-1.5 pt-1 border-t border-border">
                  {branch.children.map((child) => (
                    <p key={child} className="text-xs text-muted leading-snug">
                      {child}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-1 w-12 bg-gradient-to-l from-surface to-transparent" />
      </div>
    </div>
  );
}

export function RoleArchitecture() {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex items-center gap-1.5 text-xs text-muted">
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0">
          <path
            d="M8 7L4 12L8 17M16 7L20 12L16 17"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Scroll each dashboard sideways to see its full structure
      </p>
      {roles.map((role) => (
        <RoleTree key={role.title} role={role} />
      ))}
    </div>
  );
}
