//Clothes shop data
export const products = [
  {
    slug: "heavyweight-studio-tee",
    name: "Heavyweight studio tee",
    category: "Tops",
    price: "$48",
    image:
      "https://disantistudio.com/cdn/shop/files/HeavyweightTees4.jpg?v=1732813824&width=1920",
    tone: "bg-[#d9e0df] text-[#17283b]",
    description:
      "A substantial everyday tee with an easy, considered shape. Made for long studio days, late appointments, and the ordinary days in between.",
    material: "100% heavyweight cotton",
    fit: "Relaxed fit · unisex",
    care: "Wash cold inside out. Hang dry for best results.",
  },
  {
    slug: "flash-club-cap",
    name: "Flash club cap",
    category: "Accessories",
    price: "$32",
    image:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/SBCCPPU7G54MLPKX/SBCCPPU7G54MLPKX-pdp-1.jpg?x-oss-process=image/resize,m_pad,w_570,h_712",
    tone: "bg-[#a84f4c] text-[#f3f0e9]",
    description:
      "A low-profile cap with a clean, broken-in feel. An everyday staple for keeping the sun off while you make your next appointment.",
    material: "Cotton twill",
    fit: "Adjustable back strap · one size",
    care: "Spot clean with a damp cloth.",
  },
  {
    slug: "workwear-overshirt",
    name: "Workwear overshirt",
    category: "Layers",
    price: "$86",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHKeE7uAOZ5SBTjQtFeo3siRiH3qQ4r5hIBLhlNtaQeyWSbOD_giqcT_8&s=10",
    tone: "bg-[#c8c2b4] text-[#17283b]",
    description:
      "A hardworking extra layer with room to move. Wear it open over a tee or buttoned up when the studio runs late.",
    material: "Cotton canvas blend",
    fit: "Relaxed fit · midweight layer",
    care: "Wash cold with like colors. Line dry.",
  },
  {
    slug: "artist-issue-hoodie",
    name: "Artist issue hoodie",
    category: "Tops",
    price: "$74",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzT07WDKdFAYg_hThkJr5rghb45R-slIfui7lnt-ZxIw&s",
    tone: "bg-[#17283b] text-[#e9a976]",
    description:
      "A soft, dependable layer for drawing sessions, shop runs, and the ride home. Finished with a roomy hood and a comfortable everyday fit.",
    material: "Cotton-rich fleece",
    fit: "Relaxed fit · unisex",
    care: "Wash cold inside out. Tumble dry low.",
  },
  {
    slug: "enamel-flash-pin-set",
    name: "Enamel flash pin set",
    category: "Accessories",
    price: "$24",
    image: "https://cdn.media.amplience.net/s/hottopic/20674883_hi",
    tone: "bg-[#dedbd0] text-[#a84f4c]",
    description:
      "A small set of enamel pins inspired by classic flash. Pin them to a jacket, bag, or wherever you keep your favorite references.",
    material: "Hard enamel with metal backing",
    fit: "Set of 3 pins",
    care: "Keep dry and store safely when not in use.",
  },
  {
    slug: "canvas-utility-tote",
    name: "Canvas utility tote",
    category: "Accessories",
    price: "$38",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlcMN4GL4QHn3CYsRz2GZpkNZ6L_BqtegTOiGJSYOLmaU7MdIGNkmFnpb&s=10",
    tone: "bg-[#e8e3d8] text-[#17283b]",
    description:
      "A sturdy carryall with space for your sketchbook, day-to-day essentials, and the little things collected along the way.",
    material: "Heavy cotton canvas",
    fit: "One size · shoulder-length handles",
    care: "Spot clean. Do not machine wash.",
  },
];

//Categories data
export const apparelCategories = ["Tops", "Layers"];

//Tattoo data
export const tattooStyles = [
  {
    slug: "japanese-tattoo-style",
    name: "Japanese",
    category: "Tattoo style",
    price: "$18",
    priceNote: "Demo price · not a quote",
    number: "01",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEpPtI7s7hyKmHmdYxBdeDzCP5osPP5r2qqFHi6JzvxVQOGeMhQlLqVYH&s=10",
    description:
      "Bold movement, mythology, and compositions that follow the body.",
    signature: "Confident outlines, layered color, and traditional motifs.",
    composition: "Large-scale forms designed to move with the body's shape.",
    considerations:
      "Plan placement and scale with an artist experienced in Japanese composition.",
    tone: "bg-[#d9e0df] text-[#17283b]",
  },
  {
    slug: "traditional-tattoo-style",
    name: "Traditional",
    category: "Tattoo style",
    price: "$14",
    priceNote: "Demo price · not a quote",
    number: "02",
    image:
      "https://img.magnific.com/free-vector/colorful-tattoo-design-featuring-bird-red-roses-with-leaves_32991-10975.jpg?semt=ais_hybrid&w=740&q=80",
    description:
      "Strong outlines, saturated color, and symbols with a story to tell.",
    signature:
      "Heavy outlines, a focused palette, and instantly readable imagery.",
    composition:
      "Clear shapes and bold motifs that hold their character over time.",
    considerations:
      "Choose a motif that feels personal, then work with your artist on scale and placement.",
    tone: "bg-[#a84f4c] text-[#f3f0e9]",
  },
  {
    slug: "fine-line-tattoo-style",
    name: "Fine line",
    category: "Tattoo style",
    price: "$12",
    priceNote: "Demo price · not a quote",
    number: "03",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtww9xo_fOzNEpay0zJVptPhlNek0JmbM6-KpE26njAQI9H6-2AQ11-Ap&s=10",
    description:
      "Quiet detail and delicate marks for a lighter, more intimate feel.",
    signature: "Fine lines, restrained detail, and deliberate negative space.",
    composition:
      "Compact, considered designs with enough room for each detail.",
    considerations:
      "Fine detail and how it ages depend on placement, scale, skin, and artist technique.",
    tone: "bg-[#dedbd0] text-[#17283b]",
  },
  {
    slug: "blackwork-tattoo-style",
    name: "Blackwork",
    category: "Tattoo style",
    price: "$16",
    priceNote: "Demo price · not a quote",
    number: "04",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-ckcXjCCu1J2rwZ67BV32hrWfRnbzT--x6OAFNjQg1OraW6aGCJh9q2R&s=10",
    description:
      "Graphic contrast and solid black used to make a lasting impression.",
    signature: "High contrast, solid black, and graphic pattern or imagery.",
    composition: "Strong silhouettes that balance filled areas with open skin.",
    considerations:
      "Large solid areas need thoughtful placement and an artist skilled in black saturation.",
    tone: "bg-[#17283b] text-[#e9a976]",
  },
];

//Materials data
export const materials = [
  {
    slug: "tattoo-ink",
    name: "Ink",
    category: "Tattoo material",
    number: "01",
    detail: "Pigment / color",
    price: "$28",
    priceNote: "Demo price · not real",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJapQ163xVaqXNiuuOabzxMdB-wHoPZCKWeuWrGeLXklxo_AiWRjqjMEcs&s=10",
    description:
      "Black, greywash, and saturated color are chosen to suit the style, skin, and how the piece should age.",
    tone: "bg-[#17283b] text-[#e9a976]",
  },
  {
    slug: "tattoo-needles",
    name: "Needles",
    category: "Tattoo material",
    number: "02",
    detail: "Liners / shaders",
    price: "$18",
    priceNote: "Demo price · not real",
    image:
      "https://www.tattoogizmo.com/cdn/shop/files/virtueneedle.jpg?v=1787228347",
    description:
      "Different groupings create fine detail, confident outlines, soft shading, or bold fields of black.",
    tone: "bg-[#d9e0df] text-[#17283b]",
  },
  {
    slug: "tattoo-machine",
    name: "Machine",
    category: "Tattoo material",
    number: "03",
    detail: "Coil / rotary",
    price: "$220",
    priceNote: "Demo price · not real",
    image:
      "https://koolsvilletattoolv.com/wp-content/uploads/2026/06/Close-up-of-coil-tattoo-machine-and-tattoo-needles-on-a-workstation.png",
    description:
      "The artist's machine controls the rhythm of the hand and helps every mark land with intention.",
    tone: "bg-[#a84f4c] text-[#f3f0e9]",
  },
  {
    slug: "tattoo-aftercare",
    name: "Aftercare",
    category: "Tattoo material",
    number: "04",
    detail: "The final material",
    price: "$14",
    priceNote: "Demo price · not real",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaxG2owhscTtr9N50pR_9EAYoCLYU8VdpNjin4sYDpkq4y0TZ4OrnIuVR&s=10",
    description:
      "Clean hands, a little patience, and the right care help fresh work settle into its lasting form.",
    tone: "bg-[#dedbd0] text-[#17283b]",
  },
];
