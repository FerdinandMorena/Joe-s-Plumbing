module.exports = [
"[project]/app/portfolio/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const MEDIA = [
    // Images (from /public/images)
    {
        id: "img-1",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.46.jpeg",
        alt: "Plumbing work photo 1",
        title: "Recent job"
    },
    {
        id: "img-2",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.47.jpeg",
        alt: "Plumbing work photo 2",
        title: "Recent job"
    },
    {
        id: "img-4",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.50%20(1).jpeg",
        alt: "Plumbing work photo 4",
        title: "Recent job"
    },
    {
        id: "img-5",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.50.jpeg",
        alt: "Plumbing work photo 5",
        title: "Recent job"
    },
    {
        id: "img-6",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.51%20(1).jpeg",
        alt: "Plumbing work photo 6",
        title: "Recent job"
    },
    {
        id: "img-7",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.51.jpeg",
        alt: "Plumbing work photo 7",
        title: "Recent job"
    },
    {
        id: "img-8",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.52.jpeg",
        alt: "Plumbing work photo 8",
        title: "Recent job"
    },
    {
        id: "img-9",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.53%20(1).jpeg",
        alt: "Plumbing work photo 9",
        title: "Recent job"
    },
    {
        id: "img-10",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.53.jpeg",
        alt: "Plumbing work photo 10",
        title: "Recent job"
    },
    {
        id: "img-11",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.56.jpeg",
        alt: "Plumbing work photo 11",
        title: "Recent job"
    },
    {
        id: "img-12",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.57%20(1).jpeg",
        alt: "Plumbing work photo 12",
        title: "Recent job"
    },
    {
        id: "img-13",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.57.jpeg",
        alt: "Plumbing work photo 13",
        title: "Recent job"
    },
    {
        id: "img-14",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.58%20(1).jpeg",
        alt: "Plumbing work photo 14",
        title: "Recent job"
    },
    {
        id: "img-15",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.58.jpeg",
        alt: "Plumbing work photo 15",
        title: "Recent job"
    },
    {
        id: "img-16",
        type: "image",
        src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.59.jpeg",
        alt: "Plumbing work photo 16",
        title: "Recent job"
    },
    // Videos (from /public/images)
    {
        id: "vid-1",
        type: "video",
        src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.01.mp4",
        poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.46.jpeg",
        title: "Job video"
    },
    {
        id: "vid-2",
        type: "video",
        src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.42.mp4",
        poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.47.jpeg",
        title: "Job video"
    },
    {
        id: "vid-3",
        type: "video",
        src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.44.mp4",
        poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.49.jpeg",
        title: "Job video"
    },
    {
        id: "vid-4",
        type: "video",
        src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.45.mp4",
        poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.50.jpeg",
        title: "Job video"
    },
    {
        id: "vid-5",
        type: "video",
        src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.56%20(1).mp4",
        poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.51.jpeg",
        title: "Job video"
    },
    {
        id: "vid-6",
        type: "video",
        src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.56.mp4",
        poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.52.jpeg",
        title: "Job video"
    },
    {
        id: "vid-7",
        type: "video",
        src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.57.mp4",
        poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.53.jpeg",
        title: "Job video"
    },
    {
        id: "vid-8",
        type: "video",
        src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.58.mp4",
        poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.56.jpeg",
        title: "Job video"
    }
];
const FILTERS = [
    {
        key: "all",
        label: "All"
    },
    {
        key: "image",
        label: "Images"
    },
    {
        key: "video",
        label: "Videos"
    }
];
function PortfolioPage() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [activeItem, setActiveItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (filter === "all") return MEDIA;
        return MEDIA.filter((m)=>m.type === filter);
    }, [
        filter
    ]);
    const openAt = (item)=>{
        const idx = filtered.findIndex((x)=>x.id === item.id);
        setActiveIndex(idx);
        setActiveItem(item);
    };
    const closeModal = ()=>{
        setActiveItem(null);
        setActiveIndex(-1);
    };
    const goTo = (idx)=>{
        if (!filtered.length) return;
        const next = (idx + filtered.length) % filtered.length;
        setActiveIndex(next);
        setActiveItem(filtered[next]);
    };
    const goNext = ()=>goTo(activeIndex + 1);
    const goPrev = ()=>goTo(activeIndex - 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeItem) return;
        const onKeyDown = (e)=>{
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        document.addEventListener("keydown", onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return ()=>{
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        activeItem,
        activeIndex,
        filtered.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-bold text-foreground mb-4",
                            children: "Joe’s Work Showcase"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-3xl mx-auto",
                            children: "A quick look at real jobs—repairs, installations, and emergency callouts."
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex rounded-2xl border border-border bg-card p-1 shadow-sm",
                        children: FILTERS.map((f)=>{
                            const active = filter === f.key;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setFilter(f.key),
                                className: `px-4 py-2 rounded-xl text-sm font-semibold transition-all ${active ? "bg-primary text-primary-foreground shadow" : "text-foreground hover:bg-muted"}`,
                                "aria-pressed": active,
                                children: f.label
                            }, f.key, false, {
                                fileName: "[project]/app/portfolio/page.jsx",
                                lineNumber: 250,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/page.jsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: filtered.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "group rounded-3xl overflow-hidden border border-border bg-card shadow-sm transition-transform duration-300 hover:scale-[1.01]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>openAt(item),
                                className: "block w-full text-left",
                                "aria-label": `Open ${item.type} preview: ${item.title}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: item.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.src,
                                                alt: item.alt,
                                                className: "w-full h-80 md:h-96 object-cover",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/page.jsx",
                                                lineNumber: 284,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/page.jsx",
                                                lineNumber: 291,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                className: "absolute bottom-0 left-0 right-0 p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white font-semibold leading-tight",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portfolio/page.jsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white/80 text-xs mt-1",
                                                                    children: "Photo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portfolio/page.jsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portfolio/page.jsx",
                                                            lineNumber: 295,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold px-2.5 py-1 rounded-full border bg-white/10 text-white border-white/20",
                                                            children: "Image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/page.jsx",
                                                            lineNumber: 301,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portfolio/page.jsx",
                                                    lineNumber: 294,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/page.jsx",
                                                lineNumber: 293,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                        className: "w-full h-80 md:h-96 object-cover bg-black",
                                                        preload: "metadata",
                                                        poster: item.poster,
                                                        muted: true,
                                                        playsInline: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                                src: item.src,
                                                                type: "video/mp4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portfolio/page.jsx",
                                                                lineNumber: 317,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Your browser does not support the video tag."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portfolio/page.jsx",
                                                        lineNumber: 310,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pointer-events-none absolute inset-0 grid place-items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-14 w-14 rounded-full bg-black/45 border border-white/20 backdrop-blur flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white text-2xl leading-none",
                                                                children: "▶"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portfolio/page.jsx",
                                                                lineNumber: 324,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/page.jsx",
                                                            lineNumber: 323,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/page.jsx",
                                                        lineNumber: 322,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portfolio/page.jsx",
                                                lineNumber: 309,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-foreground font-semibold leading-tight",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portfolio/page.jsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-xs mt-1",
                                                                    children: "Video"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portfolio/page.jsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portfolio/page.jsx",
                                                            lineNumber: 332,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold px-2.5 py-1 rounded-full border bg-primary/10 text-primary border-primary/20",
                                                            children: "Video"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/page.jsx",
                                                            lineNumber: 340,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portfolio/page.jsx",
                                                    lineNumber: 331,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/page.jsx",
                                                lineNumber: 330,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.jsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.jsx",
                                lineNumber: 275,
                                columnNumber: 15
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this),
                activeItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Media preview",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
                            onClick: closeModal,
                            "aria-label": "Close preview"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-[101] w-full max-w-5xl",
                            children: [
                                filtered.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: goPrev,
                                            className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full rounded-full border border-white/20 bg-black/40 text-white w-11 h-11 flex items-center justify-center backdrop-blur hover:bg-black/55 transition-colors",
                                            "aria-label": "Previous",
                                            children: "‹"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.jsx",
                                            lineNumber: 372,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: goNext,
                                            className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full rounded-full border border-white/20 bg-black/40 text-white w-11 h-11 flex items-center justify-center backdrop-blur hover:bg-black/55 transition-colors",
                                            "aria-label": "Next",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.jsx",
                                            lineNumber: 380,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl overflow-hidden border border-border bg-card shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3 px-5 py-4 border-b border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-foreground font-semibold leading-tight",
                                                            children: activeItem.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/page.jsx",
                                                            lineNumber: 394,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-xs mt-1",
                                                            children: [
                                                                activeItem.type === "image" ? "Image" : "Video",
                                                                " •",
                                                                " ",
                                                                activeIndex + 1,
                                                                "/",
                                                                filtered.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portfolio/page.jsx",
                                                            lineNumber: 397,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portfolio/page.jsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: closeModal,
                                                    className: "rounded-xl border border-border bg-background px-3 py-2 text-sm font-semibold hover:bg-muted transition-colors",
                                                    children: "Close"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.jsx",
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/page.jsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-black",
                                            onTouchStart: (e)=>{
                                                const t = e.touches?.[0];
                                                if (!t) return;
                                                e.currentTarget.dataset.touchX = String(t.clientX);
                                            },
                                            onTouchEnd: (e)=>{
                                                const startX = Number(e.currentTarget.dataset.touchX || 0);
                                                const t = e.changedTouches?.[0];
                                                if (!t || !startX) return;
                                                const dx = t.clientX - startX;
                                                if (Math.abs(dx) < 50) return;
                                                if (dx < 0) goNext();
                                                else goPrev();
                                            },
                                            children: activeItem.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: activeItem.src,
                                                alt: activeItem.alt,
                                                className: "w-full max-h-[75vh] object-contain"
                                            }, activeItem.id, false, {
                                                fileName: "[project]/app/portfolio/page.jsx",
                                                lineNumber: 429,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                className: "w-full max-h-[75vh] object-contain",
                                                controls: true,
                                                autoPlay: true,
                                                preload: "metadata",
                                                poster: activeItem.poster,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                        src: activeItem.src,
                                                        type: "video/mp4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/page.jsx",
                                                        lineNumber: 444,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Your browser does not support the video tag."
                                                ]
                                            }, activeItem.id, true, {
                                                fileName: "[project]/app/portfolio/page.jsx",
                                                lineNumber: 436,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.jsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.jsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-center text-xs text-white/70",
                                    children: "Tip: use \x1b\x1b keys to navigate, swipe on mobile, ESC to close"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.jsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 368,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 355,
                    columnNumber: 11
                }, this),
                filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground mt-12",
                    children: "No items to show."
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 459,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Want your job featured here? Book an appointment and we’ll take care of the rest."
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/page.jsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/portfolio/page.jsx",
            lineNumber: 233,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/portfolio/page.jsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_portfolio_page_jsx_10a209d6._.js.map