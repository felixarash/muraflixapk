"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [activeMockup, setActiveMockup] = useState(0);
  const swipeStartX = useRef<number | null>(null);
  const swipeEndX = useRef<number | null>(null);

  const androidDownloadUrl = "/api/download";
  const coreFeatures = [
    {
      title: "Playback Engine",
      description:
        "Queue-based play, pause, seek, shuffle, loop modes, resume position, and Android background media notifications.",
    },
    {
      title: "Local Library",
      description:
        "Offline-first library scan with cache, fast search, sort by name/date, and support for external audio share/open intents.",
    },
    {
      title: "Artwork & Metadata",
      description:
        "Gallery artwork selection with FFmpeg embedding for mp3, flac, m4a, ogg, wav, and opus plus temp cleanup logic.",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Track play history, minutes listened, trends, top songs, session stats, streaks, and heatmap-style listening behavior.",
    },
    {
      title: "Favorites & Lyrics",
      description:
        "Persistent favorites and per-song lyrics storage that auto-sync with library changes for deleted tracks.",
    },
    {
      title: "Personalized UX",
      description:
        "Custom profile/name/background, adaptive greetings, responsive mini-player on mobile, and sidebar now-playing on desktop.",
    },
  ];
  const proFeatures = [
    "10-Band Equalizer",
    "Crossfade Controls",
    "Playback Speed",
    "AI Mood + BPM Tags",
    "Smart Playlists",
    "Waveform Visualizer",
    "Bulk Tag Editor",
    "Duplicate Finder",
    "A-B Loop",
    "Sleep Timer",
  ];
  const techStack = [
    "Flutter + Dart",
    "GetX + get_storage",
    "just_audio + just_audio_background",
    "on_audio_query + permission_handler",
    "ffmpeg_kit_flutter_new",
    "fl_chart + intl",
    "image_picker + file_picker",
    "receive_sharing_intent",
    "in_app_purchase",
    "rive + flutter_animate",
  ];
  const appScreenshots = [
    {
      src: "/WhatsApp%20Image%202026-03-27%20at%207.20.45%20AM.jpeg",
      alt: "Muraflix app screenshot home screen",
    },
    {
      src: "/WhatsApp%20Image%202026-03-27%20at%207.20.46%20AM%20(1).jpeg",
      alt: "Muraflix app screenshot library screen",
    },
    {
      src: "/WhatsApp%20Image%202026-03-27%20at%207.20.46%20AM.jpeg",
      alt: "Muraflix app screenshot player screen",
    },
  ];
  const totalMockups = appScreenshots.length;

  const goToMockup = (index: number) => {
    setActiveMockup((index + totalMockups) % totalMockups);
  };

  const goToPreviousMockup = () => {
    goToMockup(activeMockup - 1);
  };

  const goToNextMockup = () => {
    goToMockup(activeMockup + 1);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    swipeStartX.current = event.touches[0]?.clientX ?? null;
    swipeEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    swipeEndX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (swipeStartX.current === null || swipeEndX.current === null) {
      return;
    }

    const deltaX = swipeStartX.current - swipeEndX.current;

    if (deltaX > 45) {
      goToNextMockup();
    } else if (deltaX < -45) {
      goToPreviousMockup();
    }

    swipeStartX.current = null;
    swipeEndX.current = null;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07122a] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(249,115,22,0.20),transparent_30%),radial-gradient(circle_at_80%_8%,rgba(249,115,22,0.28),transparent_32%),radial-gradient(circle_at_52%_84%,rgba(30,64,175,0.30),transparent_35%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(140deg,rgba(7,18,42,0.96)_20%,rgba(10,24,54,0.95)_60%,rgba(5,15,36,0.98)_100%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <div className="inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-lg font-bold text-white shadow-lg shadow-orange-950/40">
              M
            </div>
            <p className="text-xl font-semibold tracking-tight">Muraflix</p>
          </div>
          <span className="rounded-full border border-blue-900/70 bg-[#0f2146]/80 px-3 py-1 text-xs font-medium text-orange-100">
            Offline Android Music Player
          </span>
        </header>

        <section className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/35 bg-orange-400/15 px-4 py-1 text-sm font-medium text-orange-100">
              Designed for pure offline listening
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Your music, no signal needed.
              </h1>
              <p className="max-w-xl text-base leading-8 text-blue-100/90 sm:text-lg">
                Muraflix is a modern offline music player that gives you instant
                access to your local songs with a fast, elegant, distraction-free
                experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={androidDownloadUrl}
                download="muraflix.apk"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-950/40 transition hover:from-orange-400 hover:to-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              >
                Download APK for Android
              </a>
              <p className="text-sm text-blue-100/80">
                Secure direct download for your Android device.
              </p>
            </div>
            <div className="grid max-w-lg grid-cols-3 gap-3 pt-2 text-sm">
              <div className="rounded-xl border border-blue-800/70 bg-[#0d1e42]/80 p-3">
                <p className="text-xl font-semibold">100%</p>
                <p className="text-blue-100/75">Offline Mode</p>
              </div>
              <div className="rounded-xl border border-blue-800/70 bg-[#0d1e42]/80 p-3">
                <p className="text-xl font-semibold">5</p>
                <p className="text-blue-100/75">Main Tabs</p>
              </div>
              <div className="rounded-xl border border-blue-800/70 bg-[#0d1e42]/80 p-3">
                <p className="text-xl font-semibold">Pro</p>
                <p className="text-blue-100/75">Tier Features</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-4xl py-6">
            <div className="absolute -right-8 top-20 -z-10 h-56 w-56 rounded-full bg-orange-500/35 blur-3xl" />
            <div className="absolute -left-8 bottom-8 -z-10 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl" />
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeMockup * 100}%)` }}
              >
                {appScreenshots.map((screen, index) => (
                  <div key={screen.src} className="w-full shrink-0 px-1 sm:px-4">
                    <div
                      className={`relative mx-auto w-full max-w-[290px] [perspective:1300px] transition-all duration-500 ${
                        index === activeMockup
                          ? "scale-100 opacity-100"
                          : "scale-[0.96] opacity-80"
                      }`}
                    >
                      <div className="absolute -right-1 top-28 h-12 w-1 rounded-full bg-slate-300/70" />
                      <div className="absolute -right-1 top-44 h-8 w-1 rounded-full bg-slate-300/70" />
                      <div
                        className={`rounded-[2.6rem] border border-slate-400/45 bg-gradient-to-b from-slate-200 to-slate-400 p-1.5 shadow-[0_30px_55px_rgba(2,6,23,0.6)] ${
                          index === activeMockup
                            ? "sm:[transform:rotateY(0deg)_rotateX(6deg)]"
                            : ""
                        }`}
                      >
                        <div className="rounded-[2.3rem] bg-[#05070d] p-1.5">
                          <div className="overflow-hidden rounded-[2rem] border border-[#233d6d] bg-black">
                            <div className="relative aspect-[9/19.8]">
                              <Image
                                src={screen.src}
                                alt={screen.alt}
                                fill
                                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 290px"
                                className="object-cover object-top"
                                priority={index === 1}
                              />
                              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_22%,rgba(255,255,255,0)_78%,rgba(0,0,0,0.16)_100%)]" />
                              <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(115deg,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.02)_36%,rgba(255,255,255,0)_62%)]" />
                              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center pt-2.5">
                                <div className="h-3 w-3 rounded-full bg-black/95 ring-2 ring-slate-500/35" />
                              </div>
                              <div className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex justify-center">
                                <div className="h-1.5 w-24 rounded-full bg-white/45" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={goToPreviousMockup}
                className="rounded-full border border-blue-700/70 bg-[#102851] px-4 py-2 text-sm font-semibold text-blue-100 transition hover:bg-[#153265]"
                aria-label="Show previous app mockup"
              >
                Prev
              </button>
              <div className="flex items-center gap-2">
                {appScreenshots.map((screen, index) => (
                  <button
                    key={screen.alt}
                    type="button"
                    onClick={() => goToMockup(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === activeMockup
                        ? "bg-orange-400 shadow-[0_0_0_4px_rgba(251,146,60,0.25)]"
                        : "bg-blue-200/45 hover:bg-blue-100/70"
                    }`}
                    aria-label={`Show mockup ${index + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goToNextMockup}
                className="rounded-full border border-blue-700/70 bg-[#102851] px-4 py-2 text-sm font-semibold text-blue-100 transition hover:bg-[#153265]"
                aria-label="Show next app mockup"
              >
                Next
              </button>
            </div>
            <p className="mt-3 text-center text-xs text-blue-100/75">
              Swipe left or right on mobile, or use navigation buttons to preview
              all app screens.
            </p>
          </div>
        </section>

        <section className="pb-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Built for music power-users
            </h2>
            <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-100">
              Home • Library • Favorites • Analytics • Settings
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-blue-800/60 bg-[#0b1d40]/80 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100/80">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-800/60 bg-[#0b1d40]/80 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Plus / Pro Features</h2>
            <p className="mt-2 text-sm leading-7 text-blue-100/80">
              Advanced controls are tier-gated through the Muraflix Pro system for
              listeners who want complete tuning, automation, and deep audio tooling.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {proFeatures.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-orange-400/40 bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-100"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-blue-800/60 bg-[#0b1d40]/80 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
            <p className="mt-2 text-sm leading-7 text-blue-100/80">
              Engineered with Flutter and a production-ready offline toolchain for
              stable Android playback, metadata editing, analytics, and extensibility.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {techStack.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-blue-700/60 bg-[#102851] px-3 py-2 text-sm text-blue-50"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-blue-800/60 bg-[#0b1d40]/80 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Responsive by design
            </h2>
            <p className="mt-3 text-sm leading-7 text-blue-100/80">
              Muraflix is optimized for both mobile and web experiences. Mobile
              users get bottom navigation with mini-player continuity, while larger
              screens benefit from a navigation rail and dedicated now-playing
              sidebar for efficient multitasking.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={androidDownloadUrl}
                download="muraflix.apk"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-950/40 transition hover:from-orange-400 hover:to-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              >
                Download Muraflix APK
              </a>
              <span className="inline-flex items-center justify-center rounded-xl border border-blue-700/70 bg-[#102851] px-6 py-3 text-sm font-medium text-blue-100">
                Android Offline-First Music Player
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-800/60 bg-[#0b1d40]/80 p-6">
            <h2 className="text-xl font-semibold tracking-tight">Color Signature</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="h-6 w-6 rounded-md bg-[#FF6F00]" />
                <span className="text-blue-100/85">Primary Orange #FF6F00</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-6 w-6 rounded-md bg-[#FFAB40]" />
                <span className="text-blue-100/85">Secondary Orange #FFAB40</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-6 w-6 rounded-md bg-[#090909]" />
                <span className="text-blue-100/85">Dark Black #090909</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-6 w-6 rounded-md bg-[#64A1B2]" />
                <span className="text-blue-100/85">Teal Blue #64A1B2</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
