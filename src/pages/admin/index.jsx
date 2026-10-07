import { useState } from "react";
import {
  FaArrowTrendUp,
  FaBars,
  FaBell,
  FaCalendarDays,
  FaChevronDown,
  FaCircleCheck,
  FaGear,
  FaHouse,
  FaImages,
  FaMagnifyingGlass,
  FaPlus,
  FaScissors,
  FaUserGroup,
  FaXmark,
} from "react-icons/fa6";
import whiteLogo from "../../assets/images/Logo-white.png";

const navigation = [
  { label: "Overview", icon: FaHouse },
  { label: "Tattoo style", icon: FaScissors },
  { label: "Tattoo stuffs", icon: FaImages },
  { label: "Clothes", icon: FaUserGroup },
];

const tattooStyles = [
  {
    name: "Fine line",
    detail: "Delicate outlines · Botanical",
    artist: "Popular",
    tone: "bg-[#f4c6a3]",
  },
  {
    name: "Traditional",
    detail: "Bold lines · Classic color",
    artist: "Popular",
    tone: "bg-[#d9e0df]",
  },
  {
    name: "Blackwork",
    detail: "Solid black · Abstract",
    artist: "New",
    tone: "bg-[#dedbd0]",
  },
];

const activity = [
  {
    title: "New booking confirmed",
    description: "Maya Chen booked a fine line session",
    time: "12 min ago",
    icon: FaCircleCheck,
  },
  {
    title: "Flash collection updated",
    description: "R. Vale added 4 new designs",
    time: "48 min ago",
    icon: FaImages,
  },
  {
    title: "Payment received",
    description: "$180 deposit from Jordan Ellis",
    time: "2 hrs ago",
    icon: FaArrowTrendUp,
  },
];

const initialRecords = {
  "Tattoo style": [
    {
      id: 1,
      name: "Fine line",
      detail: "Delicate outlines · Botanical",
      artist: "Popular style",
      status: "Published",
    },
    {
      id: 2,
      name: "Traditional",
      detail: "Bold lines · Classic color",
      artist: "Popular style",
      status: "Published",
    },
    {
      id: 3,
      name: "Blackwork",
      detail: "Solid black · Abstract",
      artist: "Popular style",
      status: "Draft",
    },
  ],
  "Tattoo stuffs": [
    {
      id: 1,
      name: "Tattoo machine",
      detail: "Rotary pen · Studio essential",
      artist: "Equipment",
      status: "In stock",
    },
    {
      id: 2,
      name: "Ink set",
      detail: "Primary colors · 12 bottles",
      artist: "Supplies",
      status: "In stock",
    },
    {
      id: 3,
      name: "Needle cartridges",
      detail: "Round liner · Box of 20",
      artist: "Supplies",
      status: "Low stock",
    },
  ],
  Clothes: [
    {
      id: 1,
      name: "Heavyweight studio tee",
      detail: "Cotton · Black · Sizes S-XXL",
      artist: "Tops",
      status: "Published",
    },
    {
      id: 2,
      name: "Workwear overshirt",
      detail: "Canvas · Olive · Sizes S-XL",
      artist: "Layers",
      status: "Published",
    },
    {
      id: 3,
      name: "Flash club cap",
      detail: "Cotton twill · One size",
      artist: "Accessories",
      status: "Draft",
    },
  ],
  "Flash library": [
    {
      id: 1,
      name: "Wild rose",
      detail: "Botanical · Fine line",
      artist: "Mina Park",
      status: "Published",
    },
    {
      id: 2,
      name: "Lucky tiger",
      detail: "Traditional · Color",
      artist: "Rory Vale",
      status: "Published",
    },
    {
      id: 3,
      name: "Orbital study",
      detail: "Abstract · Blackwork",
      artist: "Sage Morgan",
      status: "Draft",
    },
  ],
};

const resourceConfig = {
  "Tattoo style": {
    singular: "tattoo style",
    fields: ["name", "detail", "artist", "status"],
  },
  "Tattoo stuffs": {
    singular: "tattoo item",
    fields: ["name", "detail", "artist", "status"],
  },
  Clothes: {
    singular: "clothing item",
    fields: ["name", "detail", "artist", "status"],
  },
};

function ResourceManager({ resource, records, onSave, onBack }) {
  const config = resourceConfig[resource];
  const [query, setQuery] = useState("");
  const [editingRecord, setEditingRecord] = useState(null);
  const filteredRecords = records.filter((record) =>
    Object.values(record).some((value) =>
      String(value).toLowerCase().includes(query.toLowerCase()),
    ),
  );

  function submitRecord(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const record = Object.fromEntries(
      config.fields.map((field) => [field, formData.get(field)]),
    );
    onSave({ ...(editingRecord || {}), ...record });
    setEditingRecord(null);
  }

  return (
    <section className="mx-auto max-w-360 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#a84f4c]">
            ← Overview
          </button>
          <h2 className="mt-4 text-4xl tracking-[-0.06em] sm:text-5xl">
            {resource}.
          </h2>
          <p className="mt-3 font-sans text-sm text-[#7b878b]">
            Manage your studio {config.singular}s in one place.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setEditingRecord({})}
          className="button button--dark self-start border-0 font-sans text-[11px] font-bold uppercase tracking-[0.12em] sm:self-auto">
          <FaPlus /> New {config.singular}
        </button>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-4 border-y border-[#d2d0c8] py-4 sm:flex-row sm:items-center">
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#7b878b]">
          {filteredRecords.length} records
        </p>
        <label className="flex items-center gap-3 border border-[#c5c4bd] bg-[#f8f6f0] px-3 py-2">
          <FaMagnifyingGlass className="text-xs text-[#a84f4c]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Search ${config.singular}s`}
            className="w-full bg-transparent font-sans text-xs outline-none placeholder:text-[#a0a5a3] sm:w-56"
          />
        </label>
      </div>

      {editingRecord && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#17283b]/55 px-5 py-8">
          <div className="w-full max-w-lg border border-[#d2d0c8] bg-[#f8f6f0] p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#a84f4c]">
                  {editingRecord.id ? "Edit record" : "Create record"}
                </p>
                <h3 className="mt-2 text-3xl tracking-tighter">
                  {editingRecord.id
                    ? `Update ${config.singular}`
                    : `New ${config.singular}`}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingRecord(null)}
                className="text-xl text-[#536269]"
                aria-label="Close form">
                ×
              </button>
            </div>
            <form onSubmit={submitRecord} className="mt-7 space-y-4">
              {config.fields.map((field) => (
                <label key={field} className="block">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#536269]">
                    {field === "artist" ? "Assigned to" : field}
                  </span>
                  <input
                    name={field}
                    defaultValue={editingRecord[field] || ""}
                    required
                    className="mt-2 w-full border border-[#c5c4bd] bg-transparent px-3 py-3 font-sans text-sm outline-none focus:border-[#a84f4c]"
                  />
                </label>
              ))}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingRecord(null)}
                  className="border border-[#c5c4bd] px-4 py-3 font-sans text-[10px] font-bold uppercase tracking-[0.12em]">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#17283b] px-4 py-3 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#f3f0e9]">
                  Save record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [records, setRecords] = useState(initialRecords);

  function saveRecord(resource, record) {
    setRecords((currentRecords) => ({
      ...currentRecords,
      [resource]: record.id
        ? currentRecords[resource].map((item) =>
            item.id === record.id ? record : item,
          )
        : [...currentRecords[resource], { ...record, id: Date.now() }],
    }));
  }

  function deleteRecord(resource, recordId) {
    setRecords((currentRecords) => ({
      ...currentRecords,
      [resource]: currentRecords[resource].filter(
        (record) => record.id !== recordId,
      ),
    }));
  }

  return (
    <div className="min-h-screen bg-[#f2f0ea] text-[#17283b] lg:flex">
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-69.5 flex-col bg-[#17283b] px-7 py-7 text-[#f3f0e9] transition-transform duration-300 lg:static lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="Home Tattoo home">
            <img
              src={whiteLogo}
              alt="Home Tattoo logo"
              className="h-50 object-contain justify-content-around"
            />
          </a>
          <button
            type="button"
            className="text-xl text-[#c9d1cf] lg:hidden"
            aria-label="Close navigation"
            onClick={() => setIsSidebarOpen(false)}>
            <FaXmark />
          </button>
        </div>

        <div className="mt-16">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e9ba2]">
            Workspace
          </p>
          <nav className="mt-4 space-y-1" aria-label="Admin navigation">
            {navigation.map(({ label, icon: Icon, count }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setActiveNav(label);
                  setIsSidebarOpen(false);
                }}
                className={`flex w-full items-center gap-4 px-3 py-3 text-left font-sans text-sm transition-colors ${activeNav === label ? "bg-[#a84f4c] text-[#fff8f0]" : "text-[#c9d1cf] hover:bg-[#263b4d]"}`}>
                <Icon className="w-4 text-base" />
                <span>{label}</span>
                {count && (
                  <span className="ml-auto text-xs text-[#f4c6a3]">
                    {count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-[#3b4b59] pt-5">
          <button
            type="button"
            className="flex w-full items-center gap-4 px-3 py-3 text-left font-sans text-sm text-[#c9d1cf] hover:bg-[#263b4d]">
            <FaGear className="text-base" /> Settings
          </button>
          <div className="mt-5 flex items-center gap-3 border-t border-[#3b4b59] pt-5">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#e9a976] font-serif text-lg text-[#17283b]">
              AL
            </div>
            <div>
              <p className="font-sans text-xs font-bold">Alex Lee</p>
              <p className="mt-0.5 font-sans text-[10px] uppercase tracking-[0.12em] text-[#8e9ba2]">
                Studio owner
              </p>
            </div>
            <FaChevronDown className="ml-auto text-xs text-[#8e9ba2]" />
          </div>
        </div>
      </aside>

      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-30 bg-[#17283b]/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="min-w-0 flex-1">
        <header className="flex h-20.5 items-center justify-between border-b border-[#d2d0c8] bg-[#f2f0ea] px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="grid h-9 w-9 place-items-center border border-[#c5c4bd] text-lg lg:hidden"
              aria-label="Open navigation"
              onClick={() => setIsSidebarOpen(true)}>
              <FaBars />
            </button>
            <div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#a84f4c]">
                Tuesday, September 22, 2026
              </p>
              <h1 className="mt-1 text-2xl tracking-[-0.04em] sm:text-3xl">
                Good morning, Alex.
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              type="button"
              className="relative grid h-9 w-9 place-items-center border border-[#c5c4bd] text-sm"
              aria-label="Notifications">
              <FaBell />
              <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#a84f4c]" />
            </button>
            <button
              type="button"
              className="hidden items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest sm:flex">
              This week <FaChevronDown className="text-[10px]" />
            </button>
          </div>
        </header>

        {activeNav === "Overview" ? (
          <div className="mx-auto max-w-360 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#7b878b]">
                  Studio overview
                </p>
                <h2 className="mt-2 text-4xl tracking-[-0.06em] sm:text-5xl">
                  A clear week ahead.
                </h2>
              </div>
            </div>

            <section
              className="mt-8 grid gap-px border border-[#d2d0c8] bg-[#d2d0c8] sm:grid-cols-2 xl:grid-cols-4"
              aria-label="Studio metrics">
              {[
                ["Tattoo styles", "24", "+12.5%", "from last week"],
                ["This month’s revenue", "$8,420", "+8.2%", "from last month"],
                ["Tattoo stuffs", "18", "+4.1%", "from last month"],
                ["Avg. booking value", "$186", "-2.4%", "from last month"],
              ].map(([label, value, change, caption], index) => (
                <article key={label} className="bg-[#f8f6f0] p-5 sm:p-6">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.13em] text-[#7b878b]">
                    {label}
                  </p>
                  <div className="mt-5 flex items-end justify-between gap-3">
                    <p className="text-4xl tracking-[-0.06em]">{value}</p>
                    <span
                      className={`font-sans text-xs font-bold ${index === 3 ? "text-[#a84f4c]" : "text-[#4e796b]"}`}>
                      {change}
                    </span>
                  </div>
                  <p className="mt-2 font-sans text-[10px] uppercase tracking-widest text-[#a0a5a3]">
                    {caption}
                  </p>
                </article>
              ))}
            </section>

            <div className="mt-8 grid gap-8 xl:grid-cols-[1.55fr_1fr]">
              <section className="border border-[#d2d0c8] bg-[#f8f6f0] p-5 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#7b878b]">
                      Revenue
                    </p>
                    <h3 className="mt-2 text-2xl tracking-[-0.04em]">
                      Studio performance
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#4e796b]">
                    <FaArrowTrendUp /> 8.2%
                  </div>
                </div>
                <div className="mt-8 flex items-end gap-4">
                  <span className="text-4xl tracking-[-0.06em]">$8,420</span>
                  <span className="mb-1 font-sans text-xs text-[#7b878b]">
                    September to date
                  </span>
                </div>
                <div className="mt-8 flex h-44 items-end gap-2 border-b border-l border-[#d2d0c8] px-3 pb-0 pt-4 sm:gap-4 sm:px-5">
                  {[38, 52, 45, 68, 58, 76, 64, 92, 72, 84, 78, 100].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="group flex h-full flex-1 items-end">
                        <div
                          className={`w-full transition-all group-hover:bg-[#a84f4c] ${index === 11 ? "bg-[#a84f4c]" : "bg-[#b9c7c2]"}`}
                          style={{ height: `${height}%` }}
                          title={`Week ${index + 1}`}
                        />
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-3 flex justify-between pl-3 font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-[#9a9e9c] sm:pl-5">
                  <span>Jun 30</span>
                  <span>Jul 14</span>
                  <span>Jul 28</span>
                  <span>Aug 11</span>
                  <span>Aug 25</span>
                </div>
              </section>

              <section className="border border-[#d2d0c8] bg-[#f8f6f0] p-5 sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#7b878b]">
                      Catalog
                    </p>
                    <h3 className="mt-2 text-2xl tracking-[-0.04em]">
                      Featured tattoo styles
                    </h3>
                  </div>
                  <FaCalendarDays className="mt-1 text-xl text-[#a84f4c]" />
                </div>
                <div className="mt-7 divide-y divide-[#dedbd0]">
                  {tattooStyles.map((appointment) => (
                    <div
                      key={appointment.name}
                      className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                      <div
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-serif text-sm text-[#17283b] ${appointment.tone}`}>
                        {appointment.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </div>
                      <div className="min-w-0">
                        <p className="font-sans text-sm font-bold">
                          {appointment.name}
                        </p>
                        <p className="mt-1 truncate font-sans text-[10px] uppercase tracking-[0.08em] text-[#7b878b]">
                          {appointment.detail}
                        </p>
                      </div>
                      <span className="ml-auto shrink-0 font-sans text-[10px] font-bold uppercase tracking-widest text-[#a84f4c]">
                        {appointment.artist}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-7 w-full border-t border-[#dedbd0] pt-5 text-left font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#a84f4c]">
                  View full calendar <span aria-hidden="true">↗</span>
                </button>
              </section>
            </div>

            <section className="mt-8 border border-[#d2d0c8] bg-[#f8f6f0] p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#7b878b]">
                    Live feed
                  </p>
                  <h3 className="mt-2 text-2xl tracking-[-0.04em]">
                    Recent activity
                  </h3>
                </div>
                <button
                  type="button"
                  className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#a84f4c]">
                  See all
                </button>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {activity.map(({ title, description, time, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex gap-3 border-t border-[#dedbd0] pt-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center bg-[#dedbd0] text-sm text-[#a84f4c]">
                      <Icon />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-bold">{title}</p>
                      <p className="mt-1 font-sans text-xs text-[#7b878b]">
                        {description}
                      </p>
                      <p className="mt-2 font-sans text-[10px] uppercase tracking-widest text-[#a0a5a3]">
                        {time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <ResourceManager
            resource={activeNav}
            records={records[activeNav]}
            onSave={(record) => saveRecord(activeNav, record)}
            onDelete={(recordId) => deleteRecord(activeNav, recordId)}
            onBack={() => setActiveNav("Overview")}
          />
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;
