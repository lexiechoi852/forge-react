import { format } from "date-fns";

import { getGreeting } from "./utils/greetings";
import Avatar from "boring-avatars";
import { Link } from "react-router";
import { ChevronRight, Dot, Plus } from "lucide-react";
import { formatCount } from "./utils/format";

function App() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 flex flex-col gap-4">
      <header className="flex items-end">
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          <p className="text-text-secondary">{format(new Date(), "EEE, MMM d, yyyy")}</p>
          <p className="text-text-primary text-2xl sm:text-3xl font-bold">{getGreeting()}, Stranger</p>
        </div>
        <div className="size-11 shrink-0 overflow-hidden rounded-full">
          <Avatar size={44} name="Stranger"  colors={["#f1d989","#3e3932","#0fbab7","#000c0c","#e2e3a9"]} variant="beam" />
        </div>
      </header>

      <section className="bg-background-secondary p-4 rounded-3xl flex flex-col gap-4">
        <div className="flex items-center gap-2">
         <span
            className="inline-block size-2 shrink-0 rounded-full
                      bg-lime-400
                      shadow-[0_0_8px_rgba(163,230,53,0.5)]
                      animate-pulse"
            aria-hidden="true"
          />  
          <p className="text-brand-text text-xs font-bold tracking-widest">READY WHEN YOU ARE</p>
        </div>
        <h1 className="my-2 text-white text-2xl sm:text-3xl font-bold">Make today's work count.</h1>
        <p className="text-text-mute text-sm">Log your sets as you go. No routines, no distractions.</p>
        <Link to="/workouts/new"
          className="w-40 flex items-center justify-center gap-2
            rounded-xl bg-lime-400 px-4 py-3
            font-medium text-black
            transition-colors hover:bg-lime-300
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-lime-400"
        >
          <Plus size={20} aria-hidden="true" />
          <span className="text-sm text-text-primary">Log workout</span>
        </Link>
      </section>

      <section className="bg-white p-4 rounded-3xl flex items-end gap-2 border border-border">
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-text-mute text-xs font-bold tracking-widest">WEEKLY ACTIVITY</p>
          <p className="text-text-primary text-xl font-bold">{formatCount(3, 'workout')}</p>
          <p className="text-text-secondary text-sm">{formatCount(19, 'exercise')} logged</p>
        </div>
        <div>
          
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <div className="flex items-center justify-between mb-2 mx-2">
          <h2 className="text-text-primary text-lg font-bold">Recent workouts</h2>
          <Link to="/workouts" 
            className="p-2 rounded-xl text-text-secondary text-sm font-semibold hover:text-text-primary hover:bg-background-primary">
              View All
          </Link>
        </div>
        <Link to={`/workouts/`}
          className="group block rounded-2xl border border-border
            bg-surface p-4
            transition-colors duration-200
            hover:bg-surface-subtle
            hover:border-stone-300
            hover:shadow-sm
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-brand-hover"
        >
          <div className="flex justify-between mb-1">
            <div className="flex flex-col">
              <p className="text-text-primary font-semibold">{format("10/23/2026", "EEE, MMM d, yyyy")}</p>
              <div className="flex items-center text-text-secondary text-sm">
                <p>{formatCount(3, 'exercise')}</p>
                <span><Dot /></span>
                <p>{formatCount(8, 'rep')}</p>
              </div>
            </div>
            <div 
              className="group grid size-8 shrink-0 place-items-center rounded-full bg-background-primary transition-colors duration-200
                group-hover:bg-lime-300
                group-focus-visible:outline-2
                group-focus-visible:outline-offset-2
                group-focus-visible:outline-lime-400"
            >
              <ChevronRight size={16}  
                className="transition-transform duration-200
                  group-hover:translate-x-0.5
                group-hover:text-text-primary"/>
            </div>
          </div>
          <p className="text-text-secondary text-sm">Felt strong today. </p>
        </Link>
      </section>
    </main>
  );
}

export default App;
